export default function Tabs({ currentTab, setCurrentTab }) {
  const handleClick = (e) => {
    setCurrentTab(e.target.name)
  }
  return (
    <div className='flex w-full flex-wrap items-center justify-center gap-4 dark:bg-gray-800  dark:text-gray-100 sm:justify-center'>
      <button
        name='text'
        onClick={handleClick}
        className={`flex flex-shrink-0 items-center gap-2  border-b-4 p-2 hover:border-green-400
          ${currentTab === 'text' && 'border-green-400'}`}
      >
        TEXT
      </button>
      <button
        name='wsp'
        onClick={handleClick}
        className={`flex flex-shrink-0 items-center gap-2  border-b-4 p-2 before:content-wsp hover:border-green-400
          ${currentTab === 'wsp' && 'border-green-400'}`}
      >
        WhatsApp
      </button>
      <button
        name='email'
        onClick={handleClick}
        className={`flex flex-shrink-0 items-center gap-2 border-b-4 p-2 before:content-email hover:border-green-400
        ${currentTab === 'email' && 'border-green-400'}`}
      >
        EMAIL
      </button>
      <button
        name='sms'
        onClick={handleClick}
        className={`flex flex-shrink-0 items-center gap-2 border-b-4 p-2 before:content-sms hover:border-green-400
        ${currentTab === 'sms' && 'border-green-400'} `}
      >
        SMS
      </button>
    </div>
  )
}
