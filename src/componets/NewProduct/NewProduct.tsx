import React from 'react'

export default function NewProduct() {
  return (
    <div className='fade-in pt-16'>
      <div className='py-10 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='md:flex md:items-center md:justify-between'>
            <div className='flex-1 min-w-0'>
              <h2 className='text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate'>
                Publica tu producto
              </h2>
              <p className='mt-1 text-sm text-gray-500'>
                Completa los datos de tu producto para publicarlo en el
                marketplace
              </p>
            </div>
          </div>

          <div className='mt-8 bg-white shadow-sm rounded-lg overflow-hidden'>
            <form
              id='product-form'
              className='p-6'
            >
              <div className='grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6'>
                <div className='sm:col-span-6'>
                  <label
                    htmlFor='product-title'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Título del producto *
                  </label>
                  <div className='mt-1'>
                    <input
                      type='text'
                      name='product-title'
                      id='product-title'
                      className='shadow-sm focus:ring-secondary focus:border-secondary block w-full sm:text-sm border-gray-300 rounded-md'
                      placeholder='Ej: Smartphone Samsung Galaxy S21 128GB'
                      required
                    />
                    <p
                      className='text-red-600 text-xs mt-1 hidden'
                      id='title-error'
                    >
                      El título es obligatorio y debe tener entre 10 y 100
                      caracteres.
                    </p>
                  </div>
                </div>

                <div className='sm:col-span-3'>
                  <label
                    htmlFor='product-price'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Precio *
                  </label>
                  <div className='mt-1 relative rounded-md shadow-sm'>
                    <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                      <span className='text-gray-500 sm:text-sm'>$</span>
                    </div>
                    <input
                      type='number'
                      name='product-price'
                      id='product-price'
                      className='focus:ring-secondary focus:border-secondary block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md'
                      placeholder='0.00'
                      aria-describedby='price-currency'
                      required
                      min='0'
                      step='0.01'
                    />
                    <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
                      <span
                        className='text-gray-500 sm:text-sm'
                        id='price-currency'
                      >
                        USD
                      </span>
                    </div>
                    <p
                      className='text-red-600 text-xs mt-1 hidden'
                      id='price-error'
                    >
                      Ingrese un precio válido mayor a cero.
                    </p>
                  </div>
                </div>

                <div className='sm:col-span-3'>
                  <label
                    htmlFor='product-price'
                    className='block text-sm font-medium text-gray-700'
                  >
                    SKU *
                  </label>
                  <div className='mt-1 relative rounded-md shadow-sm'>
                    <input
                      type='text'
                      name='product-sku'
                      id='product-sku'
                      className='shadow-sm focus:ring-secondary focus:border-secondary block w-full sm:text-sm border-gray-300 rounded-md'
                      placeholder='SD3BASS'
                      required
                    />

                    <p
                      className='text-red-600 text-xs mt-1 hidden'
                      id='price-error'
                    >
                      Ingrese un precio válido mayor a cero.
                    </p>
                  </div>
                </div>

                <div className='sm:col-span-3'>
                  <label
                    htmlFor='product-price'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Stock *
                  </label>
                  <div className='mt-1 relative rounded-md shadow-sm'>
                    <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'></div>
                    <input
                      type='text'
                      name='product-stock'
                      id='product-stock'
                      className='shadow-sm focus:ring-secondary focus:border-secondary block w-full sm:text-sm border-gray-300 rounded-md'
                      placeholder='30'
                      required
                    />

                    <p
                      className='text-red-600 text-xs mt-1 hidden'
                      id='price-error'
                    >
                      Ingrese un precio válido mayor a cero.
                    </p>
                  </div>
                </div>

                <div className='sm:col-span-3'>
                  <label
                    htmlFor='product-price'
                    className='block text-sm font-medium text-gray-700'
                  >
                    url de la imagen *
                  </label>
                  <div className='mt-1 relative rounded-md shadow-sm'>
                    <input
                      type='text'
                      name='product-img'
                      id='product-img'
                      className='shadow-sm focus:ring-secondary focus:border-secondary block w-full sm:text-sm border-gray-300 rounded-md'
                      placeholder='https://images/m8Fgajc2mMa327Tcse27SmF4EK0.png'
                      required
                    />

                    <p
                      className='text-red-600 text-xs mt-1 hidden'
                      id='price-error'
                    >
                      Ingrese un precio válido mayor a cero.
                    </p>
                  </div>
                </div>

                <div className='sm:col-span-6'>
                  <label
                    htmlFor='product-description'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Descripción *
                  </label>
                  <div className='mt-1'>
                    <textarea
                      id='product-description'
                      name='product-description'
                      className='shadow-sm focus:ring-secondary focus:border-secondary block w-full sm:text-sm border border-gray-300 rounded-md'
                      required
                      placeholder='Describe detalladamente tu producto...'
                    ></textarea>
                    <p
                      className='text-red-600 text-xs mt-1 hidden'
                      id='description-error'
                    >
                      La descripción es obligatoria y debe tener al menos 50
                      caracteres.
                    </p>
                  </div>
                  <p className='mt-2 text-sm text-gray-500'>
                    Escribe una descripción clara y detallada sobre tu producto.
                  </p>
                </div>
              </div>

              <div className='pt-5'>
                <div className='flex justify-end'>
                  <button
                    type='button'
                    className='bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary'
                    id='cancel-upload'
                  >
                    Cancelar
                  </button>
                  <button
                    type='submit'
                    className='ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-900 hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary'
                  >
                    <span id='upload-button-text'>Publicar producto</span>
                    <span
                      id='upload-spinner'
                      className='spinner ml-2 hidden'
                    ></span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
