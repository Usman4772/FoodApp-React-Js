import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./index.css"
import GlobalContextWrapper from './context/index.jsx'
import { BrowserRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
  <BrowserRouter>
  <GlobalContextWrapper>
    <App />
  </GlobalContextWrapper>
  </BrowserRouter>
  </React.StrictMode>
 ,
)
