'use server';

import studentService from '@/app/services/student';
import { Student } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

async function upsertStudent(student: Student, formData: FormData) {
  const formFirstName = formData.get('first-name')?.toString();
  const formLastName = formData.get('last-name')?.toString();

  const studentFromForm: Omit<Student, 'check_in_time'> = {
    ...student,
    ...(formFirstName ? { first_name: formFirstName } : {}),
    ...(formLastName ? { last_name: formLastName } : {}),
  };

  await studentService.update(studentFromForm);

  revalidatePath('/students');
  redirect('/students');
}

async function deleteStudent(studentId: string) {
  console.log('deleting student', studentId);
  await studentService.delete(studentId);

  revalidatePath('/students');
  redirect('/students');
}

export { deleteStudent, upsertStudent };
