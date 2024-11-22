import { apiClient } from '@/app/services/student';
import { Student } from '@prisma/client';
import Link from 'next/link';
import EditStudentForm from '../components/EditStudentForm';

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const { id } = params;

  /** NOTE:
   * This exemplifies a API Path fetch from server component fetch using PRISMA client
   */
  const student: Student | string = await apiClient.getById(id);

  return (
    <>
      <Link
        href="/students"
        className="text-blue-600 text-2xl underline hover:text-blue-1000"
      >
        Back to Student List
      </Link>
      <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
        <strong>Student Detailed View</strong>
        {" Here you'll be able to view and edit a current student."}
      </p>
      {typeof student === 'string' ? (
        student
      ) : (
        <EditStudentForm student={student} />
      )}
    </>
  );
}
