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
import CategoryNP from './pages/CategoryNP'
import CategoryDonor from './pages/CategoryDonor'
import ProfilePageDonor from './pages/ProfilePageDonor'
import Search from './pages/Search'
import DashboardDonar from './pages/DashboardDonar'

const getRoleFromLocalStorage = () => {
  const isAuthenticated = localStorage.getItem('isAuthenticated');
  if(isAuthenticated){
    return isAuthenticated
  }
  return null;
};

const App = () => {

  const role = getRoleFromLocalStorage();

  console.log(role);

  return (
    <div className='bg-white' >
    <Routes>
      <Route path='/' element={<ProtectedRoute element={<Dashboard />} />} />
      <Route path='/dash' element={<ProtectedRoute element={<DashboardDonar />} />} />
      <Route path='/login' element={<div className='bg-gray-50'><Login /></div>} />
      <Route path='/loginNP' element={<LoginNP />} />
      <Route path='/profile' element={
          <ProtectedRoute element={
            getRoleFromLocalStorage() === 'donar' ? <ProfilePageDonor /> : <ProfilePage />
          } />
        } />
      <Route path='/profileDonor' element={<ProtectedRoute element={<ProfilePageDonor />} />} />
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/signupNP' element={<SignUpNP/>} />
      <Route path='/categoryNP' element={<CategoryNP/>} />
      <Route path='/categoryDonor' element={<CategoryDonor/>} />
      <Route path='/verification' element={<ProtectedRoute element={<VerificationScreen />} />} />
      <Route path='/search' element={<ProtectedRoute element={<Search />} />} />
    </Routes>

  </div>
  )
}

export default App
