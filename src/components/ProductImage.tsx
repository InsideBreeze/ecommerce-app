import React from 'react'
import Image from 'next/image'
import { ProductTyping } from '@/typings'

interface Props {
  fill?: boolean
  product: ProductTyping
}
const ProductImage = ({ product, fill }: Props) => {
  return (
    <>
      {
        fill ? (
          <Image src={product.image}
            fill
            alt={product.title}
            className='
        object-contain'
          />

        ) :
          <Image src={product.image}
            height={300}
            width={1000}
            alt={product.title}
            className='
        object-contain'
          />

      }
    </>
  )
}

export default ProductImage
