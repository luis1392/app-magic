import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='bg-gray-800 text-white fixed bottom-0 w-full'>
      <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          <div className='col-span-1'>
            <Image
              className='h-10 w-auto'
              src='https://framerusercontent.com/images/m8Fgajc2mMa327Tcse27SmF4EK0.png?scale-down-to=512'
              alt='Magic Marketplace Logo'
              width={512}
              height={512}
            />
            <p className='mt-4 text-gray-300'>
              Tu marketplace de confianza donde encontrarás todo lo que
              necesitas.
            </p>
            <div className='mt-4 flex space-x-6'></div>
          </div>

          <div className='col-span-1'>
            <h3 className='text-sm font-semibold text-gray-300 tracking-wider uppercase'>
              Acerca de
            </h3>
            <ul className='mt-4 space-y-4'>
              <li>
                <Link
                  href='#'
                  className='text-base text-gray-400 hover:text-white'
                >
                  Sobre nosotros
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-base text-gray-400 hover:text-white'
                >
                  Trabaja con nosotros
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-base text-gray-400 hover:text-white'
                >
                  Términos y condiciones
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-base text-gray-400 hover:text-white'
                >
                  Privacidad
                </Link>
              </li>
            </ul>
          </div>

          <div className='col-span-1'>
            <h3 className='text-sm font-semibold text-gray-300 tracking-wider uppercase'>
              Ayuda
            </h3>
            <ul className='mt-4 space-y-4'>
              <li>
                <Link
                  href='#'
                  className='text-base text-gray-400 hover:text-white'
                >
                  Centro de ayuda
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-base text-gray-400 hover:text-white'
                >
                  Contacto
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-base text-gray-400 hover:text-white'
                >
                  Reclamos
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-base text-gray-400 hover:text-white'
                >
                  Preguntas frecuentes
                </Link>
              </li>
            </ul>
          </div>

          <div className='col-span-1'>
            <h3 className='text-sm font-semibold text-gray-300 tracking-wider uppercase'>
              Métodos de pago
            </h3>
            <div className='mt-4 grid grid-cols-3 gap-3'>
              <div className='col-span-1 flex justify-center items-center bg-white p-2 rounded'>
                <i className='fab fa-cc-visa text-2xl text-blue-600'></i>
              </div>
              <div className='col-span-1 flex justify-center items-center bg-white p-2 rounded'>
                <i className='fab fa-cc-mastercard text-2xl text-red-600'></i>
              </div>
              <div className='col-span-1 flex justify-center items-center bg-white p-2 rounded'>
                <i className='fab fa-cc-paypal text-2xl text-blue-800'></i>
              </div>
              <div className='col-span-1 flex justify-center items-center bg-white p-2 rounded'>
                <i className='fab fa-cc-amex text-2xl text-blue-500'></i>
              </div>
              <div className='col-span-1 flex justify-center items-center bg-white p-2 rounded'>
                <i className='fas fa-money-bill-wave text-2xl text-green-600'></i>
              </div>
              <div className='col-span-1 flex justify-center items-center bg-white p-2 rounded'>
                <i className='fas fa-qrcode text-2xl text-gray-800'></i>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between'>
          <div className='flex space-x-6 md:order-2'></div>
          <p className='mt-8 text-base text-gray-400 md:mt-0 md:order-1'>
            &copy; 2025 Magic log. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
