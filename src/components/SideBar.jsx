import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useTabContext } from "../context/TabProvider";


const SideBar = () => {
  const navigate = useNavigate();
  const { selectedTab, setSelectedTab } = useTabContext();
  return (
    <div className="h-[100vh] w-[82px] flex flex-col justify-between shadow-custom">
    <div className="cursor-pointer">
      <img src="/Frame 1.svg" alt="Logo" />
    </div>
    <div className="flex flex-col gap-[61px] justify-between items-center">
      <Link onClick={() => setSelectedTab('home')} to='/'>
        <img 
          className={`cursor-pointer image-color ${selectedTab === 'home' ? 'green' : ''}`} 
          src="/ri_home-3-line.svg" 
          alt="Home" 
        />
      </Link>
      <Link onClick={() => setSelectedTab('search')} to='/search'>
        <img 
          className={`cursor-pointer image-color ${selectedTab === 'search' ? 'green' : ''}`} 
          src="/mdi_search.svg" 
          alt="Search" 
        />
      </Link>
      <Link onClick={() => setSelectedTab('user')} to='/profile'>
        <img 
          className={`cursor-pointer image-color ${selectedTab === 'user' ? 'green' : ''}`} 
          src="/lucide_user.svg" 
          alt="User" 
        />
      </Link>
    </div>
    <div onClick={() => {
      localStorage.removeItem('isAuthenticated');
      navigate('/home');
    }}>
      <img className='cursor-pointer image-brown' src="/humbleicons_logout.svg" alt="Logout" />
    </div>
  </div>
  );
};

export default SideBar;
