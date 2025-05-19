import ContainerProducts from '@/componets/ContainerProducts'

import Image from 'next/image'

export default function Home() {
  return (
    <div
      className='pt-16'
      id='app-container'
    >
      {/* <!-- Home Page Content --> */}
      <div
        id='home-content'
        className='fade-in'
      >
        {/* <!-- Hero Banner --> */}
        <div className='banner-gradient py-12 px-4 sm:px-6 lg:px-8'>
          <div className='max-w-7xl mx-auto'>
            <div className='md:flex md:items-center md:justify-between'>
              <div className='md:w-1/2'>
                <h1 className='text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl'>
                  Todo lo que necesitas
                </h1>
                <p className='mt-5 text-xl text-white'>
                  Descubre miles de productos al mejor precio con envío rápido y
                  seguro.
                </p>
                <div className='mt-8 flex'></div>
              </div>
              <div className='mt-8 md:mt-0 md:w-1/2'>
                <Image
                  src='https://cdn.pixabay.com/photo/2019/04/26/07/14/store-4156934_1280.png'
                  alt='Marketplace'
                  className='w-full rounded-lg shadow-xl'
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Categories Section --> */}
        <div
          id='categories-section'
          className='py-12 bg-white'
        >
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='lg:text-center'>
              <h2 className='text-base text-primary font-semibold tracking-wide uppercase'>
                Explora
              </h2>
              <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
                Nuestras Categorías
              </p>
              <p className='mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto'>
                Encuentra lo que buscas en nuestras categorías populares
              </p>
            </div>

            <div className='mt-10'>
              <div className='grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
                <div className='col-span-1 flex flex-col text-center items-center'>
                  <h3 className='mt-3 text-lg font-medium text-gray-900'>
                    Electrónica
                  </h3>
                </div>

                <div className='col-span-1 flex flex-col text-center items-center'>
                  <h3 className='mt-3 text-lg font-medium text-gray-900'>
                    Ropa
                  </h3>
                </div>

                <div className='col-span-1 flex flex-col text-center items-center'>
                  <h3 className='mt-3 text-lg font-medium text-gray-900'>
                    Hogar
                  </h3>
                </div>

                <div className='col-span-1 flex flex-col text-center items-center'>
                  <h3 className='mt-3 text-lg font-medium text-gray-900'>
                    Deportes
                  </h3>
                </div>

                <div className='col-span-1 flex flex-col text-center items-center'>
                  <h3 className='mt-3 text-lg font-medium text-gray-900'>
                    Juegos
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Featured Products Section --> */}
        <ContainerProducts />

        {/* <!-- Why Choose Us Section --> */}
        <div className='py-12 bg-white'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='lg:text-center'>
              <h2 className='text-base text-primary font-semibold tracking-wide uppercase'>
                Ventajas
              </h2>
              <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
                ¿Por qué elegirnos?
              </p>
              <p className='mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto'>
                Descubre las razones por las que millones de personas confían en
                nosotros
              </p>
            </div>

            <div className='mt-10'>
              <div className='grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4'>
                <div className='flex flex-col items-center'>
                  <div className='flex items-center justify-center h-16 w-16 rounded-full bg-primary text-white'>
                    <i className='fas fa-shield-alt text-2xl'></i>
                  </div>
                  <h3 className='mt-4 text-lg font-medium text-gray-900'>
                    Compra Segura
                  </h3>
                  <p className='mt-2 text-center text-base text-gray-500'>
                    Todas tus compras están protegidas de principio a fin.
                  </p>
                </div>

                <div className='flex flex-col items-center'>
                  <div className='flex items-center justify-center h-16 w-16 rounded-full bg-secondary text-white'>
                    <i className='fas fa-truck text-2xl'></i>
                  </div>
                  <h3 className='mt-4 text-lg font-medium text-gray-900'>
                    Envío Rápido
                  </h3>
                  <p className='mt-2 text-center text-base text-gray-500'>
                    Recibe tus productos en tiempo récord con nuestro servicio
                    de envío.
                  </p>
                </div>

                <div className='flex flex-col items-center'>
                  <div className='flex items-center justify-center h-16 w-16 rounded-full bg-primary text-white'>
                    <i className='fas fa-sync-alt text-2xl'></i>
                  </div>
                  <h3 className='mt-4 text-lg font-medium text-gray-900'>
                    Devolución Fácil
                  </h3>
                  <p className='mt-2 text-center text-base text-gray-500'>
                    ¿No estás satisfecho? Devuelve tu compra sin complicaciones.
                  </p>
                </div>

                <div className='flex flex-col items-center'>
                  <div className='flex items-center justify-center h-16 w-16 rounded-full bg-secondary text-white'>
                    <i className='fas fa-headset text-2xl'></i>
                  </div>
                  <h3 className='mt-4 text-lg font-medium text-gray-900'>
                    Soporte 24/7
                  </h3>
                  <p className='mt-2 text-center text-base text-gray-500'>
                    Nuestro equipo está disponible para ayudarte en cualquier
                    momento.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
