import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <main className="flex flex-col gap-2 h-dvh">
      <div className="h-[55vh] w-full relative">
        <Image src="/bg-image.jpg" alt="main hero image" fill className="object-bottom object-cover overflow-hidden w-full h-full" />
      </div>
      <div className="px-10 py-7">
        <h1 className='font-semibold text-lg mb-3 uppercase'>Welcome to Repair System</h1>
        <p>We repair your system quickly and more affordable</p>
        <div>
          <div className="flex flex-col my-2">
            <i>Tech Repair</i>
            <i>Islamabad, Pakistan</i>
            <i>+92 300 0000000</i>
          </div>
          <p>Owner: <span>Mussadiq Khan</span></p>
        </div>
      </div>
    </main>
  )
}

export default page
