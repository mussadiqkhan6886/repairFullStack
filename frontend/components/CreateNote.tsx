'use client';

import { createNote } from '@/server/note';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, FormEvent, useState } from 'react';

const CreateNote = () => {
  const router = useRouter();

  const createNoteMut = useMutation({
    mutationFn: createNote,
    onSuccess() {
      router.push('/admin/dashboard/notes');
    },
  });

  const [data, setData] = useState<Omit<NoteType, "_id" | "createdAt">>({
    noteFor: '',
    title: '',
    description: '',
    priority: 'Medium',
    status: 'Pending',
  });

  const handleChange = (
    e: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    createNoteMut.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="title"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Note Title
        </label>

        <input
          id="title"
          name="title"
          type="text"
          value={data.title}
          onChange={handleChange}
          placeholder="Enter note title"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-black focus:ring-2 focus:ring-gray-200"
        />
      </div>

      <div>
        <label
          htmlFor="description"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Description
        </label>

        <textarea
          id="description"
          name="description"
          rows={6}
          value={data.description}
          onChange={handleChange}
          placeholder="Write your note details..."
          className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-black focus:ring-2 focus:ring-gray-200"
        />
      </div>

      <div>
        <label
          htmlFor="priority"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Priority
        </label>

        <select
          id="priority"
          name="priority"
          value={data.priority}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
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
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
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
          disabled={createNoteMut.isPending}
          className="rounded-lg bg-black px-5 py-3 font-medium text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {createNoteMut.isPending ? 'Creating Note...' : 'Create Note'}
        </button>
      </div>

      {createNoteMut.isError && (
        <p className="text-red-500">{createNoteMut.error.message}</p>
      )}
    </form>
  );
};

export default CreateNote;