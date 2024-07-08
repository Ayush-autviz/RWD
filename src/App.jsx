import React from 'react'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import { Route, Routes } from 'react-router-dom'
import ProfilePage from './pages/ProfilePage'
import LoginNP from './pages/LoginNP'
import SignUpNP from './pages/SignUpNP'
import VerificationScreen from './components/VerificationScreen'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => {
  return (
    <div >
    <Routes>
      <Route path='/' element={<ProtectedRoute element={<Dashboard />} />} />
      <Route path='/login' element={<Login />} />
      <Route path='/loginNP' element={<LoginNP />} />
      <Route path='/profile' element={<ProtectedRoute element={<ProfilePage />} />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/signupNP' element={<SignUpNP />} />
      <Route path='/verification' element={<ProtectedRoute element={<VerificationScreen />} />} />
    </Routes>

  </div>
  )
}

export default App
