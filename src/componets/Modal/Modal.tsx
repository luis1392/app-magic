interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
      <div className='bg-white rounded-lg p-6 w-full max-w-md relative'>
        <button
          onClick={onClose}
          className='absolute top-4 right-2.5 text-gray-500 hover:text-gray-700 mt-6 text-3xl'
        >
          &times; {/* close */}
        </button>
        <div>{children}</div>
      </div>
    </div>
  )
}

export default Modal
