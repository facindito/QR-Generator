import { useState } from 'react'
import qr from 'qrcode'
import Form from './components/forms'
import { useCallback } from 'react'

export default function App() {
  const [currentTab, setCurrentTab] = useState('text')
  const [url, setUrl] = useState('')
  const [qrCode, setQrCode] = useState()

  const generateQR = useCallback(() => {
    qr.toDataURL(
      url,
      {
        type: 'image/webp',
        color: {
          light: '#fff',
          dark: '#000',
        },
        width: 1080,
        scale: 10,
      },
      (err, svgString) => {
        if (err) return console.log(err)
        setQrCode(svgString)
        console.log(svgString)
      }
    )
  }, [url])

  const handleClick = (e) => {
    setCurrentTab(e.target.name)
  }

  return (
    <>
      <header className='mb-4 w-full bg-white'>
        <div className='container mx-auto'>
          <h1 className='text-center text-4xl font-bold'>QR Generator</h1>
        </div>
      </header>
      <div className='container mx-auto grid min-h-screen place-content-center overflow-hidden'>
        <div className='flex gap-4 rounded-lg p-4'>
          {qrCode && (
            <article className='rounded-md bg-white p-4 '>
              <div className='w-80'>
                <img src={qrCode} alt='' className='object-cover' />
              </div>
              <a
                href={qrCode}
                download={'QR-Code'}
                className='inline-block rounded-md border-2 border-transparent bg-blue-600 px-4 py-2 font-semibold text-white transition ease-linear hover:border-2 hover:border-blue-600 hover:bg-white hover:text-blue-600'
              >
                Download
              </a>
            </article>
          )}

          <article className='flex flex-col items-start justify-between gap-4 overflow-hidden rounded-md bg-white p-4'>
            <div className='flex w-full flex-wrap items-center justify-center gap-4 dark:bg-gray-800  dark:text-gray-100 sm:justify-center'>
              <button
                name='url'
                onClick={handleClick}
                className='flex flex-shrink-0 items-center border-b-4 px-5 py-2 hover:border-green-400'
              >
                URL
              </button>
              <button
                name='email'
                onClick={handleClick}
                className='flex flex-shrink-0 items-center border-b-4 px-5 py-2 hover:border-green-400'
              >
                EMAIL
              </button>
              <button
                name='sms'
                onClick={handleClick}
                className='flex flex-shrink-0 items-center border-b-4 px-5 py-2 hover:border-green-400 '
              >
                SMS
              </button>
              <button
                name='text'
                onClick={handleClick}
                className='flex flex-shrink-0 items-center border-b-4 px-5 py-2 hover:border-green-400'
              >
                TEXT
              </button>
            </div>
            <Form setUrl={setUrl} url={url} />
            <button
              className='inline-block rounded-md border-2 border-transparent bg-green-600 px-4 py-2 font-semibold text-white transition ease-linear hover:border-2 hover:border-green-600 hover:bg-white hover:text-green-600'
              onClick={generateQR}
            >
              Generate QR
            </button>
          </article>
        </div>
      </div>
    </>
  )
}
