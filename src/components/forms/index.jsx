export default function Form({ url, setUrl }) {
  const handleChange = (e) => {
    setUrl(e.target.value)
  }

  return (
    <textarea
      className='my-4 h-full w-full resize-none rounded-lg border border-gray-300 py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-green-600'
      id='text'
      name='text'
      placeholder='Enter your text'
      value={url}
      onChange={handleChange}
    ></textarea>
  )
}
