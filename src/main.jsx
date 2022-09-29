import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import QRcodeProvider from './context/qrcode.context'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <QRcodeProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </QRcodeProvider>
)
