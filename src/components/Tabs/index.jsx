export default function Tabs({ handleClick, currentTab }) {
  return (
    <div className='flex w-full flex-wrap items-center justify-center gap-4 dark:bg-gray-800  dark:text-gray-100 sm:justify-center'>
      <button
        name='url'
        onClick={handleClick}
        className={`flex flex-shrink-0 items-center border-b-4 px-5 py-2 hover:border-green-400
          ${currentTab === 'url' && 'border-green-400'}`}
      >
        URL
      </button>
      <button
        name='email'
        onClick={handleClick}
        className={`flex flex-shrink-0 items-center border-b-4 px-5 py-2 hover:border-green-400
        ${currentTab === 'email' && 'border-green-400'}`}
      >
        EMAIL
      </button>
      <button
        name='sms'
        onClick={handleClick}
        className={`flex flex-shrink-0 items-center border-b-4 px-5 py-2 hover:border-green-400
        ${currentTab === 'sms' && 'border-green-400'}`}
      >
        SMS
      </button>
      <button
        name='text'
        onClick={handleClick}
        className={`flex flex-shrink-0 items-center border-b-4 px-5 py-2 hover:border-green-400
        ${currentTab === 'text' && 'border-green-400'}`}
      >
        TEXT
      </button>
    </div>
  )
}
