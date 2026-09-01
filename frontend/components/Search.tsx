'use client';

import useDebounce from '@/hooks/useDebounce';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { ChangeEvent, useEffect, useState } from 'react';

const Search = () => {
  const router = useRouter();
  const params = useSearchParams();
  
  const [search, setSearch] = useState(params.get("search") || "")
  const debouncedValue = useDebounce(search)

  useEffect(() => {

    const searchParams = new URLSearchParams(params);

    if (debouncedValue) {
        searchParams.set("search", debouncedValue);
    } else {
        searchParams.delete("search");
    }

    router.push(`/admin/dashboard/users?${searchParams.toString()}`);
  }, [debouncedValue])

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    query: string
  ) => {
    const { value } = e.target;

    const searchParams = new URLSearchParams(params);

    if (value) {
      searchParams.set(query, value);
    } else {
      searchParams.delete(query);
    }

    router.push(`/admin/dashboard/users?${searchParams.toString()}`);
  };
  

  return (
    <div className="mb-6 flex gap-4">
      <input
        type="text"
        placeholder="Search users..."
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        className="w-full max-w-sm rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-black"
      />

      <select
        defaultValue={params.get('status') ?? ''}
        onChange={(e) => handleChange(e, 'status')}
        className="rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-black"
      >
        <option value="">All Status</option>
        <option value="Active">Active</option>
        <option value="InActive">InActive</option>
      </select>
    </div>
  );
};

export default Search;