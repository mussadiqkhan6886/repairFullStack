import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <main className="flex flex-col gap-2 justify-center items-center h-screen">
      <h1 className="uppercase font-semibold text-lg">Welcome to Admin Page</h1>
      <Link className="underline text-blue-500" href="/admin/dashboard">Go to dashboard</Link>
    </main>
  )
}

export default page
