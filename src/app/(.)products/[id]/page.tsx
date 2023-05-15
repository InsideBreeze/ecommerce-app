'use client'
import React, { useEffect } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { ProductTyping } from '@/typings';
import { useParams, useRouter } from 'next/navigation';
import ProductImage from '@/components/ProductImage';
import ProductLoader from '@/components/ProductLoader';

const ProductDialog = () => {

  const [product, setProduct] = React.useState<ProductTyping>()
  const id = useParams().id

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(result => result.json())
      .then(product => {
        setProduct(product)
      })
  }, [id])

  const router = useRouter()
  return (

    <Dialog.Root defaultOpen onOpenChange={() => router.push('/')}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 opacity-40 bg-gray-600 z-50" />
        {
          !product ? <ProductLoader /> : (
            <Dialog.Content className="lg:flex fixed top-[13%] left-[50%] z-[1000] max-h-[85vh] w-[90vw] 
          max-w-[750px] translate-x-[-50%]  rounded-[6px] bg-white p-[25px] py-10 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
              {
                product.image && (
                  <div className='mr-5 lg:inline relative w-full'>
                    <ProductImage product={product} fill />
                  </div>
                )
              }
              <div className=''>
                <Dialog.Title className="m-0 text-[17px] font-medium">
                  <>
                    <p className='font-semibold'>{product.title}</p>
                    <p className='text-sm'>${product.price}</p>
                    <div className='text-sm my-4 flex items-center'>
                      <p>{product.rating.rate}</p>
                      <div className='flex items-center justify-center ml-2'>
                        {
                          Array.from({ length: Math.trunc(product.rating.rate) }, (_, i) =>
                            <svg xmlns="http://www.w3.org/2000/svg"
                              key={i}
                              fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4 text-yellow-600">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                            </svg>
                          )
                        }
                        {
                          Array.from({ length: 5 - Math.trunc(product.rating.rate) }, (_, i) => (
                            <svg xmlns="http://www.w3.org/2000/svg"
                              key={i}
                              fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-yellow-600">
                              <path
                                strokeLinecap="round" strokeLinejoin="round"
                                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                            </svg>
                          ))
                        }
                      </div>
                      <p className='text-xs ml-4 text-blue-600 hover:underline hover:cursor-pointer'>See all {product.rating.count} reviews</p>
                    </div>
                  </>
                </Dialog.Title>
                <Dialog.Description className="mt-[10px] mb-5 text-[15px] leading-normal">
                  {product.description}
                </Dialog.Description>
                {/* buttons */}
                <div className='mt-[50px] space-y-2 flex items-center flex-col'>
                  <button className='bg-blue-600 w-full py-2 text-white font-semibold'>
                    Add to bag
                  </button>
                  <button className='py-2 border w-full border-blue-600 font-semibold'
                    onClick={() => window.location.reload()}
                  >
                    View full details
                  </button>
                </div>
              </div>
            </Dialog.Content>

          )
        }
      </Dialog.Portal>
    </Dialog.Root>

  )
};

export default ProductDialog;
