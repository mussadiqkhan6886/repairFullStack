import Link from 'next/link'
import React from 'react'
import { FiLogIn } from 'react-icons/fi'

const ClientHeader = () => {
  return (
    <header className="bg-black text-white flex justify-between items-center p-4 ">
      <div>
        <h1 className="uppercase font-semibold text-lg">Repair System</h1>
      </div>
      <div>
        <Link href="/login">
            <FiLogIn size={32} />
        </Link>
      </div>
    </header>
  )
}

export default ClientHeader
