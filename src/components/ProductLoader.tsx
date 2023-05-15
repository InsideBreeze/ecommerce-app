import React from 'react'

const ProductLoader = () => {
  return (
    <div className='fixed top-[50%] 
      left-[50%] translate-x-[-50%] translate-y-[-50%] 
       z-[1000] bg-white'>
      <div className='w-[100px] h-[100px] flex items-center justify-center'>
        <div className='rounded-full border-4 border-blue-700 h-8 w-8 border-dotted  animate-spin' />
      </div>
    </div>
  )
}

export default ProductLoader
