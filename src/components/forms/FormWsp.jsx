import { useState } from 'react'

export default function FormWsp({ setData }) {
  const [wsp, setWsp] = useState({
    number: 0,
    message: '',
  })

  const handleChange = ({ target: { name, value } }) => {
    setWsp({ ...wsp, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const qrFormat = `https://wa.me/${wsp.number}?text=${wsp.message}`
    setData(qrFormat)
  }
  return (
    <form onSubmit={handleSubmit} className='flex h-full w-full flex-col gap-4'>
      <label htmlFor='number' className='flex gap-4'>
        <span className='hidden md:inline-block'> Number:</span>
        <input
          type='tel'
          name='number'
          id='number'
          placeholder='Your number'
          onChange={handleChange}
          className='ml-auto w-full rounded-lg border border-gray-300 py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-green-600 md:w-3/4'
        />
      </label>
      <label htmlFor='message' className='flex h-full gap-4 '>
        <span className='hidden md:inline-block'> Message: </span>
        <textarea
          type='text'
          name='message'
          id='message'
          placeholder='Enter your message'
          onChange={handleChange}
          className='ml-auto h-full w-full resize-none rounded-lg border border-gray-300 py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-green-600 md:w-3/4'
        />
      </label>
      <button className='mr-auto rounded-md border-2 border-transparent bg-green-600 px-4 py-2 font-semibold text-white transition ease-linear hover:border-2 hover:border-green-600 hover:bg-white hover:text-green-600'>
        Generate QR
      </button>
    </form>
  )
}
