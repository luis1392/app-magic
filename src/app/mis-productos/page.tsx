import ContainerMyProducts from '@/componets/ContainerMyProducts/ContainerMyProducts'
import { NextPage } from 'next'

const Page: NextPage = ({}) => {
  return (
    <div
      className='pt-16'
      id='app-container'
    >
      <div className='banner-gradient pt-16 py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          <div className='md:flex md:items-center md:justify-between'>
            <div className='md:w-1/2'>
              <h1 className='text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl'>
                Mis productos
              </h1>
              <p className='mt-5 text-xl text-white'>
                Descubre miles de productos al mejor precio con envío rápido y
                seguro.
              </p>
              <div className='mt-8 flex'></div>
            </div>
            <div className='mt-8 md:mt-0 md:w-1/2'></div>
          </div>
        </div>
      </div>
      <ContainerMyProducts />
    </div>
  )
}

export default Page
