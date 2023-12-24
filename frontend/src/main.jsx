

// Component import
import App from './App.jsx'

// Css Import
import './index.css'

// Library Import....
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from './Redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
 <Provider store={store}>
 <BrowserRouter>
            <App/>
            <Toaster/>
 </BrowserRouter>
 </Provider>
)
