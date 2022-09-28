import { useState } from 'react'

export default function FormEmail({ setUrl }) {
  const [emailMsg, setEmailMsg] = useState({
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = ({ target: { name, value } }) => {
    setEmailMsg({ ...emailMsg, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const qrFormat = `mailto:${emailMsg.email}?subject=${emailMsg.subject}&body=${emailMsg.message}`
    setUrl(qrFormat)
  }
  return (
    <form onSubmit={handleSubmit} className='flex h-full w-full flex-col gap-4'>
      <label htmlFor='email' className='flex gap-4'>
        Email:
        <input
          type='text'
          name='email'
          id='email'
          placeholder='Your email'
          onChange={handleChange}
          className='ml-auto w-3/4 rounded-lg border border-gray-300 py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-green-600'
        />
      </label>
      <label htmlFor='subject' className='flex gap-4'>
        Subject:
        <input
          type='text'
          name='subject'
          id='subject'
          placeholder='Enter email subject'
          onChange={handleChange}
          className='ml-auto w-3/4 rounded-lg border border-gray-300 py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-green-600'
        />
      </label>
      <label htmlFor='message' className='flex h-full gap-4 '>
        Message:
        <textarea
          type='text'
          name='message'
          id='message'
          placeholder='Enter your message'
          onChange={handleChange}
          className='ml-auto h-full w-3/4 resize-none rounded-lg border border-gray-300 py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-green-600'
        />
      </label>
      <button className='mr-auto rounded-md border-2 border-transparent bg-green-600 px-4 py-2 font-semibold text-white transition ease-linear hover:border-2 hover:border-green-600 hover:bg-white hover:text-green-600'>
        Generate QR
      </button>
    </form>
  )
}
