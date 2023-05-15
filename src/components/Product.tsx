import { ProductTyping } from '@/typings'
import React from 'react'
import ProductImage from './ProductImage'
import Link from 'next/link'

interface Props {
  product: ProductTyping
}
const Product = ({ product }: Props) => {
  return (
    <Link
      className='h-96 border flex flex-col items-center px-7 py-3 hover:scale-105
      ease-out duration-200 transition-transform'
      href={`/products/${product.id}`}
    >
      <div className='flex-1 max-h-75 relative w-full'>
        <ProductImage product={product} fill />
      </div>
      <div>
        <div className='font-semibold flex justify-between'>
          <p className='w-44 truncate'>{product.title}</p>
          <p>${product.price}</p>
        </div>
        <p className='text-xs line-clamp-2 text-gray-600'>{product.description}</p>
      </div>
    </Link>
  )
}

export default Product
