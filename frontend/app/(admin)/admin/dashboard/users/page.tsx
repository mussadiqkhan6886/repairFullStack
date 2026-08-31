import DeleteUser from "@/components/DeleteUser";
import { requiredRole } from "@/lib/helpers/authPage";
import { getAllUsers } from "@/server/user";
import Link from "next/link";
import React from "react";

const Page = async () => {
  const me = await requiredRole(["Manager", "Admin"])
  
  const users : UserType[] = await getAllUsers()
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-6xl">

        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Users
            </h1>
            <p className="mt-1 text-gray-500">
              Manage system users and permissions
            </p>
          </div>

          <Link href="/add-user" className="rounded-lg bg-black px-5 py-3 text-white transition hover:bg-gray-800">
            + Add User
          </Link>
        </div>


        <div className="mb-5">
          <input
            type="text"
            placeholder="Search users..."
            className="w-full max-w-sm rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-black"
          />
        </div>


        <div className="overflow-hidden rounded-2xl bg-white shadow-lg">

          <table className="w-full">

            <thead className="border-b bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold">
                  Name
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold">
                  Email
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold">
                  Role
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold">
                  Status
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold">
                  Actions
                </th>
              </tr>
            </thead>


            <tbody>
              {users.map((user) => (
                <tr
                  key={user._id}
                  className="border-b last:border-none hover:bg-gray-50"
                >

                  <td className="px-6 py-4 font-medium">
                    {user.username}
                  </td>


                  <td className="px-6 py-4 text-gray-600">
                    {user.email}
                  </td>


                  <td className="px-6 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-sm font-medium ${
                        user.role === "Manager"
                          ? "bg-purple-100 text-purple-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {user.role}
                    </span>
                  </td>


                  <td className="px-6 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-sm font-medium ${
                        user.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>


                  <td className="px-6 py-4">
                    <div className="flex  gap-3">
                      <Link href={`users/${user._id}`} className="text-sm font-medium text-blue-600 hover:underline">
                        Edit
                      </Link>

                        {me.role ==="Admin" && <DeleteUser id={user._id} />}
                    </div>
                  </td>

                </tr>
              ))}
            </tbody>

          </table>

        </div>

      </div>
    </main>
  );
};

export default Page;