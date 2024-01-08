import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { CouterContextProvider } from './context/CounterContext'
import { TitleColorContextProvider } from './context/TitleColorContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 2 - criando provider */}
    <CouterContextProvider>
      <TitleColorContextProvider>
        <App />
      </TitleColorContextProvider>
    </CouterContextProvider>
  </React.StrictMode>,
)
