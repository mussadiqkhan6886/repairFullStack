import { requiredRole } from "@/lib/helpers/authPage";
import React from "react";

const Page = async () => {
  const me = await requiredRole(["Manager", "Admin"])
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-3xl">

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Add New User
          </h1>

          <p className="mt-2 text-gray-500">
            Create a new user account and assign permissions
          </p>
        </div>


        <div className="rounded-2xl bg-white p-8 shadow-lg">

          <form className="space-y-6">

            <div>
              <label
                htmlFor="username"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Username
              </label>

              <input
                id="username"
                type="text"
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
                type="email"
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
                type="password"
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
                defaultValue="Employee"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
              >
                <option value="Employee">
                  Employee
                </option>

                <option value="Manager">
                  Manager
                </option>

                <option value="Admin">
                  Admin
                </option>
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
                defaultValue="Active"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
              >
                <option value="Active">
                  Active
                </option>

                <option value="Inactive">
                  Inactive
                </option>
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
                className="rounded-lg bg-black px-5 py-3 font-medium text-white transition hover:bg-gray-800"
              >
                Create User
              </button>

            </div>

          </form>

        </div>

      </div>
    </main>
  );
};

export default Page;