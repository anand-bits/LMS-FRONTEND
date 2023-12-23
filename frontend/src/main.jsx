

// Component import
import App from './App.jsx'

// Css Import
import './index.css'

// Library Import....
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
 <BrowserRouter>
            <App/>
            <Toaster/>
 </BrowserRouter>
)
