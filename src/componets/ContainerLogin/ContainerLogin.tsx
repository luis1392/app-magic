'use client'
import { API_URL } from '@/utils/apiUrl'
import { setCookies } from '@/utils/setCookies'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

interface ContainerLoginProps {
  setIsModalOpen: (isOpen: boolean) => void
}

export default function ContainerLogin({
  setIsModalOpen,
}: ContainerLoginProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const res = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      if (!res.ok) {
        setError('Error al iniciar sesión')
      } else {
        const data = await res.json()

        // Guardar token en localStorage o cookie
        setCookies(data)

        setIsModalOpen(false)
      }

      // Redirigir al usuario
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || 'Error al iniciar sesión')
      } else {
        setError('Error al iniciar sesión')
      }
    }
  }
  return (
    <div
      id='login-content'
      className='fade-in '
    >
      <div className='min-h-screen bg-gray-50 flex flex-col justify-center py-10 sm:px-4 lg:px-6'>
        <div className='sm:mx-auto sm:w-full sm:max-w-md'>
          <Image
            className='h-10 w-auto'
            src='https://framerusercontent.com/images/m8Fgajc2mMa327Tcse27SmF4EK0.png?scale-down-to=512'
            alt='Magic Marketplace Logo'
            width={512}
            height={512}
          />
          <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
            Inicia sesión en tu cuenta
          </h2>
          <p className='mt-2 text-center text-sm text-gray-600'>
            ¿No tienes una cuenta?
            <Link
              href='/'
              className='font-medium text-secondary hover:text-secondary-dark'
              id='register-link'
            >
              Regístrate ahora
            </Link>
          </p>
        </div>

        <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
          <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
            {error && (
              <div
                className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative'
                role='alert'
              >
                <strong className='font-bold'>Error: </strong>
                <span className='block sm:inline'>{error}</span>
              </div>
            )}
            <form
              className='space-y-6'
              id='login-form'
              onSubmit={handleSubmit}
            >
              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-700'
                >
                  Correo electrónico
                </label>
                <div className='mt-1'>
                  <input
                    id='email'
                    name='email'
                    type='email'
                    autoComplete='email'
                    required
                    className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm'
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <p
                    className='text-red-600 text-xs mt-1 hidden'
                    id='email-error'
                  >
                    Por favor ingresa un correo electrónico válido.
                  </p>
                </div>
              </div>

              <div>
                <label
                  htmlFor='password'
                  className='block text-sm font-medium text-gray-700'
                >
                  Contraseña
                </label>
                <div className='mt-1'>
                  <input
                    id='password'
                    name='password'
                    type='password'
                    autoComplete='current-password'
                    required
                    className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm'
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <p
                    className='text-red-600 text-xs mt-1 hidden'
                    id='password-error'
                  >
                    La contraseña debe tener al menos 6 caracteres.
                  </p>
                </div>
              </div>

              <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <input
                    id='remember-me'
                    name='remember-me'
                    type='checkbox'
                    className='h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded'
                  />
                  <label
                    htmlFor='remember-me'
                    className='ml-2 block text-sm text-gray-900'
                  >
                    Recordarme
                  </label>
                </div>

                <div className='text-sm'>
                  <Link
                    href='/'
                    className='font-medium text-secondary hover:text-secondary-dark'
                  >
                    ¿Olvidaste tu contraseña?
                  </Link>
                </div>
              </div>

              <div>
                <button
                  type='submit'
                  className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#2b9579] hover:bg-[#238267] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary'
                >
                  <span id='login-button-text'>Iniciar sesión</span>
                  <span
                    id='login-spinner'
                    className='spinner ml-2 hidden'
                  ></span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
