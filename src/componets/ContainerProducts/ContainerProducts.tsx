import Link from 'next/link'
import React from 'react'
import ProductCard from '../ProductCard'
import { API_URL } from '@/utils/apiUrl'

interface Product {
  id: string
  name: string
  images: { url: string }[]
  price: number
  description: string
  sku: string
  stock: number
}

export default async function ContainerProducts() {
  const data = await fetch(`${API_URL}/products`)
  const products = await data.json()
  return (
    <div
      id='offers-section'
      className='py-12 bg-gray-50'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between'>
          <h2 className='text-2xl font-extrabold tracking-tight text-gray-900'>
            Productos destacados
          </h2>
          <Link
            href='/'
            className='text-secondary hover:text-secondary-dark font-medium'
          >
            Ver todos <i className='fas fa-arrow-right ml-1'></i>
          </Link>
        </div>

        <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
          {/* <!-- Product 1 --> */}
          {products.map((product: Product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              images={product.images[0]}
              price={product.price}
              description={product.description}
              sku={product.sku}
              stock={product.stock}
            />
          ))}
          {/* <!-- Product 2 --> */}
        </div>
      </div>
    </div>
  )
}
