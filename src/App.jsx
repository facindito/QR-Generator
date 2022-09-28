import { useState } from 'react'
import qr from 'qrcode'
import Tabs from './components/Tabs'
import Form from './components/forms'
import { useEffect } from 'react'

export default function App() {
  const [currentTab, setCurrentTab] = useState('text')
  const [url, setUrl] = useState('')
  const [qrCode, setQrCode] = useState()

  useEffect(() => {
    qr.toDataURL(
      url,
      {
        type: 'image/webp',
        color: {
          light: '#fff',
          dark: '#000',
        },
        margin: 1,
        width: 1080,
        scale: 10,
      },
      (err, svgString) => {
        if (err) return console.log(err)
        setQrCode(svgString)
      }
    )
  }, [url])

  const handleClick = (e) => {
    setCurrentTab(e.target.name)
  }

  return (
    <>
      <header className='mb-4 w-full bg-white/30 backdrop-blur-sm'>
        <div className='container mx-auto '>
          <h1 className='text-center text-4xl font-bold text-white'>
            QR Generator
          </h1>
        </div>
      </header>
      <div className='container mx-auto grid min-h-screen place-content-center overflow-hidden'>
        <div className='flex h-96 gap-4 overflow-hidden rounded-lg p-4'>
          {qrCode && (
            <article className='flex flex-col gap-4 rounded-md bg-white p-4'>
              <div className='w-64'>
                <img src={qrCode} alt='' className='object-contain' />
              </div>
              <a
                href={qrCode}
                download={'QR-Code'}
                className='mr-auto rounded-md border-2 border-transparent bg-blue-600 px-4 py-2 font-semibold text-white transition ease-linear hover:border-2 hover:border-blue-600 hover:bg-white hover:text-blue-600'
              >
                Download
              </a>
            </article>
          )}
          <article className='flex flex-col items-start justify-between gap-4 overflow-hidden rounded-md bg-white p-4'>
            <Tabs handleClick={handleClick} currentTab={currentTab} />
            <Form setUrl={setUrl} url={url} currentTab={currentTab} />
          </article>
        </div>
      </div>
    </>
  )
}
