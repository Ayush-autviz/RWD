import React from 'react'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div >
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
    </Routes>
  </div>
  )
}

export default App
