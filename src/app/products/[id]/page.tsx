import ProductImage from '@/components/ProductImage'
import { ProductTyping } from '@/typings'
import React from 'react'

const ProductPage = async ({ params }: { params: { id: string } }) => {

  const product: ProductTyping = await fetch(`https://fakestoreapi.com/products/${params.id}`)
    .then(result => result.json())

  return (
    <div className='flex-col md:flex-row flex h-screen items-center justify-center space-x-3 max-w-5xl mx-auto'>
      <div className='md:mr-5 mt-20 mb-5 flex justify-center items-center flex-3'>
        <ProductImage product={product} />
      </div>
      <div className='divide-y flex-1'>
        <div className='pb-5 space-y-2'>
          <p className='md:text-4xl text-2xl font-semibold'>{product.title}</p>
          <p className='md:text-2xl text-gray-600 font-bold'>${product.price}</p>
        </div>
        <p className='text-sm pt-5'>{product.description}</p>
      </div>
    </div>
  )
}

export default ProductPage
