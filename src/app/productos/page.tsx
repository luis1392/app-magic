'use client'
import Modal from '@/componets/Modal/Modal'
import { NextPage } from 'next'
import { useState } from 'react'

const Page: NextPage = ({}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <button
        onClick={() => setIsModalOpen(true)}
        className='bg-blue-500 text-white px-4 py-2 rounded'
      >
        Abrir Modal
      </button>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <h2 className='text-xl mb-4'>Este es un Modal</h2>
        <p>¡Hola! Este es el contenido del modal.</p>
      </Modal>
    </div>
  )
}

export default Page
