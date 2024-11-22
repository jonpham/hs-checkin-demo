import { render, screen } from '@/testing/utility';
import { describe, expect, it } from 'vitest';

import { Student } from '@prisma/client';
import { EditStudentForm } from '../EditStudentForm';

describe('EditStudentForm', () => {
  const janeDoe: Student = {
    id: 'id1',
    first_name: 'Jane',
    last_name: 'Doe',
    check_in_time: new Date(2024, 10, 1, 12),
  };

  it('should have btn to submit updates to student', () => {
    // Arrange / Given a Setup
    render(<EditStudentForm student={janeDoe} />);
    const btn = screen.queryByRole('button', { name: 'Update Student' });
    // Assert on Expectations
    expect(btn).not.toBeDisabled();
  });

  it('should have btn to delete student', () => {
    // Arrange / Given a Setup
    render(<EditStudentForm student={janeDoe} />);
    const btn = screen.queryByRole('button', { name: 'Delete Student' });
    // Assert on Expectations
    expect(btn).not.toBeDisabled();
  });
});
