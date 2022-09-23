import { useState } from 'react'

export default function Form({ setUrl }) {
  const [keyword, setKeyword] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    setUrl(keyword)
  }

  const handleChange = (e) => {
    setKeyword(e.target.value.trim())
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <textarea
          className='appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent resize-none'
          id='text'
          placeholder='Enter your text'
          name='text'
          onChange={handleChange}
        ></textarea>
      </label>
      <button className='block border px-4 py-2 rounded-md bg-blue-400'>
        Generate QR
      </button>
    </form>
  )
}
