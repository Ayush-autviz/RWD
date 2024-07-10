import React, { useState } from "react";
import SideBar from "../components/SideBar";
import Lottie from "lottie-react";
import announce from '../assets/announce.json'
import Tabs from "../components/Tabs";
import CentreCard from "../components/CentreCard";
import Footer from "../components/Footer";
import Settings from "../components/Settings";
import EditProfile from "../components/EditProfile";


const tabs = [
  { name: 'Edit', href: '#', id: 'edit' },
  { name: 'Settings', href: '#', id: 'setting' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const ProfilePage = () => {
  const [selectedTab, setSelectedTab] = useState('edit')
  return (
    <div className="flex flex-col md:flex-row overflow-x-hidden ">
      <div className="fixed top-0 left-0 h-full hidden md:block ">
        <SideBar />
      </div>
      <div className="flex-1 overflow-y-auto overflow-x-hidden flex flex-col ">
        
          {/* <div className="bg-[#e9e9e9] md:ml-[83px] w-full flex mx-auto flex-row items-center justify-between p-[23px] ">
            
            <div className="font-poppins mx-auto md:pr-[75px]    text-[#4db510] text-[16px] font-semibold">
              Grocery Spot
            </div>
            
          </div> */}
          <div className="flex-1  md:ml-[83px]      rounded-b-[40px] border border-solid border-[#DFDFDF] bg-[#e9e9e9] flex flex-row  items-center py-[20px] px-[20px]  ">
            <div className="flex flex-col md:flex-row items-center justify-center mx-auto md:gap-20">
          <div className="relative ">
              <img
                className=" w-[82px] h-[82px] rounded-full md:w-[133px] md:h-[133px] "
                src="Rectangle 5.svg"
              />
              <img
                className="absolute w-[22px] h-[22px] md:w-[45px] md:h-[45px] right-[-3px] bottom-[3px]  md:bottom-0"
                src="check.png"
              />
            </div>

            <div className="flex flex-col gap-5 ">
            {/* <div className="bg-[#e9e9e9] md:ml-[83px] w-full flex  flex-row items-center justify-between  "> */}
            
            <div className="font-poppins px-10 mx-auto  md:mx-0  mt-5 md:mt-0  text-[#4db510] text-[16px] font-semibold">
              Grocery Spot
            </div>
            
          {/* </div> */}

            <div className="flex flex-row  px-10 gap-5  md:gap-10   w-full">
              <div className="text-center flex flex-row-reverse items-end gap-2 justify-center">
                <div className="text-secondary  font-poppins text-[16px] md:text-[14px] font-medium mb-1">
                  Donations
                </div>
                <div className="text-secondary s font-poppins text-[29px]  font-semibold leading-[35px] md:leading-[40px]">
                  270
                </div>
              </div>
              <div className="text-center flex flex-row-reverse items-end gap-2 justify-center">
                <div className="text-secondary  font-poppins text-[16px] md:text-[14px] font-medium mb-1">
                  Supporters
                </div>
                <div className="text-secondary s font-poppins text-[29px]  font-semibold leading-[35px] md:leading-[40px]">
                  1K
                </div>
              </div>
              <div className="text-center flex flex-row-reverse items-end gap-2 justify-center">
                <div className="text-secondary font-poppins text-[16px] md:text-[14px] font-medium mb-1">
                  Collectives
                </div>
                <div className="text-secondary font-poppins text-[25px]  font-semibold leading-[35px] md:leading-[40px]">
                  37
                </div>
              </div>
            </div>

            </div>
            </div>
       

           
          </div>
          <div className="flex md:ml-[83px]   justify-center  items-center -mt-5 ">
        <nav className="flex  bg-white border-[0.5px] rounded-full p-2 " aria-label="Tabs">
          {tabs.map((tab) => (
            <a
              key={tab.id}
              href={tab.href}
              onClick={() => setSelectedTab(tab.id)}
              className={classNames(
                selectedTab === tab.id ? 'bg-gray-100 text-gray-700' : 'text-gray-500 hover:text-gray-700',
                'px-6 py-2 font-medium text-sm rounded-full'
              )}
              aria-current={selectedTab === tab.id ? 'page' : undefined}
            >
{tab.name}
            </a>
          ))}
        </nav>
      </div>
          <div class="md:ml-[83px]   my-7">
           <div className="p-5  mx-5    mb-20 md:mb-0 rounded-[40px] shadow-custom-1">
           {selectedTab==='setting'?(
            <Settings/>
):(
  <EditProfile/>
)}
            </div>
          <div className="fixed bottom-0 left-0 w-full md:hidden">
          <Footer />
        </div>
        </div>
       
      </div>
    </div>
  );
};

export default ProfilePage;
