'use client';

import './CreateStudentForm.css';

import Button from '../Button';
import { apiClient } from '@/app/services/student';
import { Student } from '@prisma/client';
import { redirect } from 'next/navigation';
import { useState } from 'react';

function CreateStudentForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');

  /** NOTE:
   * This exemplifies a server component POST using API client
   */
  const createStudent = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const formStudent: Omit<
      Student,
      'id' | 'check_in_time' | 'check_in_count'
    > = {
      first_name: firstName,
      last_name: lastName,
      email_address: emailAddress,
    };

    try {
      await apiClient.create(formStudent);
    } catch (e) {
      console.error(e);
    }

    redirect('/students');
  };

  return (
    <form onSubmit={createStudent}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Create Student */}
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Student Name
          </label>
          <div className="relative mt-2 rounded-md" id="name">
            <div className="relative">
              <input
                id="first-name"
                name="first-name"
                type="string"
                placeholder="First Name"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="relative">
              <input
                id="last-name"
                name="last-name"
                type="string"
                placeholder="Last Name"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="relative">
              <input
                id="email-address"
                name="email-address"
                type="string"
                placeholder="School Email Address (*.edu)"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                onChange={(e) => setEmailAddress(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Button type="submit">Check In</Button>
        <button
          type="reset"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export { CreateStudentForm };
