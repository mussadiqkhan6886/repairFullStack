import EditUser from "@/components/EditUser";
import { getUser } from "@/server/user";
import React from "react";

const Page = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const user = await getUser(id)

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-3xl">

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Edit User
          </h1>

          <p className="mt-2 text-gray-500">
            Update user information and permissions
          </p>
        </div>

        <EditUser id={id} user={user} />

      </div>
    </main>
  );
};

export default Page;