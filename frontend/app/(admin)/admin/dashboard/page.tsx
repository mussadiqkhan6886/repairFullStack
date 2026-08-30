import { getMe } from "@/server/user";
import Link from "next/link";

const Page = async () => {
  const me = await getMe()
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Dashboard</h1>
          <p className="mt-2 text-gray-600">
            Welcome back, <span className="font-semibold">{me.username}</span> 👋
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <section className="rounded-2xl bg-white p-6 shadow-lg md:col-span-2">
            <h2 className="mb-5 text-xl font-semibold text-gray-800">
              Quick Actions
            </h2>

            <div className="grid gap-4 sm:grid-cols-2">
              <Link
                href="dashboard/notes"
                className="rounded-xl border p-4 transition hover:bg-gray-100 hover:shadow"
              >
                📄 View Technotes
              </Link>

              {me.role !== "Employee" && <> <Link
                href="dashboard/add-note"
                className="rounded-xl border p-4 transition hover:bg-gray-100 hover:shadow"
              >
                ➕ Add New Technote
              </Link>

              <Link
                href="dashboard/users"
                className="rounded-xl border p-4 transition hover:bg-gray-100 hover:shadow"
              >
                👤 View User Settings
              </Link>
             
              <Link
                href="dashboard/add-user"
                className="rounded-xl border p-4 transition hover:bg-gray-100 hover:shadow"
              >
                ➕ Add New User
              </Link>
               </>
              }

            </div>
          </section>

          <aside className="rounded-2xl bg-white p-6 shadow-lg">
            <h2 className="mb-5 text-xl font-semibold text-gray-800">
              Account
            </h2>

            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Current User</p>
                <p className="font-semibold text-gray-900">{me.username}</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Status</p>
                <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                  {me.role}
                </span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default Page;