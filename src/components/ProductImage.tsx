'use client'
import React from 'react'
import Image from 'next/image'
import { ProductTyping } from '@/typings'

interface Props {
  fill?: boolean
  product: ProductTyping
}
const ProductImage = ({ product, fill }: Props) => {

  const [imageLoading, setImageLoading] = React.useState(true)
  return (
    <>
      {
        fill ? (
          <Image src={product.image}
            fill
            alt={product.title}
            className={`object-contain ${imageLoading && 'blur-xl'}`}
            onLoadingComplete={() => setImageLoading(false)}
          />

        ) :
          <Image src={product.image}
            height={300}
            width={400}
            alt={product.title}
            className='
        object-contain'
          />

      }
    </>
  )
}

export default ProductImage
