import { useState } from 'react'

export default function FormText({ url, setUrl }) {
  const [text, setText] = useState('')

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setUrl(text)
  }
  return (
    <form onSubmit={handleSubmit} className='flex h-full w-full flex-col gap-4'>
      <textarea
        className='h-full resize-none rounded-lg border border-gray-300 py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-green-600'
        id='text'
        name='text'
        placeholder='Enter your text'
        onChange={handleChange}
      />
      <button className='mr-auto rounded-md border-2 border-transparent bg-green-600 px-4 py-2 font-semibold text-white transition ease-linear hover:border-2 hover:border-green-600 hover:bg-white hover:text-green-600'>
        Generate QR
      </button>
    </form>
  )
}
