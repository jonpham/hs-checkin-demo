import studentService from '@/app/services/student';
import { randomUUID } from 'crypto';

export async function GET() {
  const students = await studentService.getAll();

  return Response.json({ data: students, status: 200 });
}

export async function POST(request: Request) {
  const studentToCreate = await request.json();
  const studentObject = {
    ...studentToCreate,
    id: randomUUID(),
    check_in_time: new Date(studentToCreate.check_in_time)
  };

  let result;
  try {
    result = await studentService.create(studentObject);
    console.log(result);
    // const student = await studentService.getById(result!.id);
    // console.log(student);
  } catch (e) {
    console.error (e)
    // return Response.error();
  }

  return Response.json({ data: result, status: 201 });
}
