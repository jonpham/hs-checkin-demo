import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

import { Student } from '@prisma/client';
import { EditStudentForm } from '../EditStudentForm';

const janeDoe: Student = {
  id: 'id1',
  first_name: 'Jane',
  last_name: 'Doe',
  check_in_time: new Date(2024, 10, 1, 12),
};

const meta = {
  title: 'components/EditStudentForm',
  component: EditStudentForm,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
    student: janeDoe,
  },
} satisfies Meta<typeof EditStudentForm>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const Exists: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const el = canvas.getByRole('button', { name: 'Edit Student' });
    await expect(el).toBeVisible();
  },
};
