import { describe, expect, it } from 'vitest';
import { screen, render } from '@/testing/utility';

import { CreateStudentForm } from '../CreateStudentForm';

describe('CreateStudentForm', () => {
  it('should have btn to create student', () => {
    // Arrange / Given a Setup
    render(<CreateStudentForm />);
    const btn = screen.queryByRole('button', { name: 'Check In' });
    // Assert on Expectations
    expect(btn).not.toBeDisabled();
  });
});
