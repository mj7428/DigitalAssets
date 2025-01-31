import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './global.css'
import Navbar from './components/Navbar.jsx'
import { ContextProvider } from './context/GlobalContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
  <main className='relative flex flex-col min-h-screen'>
    <div className='flex-grow flex-1'>
      <Navbar/>
      <App />
    </div>
  </main>
  </ContextProvider>
)
