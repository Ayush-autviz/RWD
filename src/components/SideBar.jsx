import React from "react";
import { Link, useNavigate } from 'react-router-dom';


const SideBar = () => {
  const navigate = useNavigate();
  const { selectedTab, setSelectedTab } = useTabContext();
  return (
    <div className="h-[100vh] w-[82px] flex flex-col justify-between shadow-custom ">
      <div className="cursor-pointer">
        <img src="Frame 1.svg" />
      </div>
      <div className=" flex flex-col gap-[61px] justify-between items-center">
      <Link onClick={()=>{setSelectedTab('home')}} to='/'>
      <img  className='cursor-pointer image-color' src="ri_home-3-line.svg" />
      </Link>
      <img  className='cursor-pointer image-color' src="mdi_search.svg" />
      <Link onClick={()=>{setSelectedTab('user')}} to='/profile'>
      <img  className='cursor-pointer image-color' src="lucide_user.svg" />
      </Link>
      </div>
      <div onClick={()=>{
        localStorage.removeItem('isAuthenticated');
        navigate('/login')
      }}>
        <img className='cursor-pointer image-brown' src="humbleicons_logout.svg" />
      </div>
    </div>
  );
};

export default SideBar;
