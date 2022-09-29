import { createContext, useEffect, useState } from 'react'
import qr from 'qrcode'
import { useContext } from 'react'

export const Context = createContext()

export const useQRCode = () => {
  const qrcodeContext = useContext(Context)
  return qrcodeContext
}

export default function QRcodeProvider({ children }) {
  const [data, setData] = useState('')
  const [qrCode, setQrCode] = useState('')

  useEffect(() => {
    if (data === '') return
    qr.toDataURL(
      data,
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
      (err, qrstring) => {
        if (err) return console.log(err)
        setQrCode(qrstring)
      }
    )
  }, [data])

  return (
    <Context.Provider value={{ data, setData, qrCode }}>
      {children}
    </Context.Provider>
  )
}
