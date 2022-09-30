import { useState } from 'react'
import Tabs from './components/Tabs'
import Form from './components/forms'
import { useQRCode } from './context/qrcode.context'
import Header from './components/Header'
import CardQR from './components/CardQR'

export default function App() {
  const [currentTab, setCurrentTab] = useState('text')
  const { qrCode } = useQRCode()

  return (
    <>
      <Header />
      <div className='container mx-auto flex min-h-screen max-w-4xl items-center justify-center overflow-hidden'>
        <div className='flex flex-col justify-center gap-4 overflow-hidden rounded-lg p-4 md:flex-row'>
          {qrCode && <CardQR qrCode={qrCode} />}
          <section className='flex flex-col items-start justify-between gap-4 overflow-hidden rounded-md bg-white p-4'>
            <Tabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
            <Form currentTab={currentTab} />
          </section>
        </div>
      </div>
    </>
  )
}
