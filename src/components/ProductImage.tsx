import React from 'react'
import Image from 'next/image'

interface Props {
  imageURL: string;
}
const ProductImage = ({ imageURL }: Props) => {
  return (
    <div className='flex-1 flex items-center justify-center max-h-72'>
      <Image src={imageURL}
        height={200}
        width={1000}
        alt='product'
        className='object-contain w-[250px] h-[280px]'
      />
    </div>
  )
}

export default ProductImage
