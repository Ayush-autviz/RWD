import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import { TabProvider } from './context/TabProvider.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { ActivationProvider } from './context/DonationContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
  <AuthProvider>
  <TabProvider>
    <ActivationProvider>
    <App />
    </ActivationProvider>
  </TabProvider>
  </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
