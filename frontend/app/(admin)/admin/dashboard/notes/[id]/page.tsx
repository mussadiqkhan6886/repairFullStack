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

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Edit Note
          </h1>

          <p className="mt-2 text-gray-500">
            Update technical note information
          </p>
        </div>


        {/* Form */}
        <div className="rounded-2xl bg-white p-8 shadow-lg">

          <form className="space-y-6">

            {/* Note ID */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Note ID
              </label>

              <input
                value={id}
                readOnly
                className="w-full rounded-lg border bg-gray-100 px-4 py-3 text-gray-500 outline-none"
              />
            </div>


            {/* Title */}
            <div>
              <label
                htmlFor="title"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Title
              </label>

              <input
                id="title"
                type="text"
                defaultValue="Fix authentication bug"
                placeholder="Enter note title"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
              />
            </div>


            {/* Description */}
            <div>
              <label
                htmlFor="description"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Description
              </label>

              <textarea
                id="description"
                rows={5}
                defaultValue="Resolved JWT refresh token issue and improved login flow."
                placeholder="Write note details..."
                className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
              />
            </div>


            {/* Priority */}
            <div>
              <label
                htmlFor="priority"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Priority
              </label>

              <select
                id="priority"
                defaultValue="High"
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


            {/* Status */}
            <div>
              <label
                htmlFor="status"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Status
              </label>

              <select
                id="status"
                defaultValue="Completed"
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


            {/* Buttons */}
            <div className="flex justify-end gap-4 pt-4">

              <button
                type="button"
                className="rounded-lg border px-5 py-3 font-medium hover:bg-gray-100"
              >
                Cancel
              </button>


              <button
                type="submit"
                className="rounded-lg bg-black px-5 py-3 font-medium text-white transition hover:bg-gray-800"
              >
                Save Note
              </button>

            </div>

          </form>

        </div>

      </div>
    </main>
  );
};

export default Page;