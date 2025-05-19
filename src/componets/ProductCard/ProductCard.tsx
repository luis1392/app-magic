import Image from 'next/image'

export default function ProductCard({
  name,
  price,
  description,
  images,
  sku,
  stock,
}: any) {
  return (
    <div className='group relative bg-white rounded-lg shadow-sm overflow-hidden product-card'>
      <div className='w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-t-lg overflow-hidden group-hover:opacity-75 relative'>
        <Image
          fill
          src={images?.url}
          alt={name}
          className='w-full h-60 object-center object-cover'
        />
      </div>
      <div className='px-4 py-4'>
        <div className='flex justify-between'>
          <span className='text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-secondary text-white rounded'>
            Oferta
          </span>
          <span className='text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-primary text-white rounded'>
            Envío gratis
          </span>
        </div>
        <h3 className='mt-3 text-gray-700 text-lg font-medium'>{name}</h3>
        <div className='flex items-center mt-1'>
          <i className='fas fa-star text-yellow-400'></i>
          <i className='fas fa-star text-yellow-400'></i>
          <i className='fas fa-star text-yellow-400'></i>
          <i className='fas fa-star text-yellow-400'></i>
          <i className='fas fa-star-half-alt text-yellow-400'></i>
          <span className='text-sm text-gray-500 ml-1'>(STOCK: {stock})</span>
        </div>
        <p className='mt-1 text-sm text-gray-500'>SKU: {sku}</p>
        <p className='mt-1 text-sm text-gray-500'>{description}</p>
        <div className='flex justify-between items-center mt-3'>
          <p className='text-2xl font-bold text-gray-900'>${price}</p>
          <button className='px-4 py-2 bg-[#2b9579] text-white rounded-lg hover:bg-[#238267] transition-colors'>
            <i className='fas fa-shopping-cart mr-1'></i> Añadir
          </button>
        </div>
      </div>
    </div>
  )
}
