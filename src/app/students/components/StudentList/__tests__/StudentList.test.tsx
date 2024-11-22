import { describe, expect, it } from 'vitest';
import { screen, render } from '@/testing/utility';

import { StudentList } from '../StudentList';
import { Student } from '@prisma/client';

describe('StudentList', () => {
  const janeDoe: Student = {
    id: 'id1',
    first_name: 'Jane',
    last_name: 'Doe',
    check_in_time: new Date(2024, 10, 1, 12),
  };

  const jimLee: Student = {
    id: 'id2',
    first_name: 'Jim',
    last_name: 'Lee',
    check_in_time: new Date(2024, 10, 1, 13),
  };

  const students = [janeDoe, jimLee];

  it.each(['First name', 'Last name', 'Check in time'])(
    `should have %s data value in header row`,
    (val) => {
      // Arrange / Given a Setup
      render(<StudentList students={students} />);
      const headerLabel = screen.getByText(val, { selector: 'th' });
      // Assert on Expectations
      expect(headerLabel).toBeVisible();
    }
  );

  it.each([
    [janeDoe.first_name, 'a'],
    [janeDoe.last_name, 'td'],
    [janeDoe.check_in_time.toUTCString(), 'td'],
  ])(`should have %s data value in row`, (val, selector) => {
    // Arrange / Given a Setup
    render(<StudentList students={students} />);
    const dataPt = screen.getByText(val, { selector, exact: false });
    // Assert on Expectations
    expect(dataPt).toBeVisible();
  });
});
