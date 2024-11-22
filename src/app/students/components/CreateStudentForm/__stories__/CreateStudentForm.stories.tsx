import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

import { CreateStudentForm } from '../CreateStudentForm';

const meta = {
  title: 'components/CreateStudentForm',
  component: CreateStudentForm,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
    students: [],
  },
} satisfies Meta<typeof CreateStudentForm>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const Exists: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const el = canvas.getByRole('button', { name: 'Add Student' });
    await expect(el).toBeVisible();
  },
};
