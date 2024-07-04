import React from "react";

const SideBar = () => {
  return (
    <div className="h-[100vh] w-[82px] flex flex-col justify-between shadow-custom ">
      <div className="cursor-pointer">
        <img src="Frame 1.svg" />
      </div>
      <div className=" flex flex-col gap-[61px] justify-between items-center">
      <img  className='cursor-pointer image-color' src="ri_home-3-line.svg" />
      <img  className='cursor-pointer image-color' src="mdi_search.svg" />
      <img  className='cursor-pointer image-color' src="lucide_user.svg" />
      </div>
      <div>
        <img className='cursor-pointer image-color' src="humbleicons_logout.svg" />
      </div>
    </div>
  );
};

export default SideBar;
