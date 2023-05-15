import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='sticky top-0 bg-white  z-10 h-16 border px-4 lg:px-6 flex items-center justify-between'>
      {/* logo */}
      <Link href="/">
        <Image
          src='https://i.ibb.co/McdzmYG/logo-removebg-preview-new.png'
          alt='logo'
          width={60}
          height={60}
        />
      </Link>
      {/* buttons */}
      <div className='space-x-2'>
        <button className='rounded-md w-20 h-8 bg-blue-700 text-white font-semibold'>
          Log in
        </button>
        <button className='rounded-md h-8 w-20 border-blue-700 border bg-white font-semibold'>
          Sign up
        </button>
      </div>
    </header>
  )
}

export default Header
