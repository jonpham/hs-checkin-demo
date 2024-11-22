import studentService from '@/app/services/student';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const studentId = (await params).id;
  const student = await studentService.getById(studentId);

  return Response.json({ data: student });
}
