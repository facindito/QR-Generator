import { useState } from 'react'
import Tabs from './components/Tabs'
import Form from './components/forms'
import { useQRCode } from './context/qrcode.context'
import Header from './components/Header'
import CardQR from './components/CardQR'

export default function App() {
  const [currentTab, setCurrentTab] = useState('text')
  const { qrCode } = useQRCode()

  const handleClick = (e) => {
    setCurrentTab(e.target.name)
  }

  return (
    <>
      <Header />
      <div className='container mx-auto grid min-h-screen place-content-center overflow-hidden'>
        <div className='flex h-96 gap-4 overflow-hidden rounded-lg p-4'>
          {qrCode && <CardQR qrCode={qrCode} />}
          <section className='flex flex-col items-start justify-between gap-4 overflow-hidden rounded-md bg-white p-4'>
            <Tabs handleClick={handleClick} currentTab={currentTab} />
            <Form currentTab={currentTab} />
          </section>
        </div>
      </div>
    </>
  )
}
