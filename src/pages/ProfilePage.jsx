import React from "react";
import SideBar from "../components/SideBar";
import Lottie from "lottie-react";
import announce from '../assets/announce.json'
import Tabs from "../components/Tabs";
import CentreCard from "../components/CentreCard";
import Footer from "../components/Footer";

const ProfilePage = () => {
  return (
    <div className="flex flex-col md:flex-row overflow-x-hidden ">
      <div className="fixed top-0 left-0 h-full hidden md:block ">
        <SideBar />
      </div>
      <div className="  flex-1 overflow-y-auto overflow-x-hidden   flex flex-col ">
        
          <div className="bg-[#e9e9e9] md:ml-[83px] w-full flex mx-auto flex-row items-center justify-between p-[23px] ">
            
            <div className="font-poppins mx-auto md:pr-[75px]    text-[#4db510] text-[16px] font-semibold">
              Grocery Spot
            </div>
            
          </div>
          <div className="flex-1  md:ml-[83px]     rounded-b-[40px] border border-solid border-[#DFDFDF] bg-[#e9e9e9] flex flex-col  items-center py-[20px] px-[20px]  ">

            <div className="flex flex-row justify-between p-10  md:gap-6  w-full">
              <div className="text-center">
                <div className="text-secondary font-poppins text-[16px] md:text-[14px] font-medium mb-2">
                  Donations
                </div>
                <div className="text-secondary font-poppins text-[30px] md:text-[48px] font-semibold leading-[35px] md:leading-[40px]">
                  270
                </div>
              </div>
              <div className="text-center">
                <div className="text-secondary font-poppins text-[16px] md:text-[14px] font-medium mb-2">
                  Supporters
                </div>
                <div className="text-secondary font-poppins text-[30px] md:text-[48px] font-semibold leading-[35px] md:leading-[40px]">
                  1K
                </div>
              </div>
              <div className="text-center">
                <div className="text-secondary font-poppins text-[16px] md:text-[14px] font-medium mb-2">
                  Collectives
                </div>
                <div className="text-secondary font-poppins text-[30px] md:text-[48px] font-semibold leading-[35px] md:leading-[40px]">
                  37
                </div>
              </div>
            </div>
        <div className="md:mb-[-85px] mb-[-60px] ">
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
            </div>
          </div>
          <div class="flex flex-col ml-10 md:ml-[75px] mr-[40px] ">
           <div className="p-5 mb-[100px] md:ml-[65px] m-[20px] mt-[84px] rounded-[10px] shadow-custom-1">
            <Tabs/>
            </div>

          <div class=" mt-5 md:mt-[84px] flex flex-col md:flex-row items-center justify-center">
            <div className="bg-red ">
          <Lottie className='w-[220px] h-[183px]  ' animationData={announce} loop={true} />
          </div>
          <div className="w-full ">
            <span class="uppercase text-sm text-gray-600 font-bold">Make an announcement to your supporters</span>
            <textarea
              class="w-full h-32 bg-[#e9e9e9] shadow-custom-1 shadow-lg  border border-solid border-[#DFDFDF]  text-gray-900 mt-2 p-3  rounded-lg focus:outline-none focus:shadow-outline"></textarea>
          </div>
          </div>
          <div class="ml-auto">
            <button
              class="mt-2 md:mt-0 w-fit uppercase hover:scale-105  text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg  focus:outline-none focus:shadow-outline">
              Post Announcment
            </button>
          </div>
          <div className="mx-auto my-10 uppercase text-sm text-gray-600 font-bold">
            Cause Bio
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-2">
          <div className=" md:ml-[60px] mt-6 md:mr-4">
            <span class="uppercase text-sm text-gray-600 font-bold">Non-Profit Name</span>
            <input class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text" placeholder=""/>
          </div>


          <div className="mt-5  md:ml-[60px]">
            <span class="uppercase text-sm text-gray-600 font-bold">We are located in</span>
            <textarea
              class="w-full h-24 bg-gray-300 text-gray-900 mt-2 p-3  rounded-lg focus:outline-none focus:shadow-outline"></textarea>
          </div>





          <div className="mt-5  md:ml-[60px] md:mr-4">
            <span class="uppercase text-sm text-gray-600 font-bold">Your donation will provide</span>
            <textarea
              class="w-full h-24 bg-gray-300 text-gray-900 mt-2 p-3  rounded-lg focus:outline-none focus:shadow-outline"></textarea>
          </div>

          <div className="mt-5   md:ml-[60px]">
            <span class="uppercase text-sm text-gray-600 font-bold">Our Mission is</span> 
            <textarea
              class="w-full h-24 bg-gray-300 text-gray-900 mt-2 p-3  rounded-lg focus:outline-none focus:shadow-outline"></textarea>
          </div>

          
          <div className="mt-5  md:ml-[60px] md:mr-4">
            <span class="uppercase text-sm text-gray-600 font-bold">running stats</span> 
            <textarea
              class="w-full h-24 bg-gray-300 text-gray-900 mt-2 p-3  rounded-lg focus:outline-none focus:shadow-outline"></textarea>
          </div>


          <div className="mt-5   md:ml-[60px]">
            <span class="uppercase text-sm text-gray-600 font-bold">our highlights</span> 
            <textarea
              class="w-full h-24 bg-gray-300 text-gray-900 mt-2 p-3  rounded-lg focus:outline-none focus:shadow-outline"></textarea>
          </div>


          <div className=" mt-5  md:ml-[60px] md:mr-4">
            <span class="uppercase text-sm text-gray-600 font-bold">Year founded</span>
            <input class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text" placeholder=""/>
          </div>

          <div className=" mt-5   md:ml-[60px]">
            <span class="uppercase text-sm text-gray-600 font-bold">you can find us here (external link)</span>
            <input class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text" placeholder=""/>
          </div>
          </div>
          <div class="ml-auto my-5">
            <button
              class="mt-2 md:mt-0 w-fit uppercase  text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg  focus:outline-none focus:shadow-outline">
              Save
            </button>
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
