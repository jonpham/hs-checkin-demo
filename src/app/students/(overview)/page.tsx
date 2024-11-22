import { Student } from '@prisma/client';
import CreateStudentForm from '../components/CreateStudentForm';
import StudentList from '../components/StudentList';
import studentService from '@/app/services/student';

export default async function Page() {
  /** NOTE:
   * This exemplifies a direct server component fetch using PRISMA client
   */
  const students: Student[] | undefined | null = await studentService.getAll();

  return (
    <>
      <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
        <strong>Welcome to Student Catalog.</strong>
        {" Here you'll be able to add and view current students."}
      </p>
      {!students ? (
        'No Students Have Checked In Yet.'
      ) : (
        <StudentList students={students} />
      )}
      <p className={`text-lg  text-gray-1000 md:text-3lg md:leading-normal`}>
        <strong>Add a Student</strong>
      </p>
      <CreateStudentForm />
    </>
  );
}
