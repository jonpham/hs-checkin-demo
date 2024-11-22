import './EditStudentForm.css';

import Link from 'next/link';
import Button from '../Button';
import { Student } from '@prisma/client';
import StudentList from '../StudentList';
import { deleteStudent, upsertStudent } from './serverAction';

function EditStudentForm({ student }: { student: Student }) {
  /** NOTE:
   * This exemplifies a direct server component UPDATE using PRISMA client
   */
  const upsertStudentWithProp = upsertStudent.bind(null, student);
  const deleteStudentWithId = deleteStudent.bind(null, student.id);

  return (
    <>
      <form action={upsertStudentWithProp}>
        <div className="rounded-md bg-gray-50 p-4 md:p-6">
          {/* Details */}
          <StudentList students={[student]} />
          {/* Form */}
          <div className="mb-4">
            <label htmlFor="name" className="mb-2 block text-sm font-medium">
              Update Student Name
            </label>
            <div className="relative mt-2 rounded-md" id="name">
              <div className="relative">
                <input
                  id="first-name"
                  name="first-name"
                  type="string"
                  defaultValue={student.first_name}
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                />
              </div>
              <div className="relative">
                <input
                  id="last-name"
                  name="last-name"
                  type="string"
                  defaultValue={student.last_name}
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-end gap-4">
          <Button type="submit">Update Student</Button>
          <Link
            href="/students"
            className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
          >
            Cancel
          </Link>
        </div>
      </form>
      <Button onClick={deleteStudentWithId}>Delete Student</Button>
    </>
  );
}

export { EditStudentForm };
