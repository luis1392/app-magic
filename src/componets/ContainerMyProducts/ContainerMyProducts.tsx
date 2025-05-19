import { API_URL } from '@/utils/apiUrl'
import Link from 'next/link'
import { cookies } from 'next/headers'
import ProductCard from '../ProductCard'

export default async function ContainerMyProducts() {
  const cookieStore = await cookies()
  const token = cookieStore.get('token')

  const data = await fetch(`${API_URL}/products/my-products`, {
    headers: {
      Authorization: `Bearer ${token?.value}`,
    },
  })
  const products = await data.json()
  console.log('products', products)

  if (!products) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <h1 className='text-2xl font-bold'>No tienes productos</h1>
      </div>
    )
  }
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
          {products.map((product: any) => (
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
        </div>
      </div>
    </div>
  )
}
