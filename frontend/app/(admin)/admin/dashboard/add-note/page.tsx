import CreateNote from "@/components/CreateNote";
import { requiredRole } from "@/lib/helpers/authPage";
import React from "react";

const Page = async () => {

  const me = await requiredRole(["Manager", "Admin"])

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-3xl">

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Add New Note
          </h1>

          <p className="mt-2 text-gray-500">
            Create a new technical note
          </p>
        </div>


        <div className="rounded-2xl bg-white p-8 shadow-lg">

          <CreateNote />

        </div>

      </div>
    </main>
  );
};

export default Page;