import { useRef } from 'react'
import Form from './components/forms'

import useQR from './hooks/useQR'

export default function App() {
  const svgRef = useRef()

  const { setUrl, loading } = useQR({ svgRef })

  return (
    <>
      <header className='w-full bg-white mb-4'>
        <div className='container mx-auto'>
          <h1 className='text-center text-4xl font-bold'>QR Generator</h1>
        </div>
      </header>
      <div className='min-h-screen grid place-content-center'>
        <div className='w-80 flex flex-col p-4 gap-4 rounded-lg'>
          <article className={loading ? 'hidden' : 'p-4 bg-white rounded-md '}>
            <div ref={svgRef}></div>
          </article>
          <article className='flex justify-center items-center gap-4 overflow-hidden bg-white rounded-md p-4'>
            <Form setUrl={setUrl} />
          </article>
        </div>
      </div>
    </>
  )
}
