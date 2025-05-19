'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Modal from '../Modal/Modal'
import ContainerLogin from '../ContainerLogin'

import isLogIn from '@/utils/IsLogin'
import isAdmin from '@/utils/isAdmin'
import { CloseSession } from '@/utils/closeSession'

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <nav className='bg-white shadow-md fixed w-full z-10'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16'>
          <div className='flex'>
            <div className='flex-shrink-0 flex items-center'>
              <Image
                className='h-10 w-auto'
                src='https://framerusercontent.com/images/m8Fgajc2mMa327Tcse27SmF4EK0.png?scale-down-to=512'
                alt='Magic Marketplace Logo'
                width={512}
                height={512}
              />
            </div>
            <div className='hidden sm:ml-6 sm:flex sm:items-center'>
              <div className='flex space-x-4'>
                {isLogIn() && isAdmin() && (
                  <Link
                    href='/productos'
                    className='px-3 py-2 rounded-md text-sm font-medium text-gray-500 hover:text-primary'
                    id='upload-link'
                  >
                    Todos los productos
                  </Link>
                )}
              </div>
            </div>
            <div className='hidden sm:ml-6 sm:flex sm:items-center'>
              <div className='flex space-x-4'>
                {isLogIn() && (
                  <Link
                    href='/nuevo-producto'
                    className='px-3 py-2 rounded-md text-sm font-medium text-gray-500 hover:text-primary'
                    id='upload-link'
                  >
                    Registrar producto
                  </Link>
                )}
              </div>
            </div>
            <div className='hidden sm:ml-6 sm:flex sm:items-center'>
              <div className='flex space-x-4'>
                {isLogIn() && (
                  <Link
                    href='/mis-productos'
                    className='px-3 py-2 rounded-md text-sm font-medium text-gray-500 hover:text-primary'
                    id='upload-link'
                  >
                    Mis productos
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className='flex items-center'>
            <div className='flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end'>
              <div className='max-w-lg w-full lg:max-w-xs'>
                <label
                  htmlFor='search'
                  className='sr-only'
                >
                  Buscar
                </label>
                <div className='relative'>
                  <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                    <i className='fas fa-search text-gray-400'></i>
                  </div>
                  <input
                    id='search'
                    name='search'
                    className='block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-secondary focus:ring-1 focus:ring-secondary sm:text-sm'
                    placeholder='Buscar productos...'
                    type='search'
                  />
                </div>
              </div>
            </div>
            <div className='ml-4 flex items-center md:ml-6'>
              <Link
                href='/'
                className='p-1 rounded-full text-gray-500 hover:text-[#2b9579] focus:outline-none'
                id='cart-button'
              >
                <span className='sr-only'>Ver carrito</span>
                <i className='fas fa-shopping-cart text-xl'></i>
                <span
                  className='absolute top-3 right-12 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-secondary rounded-full'
                  id='cart-count'
                >
                  0
                </span>
              </Link>
              {!isLogIn() && (
                <button
                  className='ml-4 px-4 py-2 rounded-md text-sm font-medium text-white bg-[#2b9579] hover:bg-[#0e93cd]'
                  id='login-button'
                  onClick={() => setIsModalOpen(true)}
                >
                  Ingresar
                </button>
              )}
              {isLogIn() && (
                <button
                  className='ml-4 px-4 py-2 rounded-md text-sm font-medium text-white bg-red-600 hover:bg-red-700'
                  id='login-button'
                  onClick={() => CloseSession()}
                >
                  Cerrar sesion
                </button>
              )}
            </div>
          </div>
          <div className='-mr-2 flex items-center sm:hidden'>
            {/* <!-- Mobile menu button --> */}
            <button
              type='button'
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none'
              id='mobile-menu-button'
              aria-expanded='false'
            >
              <span className='sr-only'>Abrir menu</span>
              <i className='fas fa-bars block h-6 w-6'></i>
            </button>
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      <div
        className='sm:hidden hidden'
        id='mobile-menu'
      >
        <div className='px-2 pt-2 pb-3 space-y-1'>
          <Link
            href='/'
            className='block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-primary'
          >
            Vender
          </Link>
          <div className='pt-4 pb-3 border-t border-gray-200'>
            <button
              className='block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-primary'
              onClick={() => setIsModalOpen(true)}
            >
              Ingresar
            </button>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <ContainerLogin setIsModalOpen={setIsModalOpen} />
      </Modal>
    </nav>
  )
}
