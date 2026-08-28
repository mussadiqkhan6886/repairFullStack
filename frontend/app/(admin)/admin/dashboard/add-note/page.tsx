import React from "react";

const Page = () => {
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

          <form className="space-y-6">

            <div>
              <label
                htmlFor="title"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Note Title
              </label>

              <input
                id="title"
                type="text"
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
                rows={6}
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
                defaultValue="Medium"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
              >
                <option value="Low">
                  Low
                </option>

                <option value="Medium">
                  Medium
                </option>

                <option value="High">
                  High
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
                defaultValue="Pending"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
              >
                <option value="Pending">
                  Pending
                </option>

                <option value="In Progress">
                  In Progress
                </option>

                <option value="Completed">
                  Completed
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
                Create Note
              </button>

            </div>

          </form>

        </div>

      </div>
    </main>
  );
};

export default Page;