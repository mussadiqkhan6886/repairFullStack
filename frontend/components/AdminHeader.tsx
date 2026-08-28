import Link from 'next/link'
import React from 'react'
import { FiLogOut } from 'react-icons/fi'

const AdminHeader = () => {
  return (
    <header className="bg-black text-white flex justify-between items-center p-4 ">
      <div>
        <Link href="/admin/dashboard" className="uppercase font-semibold text-lg">Admin Dashboard</Link>
      </div>
      <div>
        <Link href="/logout">
            <FiLogOut size={32} />
        </Link>
      </div>
    </header>
  )
}

export default AdminHeader
