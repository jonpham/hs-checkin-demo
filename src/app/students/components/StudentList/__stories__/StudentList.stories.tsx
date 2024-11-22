import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

import { StudentList } from '../StudentList';
import { Student } from '@prisma/client';

const meta = {
  title: 'components/StudentList',
  component: StudentList,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
    students: [],
  },
} satisfies Meta<typeof StudentList>;

export default meta;
type Story = StoryObj<typeof meta>;

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

export const SingleStudent: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const el = canvas.getByText(janeDoe.last_name, { selector: 'td' });
    await expect(el).toBeVisible();
  },
  args: {
    students: [janeDoe],
  },
};

export const MultipleStudents: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const el = canvas.getByText(jimLee.first_name, { selector: 'td' });
    await expect(el).toBeVisible();
  },
  args: {
    students: [janeDoe, jimLee],
  },
};
