import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='h-16 border px-4 lg:px-6 flex items-center justify-between'>
      {/* logo */}
      <Image
        src='https://i.ibb.co/McdzmYG/logo-removebg-preview-new.png'
        alt='logo'
        width={60}
        height={60}
      />
      {/* buttons */}
      <div className='space-x-2'>
        <button className='rounded-md px-3 py-1 bg-blue-700 text-white font-semibold'>
          Log in
        </button>
        <button className='rounded-md px-3 py-1 border-blue-700 border bg-white font-semibold'>
          Sign up
        </button>
      </div>


    </div>
  )
}

export default Header
