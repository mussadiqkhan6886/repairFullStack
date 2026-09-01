'use client';

import { createUser } from '@/server/user';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, FormEvent, useState } from 'react';

const CreateUser = () => {
  const router = useRouter();

  const createUserMut = useMutation({
    mutationFn: createUser,
    onSuccess() {
      router.push('/admin/dashboard/users');
    },
  });

  const [data, setData] = useState<Omit<UserType, "_id" | "createdAt">>({
    username: '',
    email: '',
    password: '',
    role: 'Employee',
    status: 'Active',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    createUserMut.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="username"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Username
        </label>

        <input
          id="username"
          name="username"
          type="text"
          value={data.username}
          onChange={handleChange}
          placeholder="Enter username"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-black focus:ring-2 focus:ring-gray-200"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Email
        </label>

        <input
          id="email"
          name="email"
          type="email"
          value={data.email}
          onChange={handleChange}
          placeholder="Enter email address"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-black focus:ring-2 focus:ring-gray-200"
        />
      </div>

      <div>
        <label
          htmlFor="password"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Password
        </label>

        <input
          id="password"
          name="password"
          type="password"
          value={data.password}
          onChange={handleChange}
          placeholder="Create password"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-black focus:ring-2 focus:ring-gray-200"
        />
      </div>

      <div>
        <label
          htmlFor="role"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Role
        </label>

        <select
          id="role"
          name="role"
          value={data.role}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
        >
          <option value="Employee">Employee</option>
          <option value="Manager">Manager</option>
          <option value="Admin">Admin</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="status"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Status
        </label>

        <select
          id="status"
          name="status"
          value={data.status}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>

      <div className="flex justify-end gap-4 pt-4">
        <button
          type="button"
          className="rounded-lg border px-5 py-3 font-medium transition hover:bg-gray-100"
        >
          Cancel
        </button>

        <button
          type="submit"
          disabled={createUserMut.isPending}
          className="rounded-lg bg-black px-5 py-3 font-medium text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {createUserMut.isPending ? 'Creating User...' : 'Create User'}
        </button>
      </div>

      {createUserMut.isError && (
        <p className="text-red-500 text-center w-full">{createUserMut.error.message}</p>
      )}
    </form>
  );
};

export default CreateUser;