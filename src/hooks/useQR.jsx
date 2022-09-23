import { useEffect, useState } from 'react'
import qr from 'qrcode'

export default function useQR({ svgRef }) {
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!url || url.length === '') return

    setLoading(true)
    qr.toString(
      url,
      {
        type: 'svg',
        color: {
          light: '#fff',
          dark: '#000',
        },
      },
      (err, svgString) => {
        if (err) console.log(err)
        svgRef.current.innerHTML = svgString
        setLoading(false)
      }
    )
  }, [url])

  return {
    loading,
    setUrl,
  }
}
