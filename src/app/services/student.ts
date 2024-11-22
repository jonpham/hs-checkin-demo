import prisma from '@/app/lib/prisma';
import type { PrismaClient, Student } from '@prisma/client';

/** Server Data Service Abstraction */
type FetchArgs = Parameters<typeof fetch>;

class StudentDataService {
  public client?: PrismaClient;
  private directCall: boolean = true;
  private apiBaseUrl: string | undefined;

  constructor(apiBaseUrl?: string) {
    this.client = prisma;
    if (apiBaseUrl !== undefined) {
      this.apiBaseUrl = apiBaseUrl;
      this.directCall = false;
    }
  }

  isReady(): boolean {
    return !!this.client;
  }

  async fetch(...args: FetchArgs) {
    if (!this.isReady) {
      return Promise.reject('client not ready');
    }
    let response;
    try {
      response = await fetch(...args);
    } catch (e) {
      console.error(e, response);
    } finally {
      return response;
    }
  }

  /** Student */
  async getAll(): Promise<Student[] | undefined | null> {
    if (!this.directCall) {
      const studentResponse = await this.fetch(
        `${this.apiBaseUrl}/api/student`
      );

      return studentResponse?.json();
    }

    return (await this.client?.student.findMany()) || [];
  }

  async getById(id: string): Promise<Student | string> {
    if (!this.directCall) {
      const studentResponse = await this.fetch(
        `${this.apiBaseUrl}/api/student/${encodeURIComponent(id)}`
      );
      const studentJson = await studentResponse?.json();

      return !studentResponse?.ok ? 'not ok' : studentJson.data;
    }

    const student = await this.client?.student.findUnique({
      where: { id },
    });

    return !student ? 'not ok' : student;
  }

  async create(
    student: Omit<Student, 'id' | 'check_in_time' | 'check_in_count'>
  ): Promise<Student | undefined | null> {
    const studentToCreate: Student = {
      ...student,
      id: crypto.randomUUID(),
      check_in_time: new Date(),
      check_in_count: 1
    };

    if (!this.directCall) {
      const creationResponse = await this.fetch('/api/student', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(studentToCreate),
      });
      const createdStudent = await creationResponse?.json();

      return createdStudent['data'];
    }

    return this.client?.student.upsert({
      where: { 
        email_address: studentToCreate.email_address
      },
      create: studentToCreate,
      update: {
        ...studentToCreate,
        check_in_count: {
          increment: 1
        }
      }
    });
  }

  async update(student: Omit<Student, 'check_in_time'>) {
    if (!this.directCall) {
      return await this.fetch(
        `/api/student/${encodeURIComponent(student.id)}`,
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(student),
        }
      );
    }

    return this.client?.student.upsert({
      where: {
        id: student.id,
      },
      create: {
        first_name: student.first_name,
        last_name: student.last_name,
        email_address: student.email_address,
        check_in_time: new Date(),
        check_in_count: 1,
      },
      update: {
        first_name: student.first_name,
        last_name: student.last_name,
      },
    });
  }

  async delete(id: string) {
    if (!this.directCall) {
      return await this.fetch(`/api/student/${id}`, {
        method: 'DELETE',
      });
    }

    console.log(`Deleting student ${id} using PRISMA`);
    let deletedStudent;
    try {
      deletedStudent = await this.client?.student.delete({
        where: {
          id,
        },
      });
    } catch (e) {
      console.error('ERROR:', e);
    } finally {
      console.log('DELETED:', deletedStudent);
    }

    return deletedStudent;
  }
}

// Instantiate singletons
const studentService = new StudentDataService();
const studentServiceClient = new StudentDataService('http://localhost:3000');

export {
  StudentDataService,
  studentServiceClient as apiClient,
  studentService as default,
};
