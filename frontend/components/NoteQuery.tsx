'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import React, { ChangeEvent } from 'react';

const NoteQuery = () => {

  const router = useRouter();
  const params = useSearchParams();


  const handleChange = (
    e: ChangeEvent<HTMLSelectElement>,
    query: string
  ) => {

    const { value } = e.target;

    const searchParams = new URLSearchParams(params);

    if (value) {
      searchParams.set(query, value);
    } else {
      searchParams.delete(query);
    }

    router.push(
      `/admin/dashboard/notes?${searchParams.toString()}`
    );
  };


  return (
    <div className="mb-6 flex flex-col gap-4 sm:flex-row">

      <select
        value={params.get("priority") ?? ""}
        onChange={(e) => handleChange(e, "priority")}
        className="rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none"
      >

        <option value="">
          All Priority
        </option>

        <option value="High">
          High
        </option>

        <option value="Medium">
          Medium
        </option>

        <option value="Low">
          Low
        </option>

      </select>


      <select
        value={params.get("status") ?? ""}
        onChange={(e) => handleChange(e, "status")}
        className="rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none"
      >

        <option value="">
          All Status
        </option>

        <option value="Completed">
          Completed
        </option>

        <option value="Working">
          Working
        </option>

        <option value="Pending">
          Pending
        </option>

      </select>

    </div>
  );
};

export default NoteQuery;