import React from "react";

const Page = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-3xl">

        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Edit User
          </h2>

          <p className="mt-2 text-gray-500">
            Update user information and permissions
          </p>
        </div>


        <div className="rounded-2xl bg-white p-8 shadow-lg">

          <form className="space-y-6">

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                User ID
              </label>

              <input
                value={id}
                readOnly
                className="w-full rounded-lg border bg-gray-100 px-4 py-3 text-gray-500 outline-none"
              />
            </div>


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
                defaultValue="Dave"
                placeholder="Enter username"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
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
                defaultValue="dave@example.com"
                placeholder="Enter email"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
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
                defaultValue="Manager"
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
                className="rounded-lg border px-5 py-3 font-medium hover:bg-gray-100"
              >
                Cancel
              </button>


              <button
                type="submit"
                className="rounded-lg bg-black px-5 py-3 font-medium text-white hover:bg-gray-800"
              >
                Save Changes
              </button>

            </div>

          </form>

        </div>

      </div>
    </main>
  );
};

export default Page;