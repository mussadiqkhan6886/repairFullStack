import WelcomeAdminPage from '@/components/WelcomeAdminPage'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <main className="flex flex-col gap-2 justify-center items-center h-screen">
      <WelcomeAdminPage />
      <Link className="underline text-blue-500" href="/admin/dashboard">Go to dashboard</Link>
    </main>
  )
}

export default page
