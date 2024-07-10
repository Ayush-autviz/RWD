import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import { TabProvider } from './context/TabProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
  <TabProvider>
    <App />
  </TabProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
