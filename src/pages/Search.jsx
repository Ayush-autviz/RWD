import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import CentreCard from "../components/CentreCard";
import DashboardCard from "../components/DashboardCard";
import ProfileCard from "../components/ProfileCard";
import DonateNowCard from "../components/DonateNowCard";
import AboutUsCard from "../components/AboutUsCard";
import Footer from "../components/Footer";

//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from 'swiper/modules';
import { useTabContext } from "../context/TabProvider";
import Modal from "../components/Modal";
import NotFound from "../components/NotFound";

const categories = [
    {
        name: 'Animal',
        path:'education.png'
    },
    {
        name: 'Community',
        path:'community.png'
    },
    {
        name: 'Environmental',
        path:'enviroment.png'
    },
    {
        name: 'Human Rights',
        path:'human.png'
    },
    {
        name: 'Education',
        path:'education.png'
    },
    {
        name: 'Health',
        path:'Health.png'
    },
    {
        name: 'Religion',
        path:'religion.png'
    },

]


const causes = [
  {
    id: 1,
    title: 'Groccery Spot',
    description: 'Free meals for underserved families in Atlanta',
    image: 'Rectangle 5.svg',
  },
  {
    id: 2,
    title: 'Education Fund',
    description: 'Supporting education for children in need',
    image: 'Rectangle 5.svg',
  },
  {
    id: 3,
    title: 'Health Care',
    description: 'Providing medical care for those in need',
    image: 'Rectangle 5.svg',
  },
  {
    id: 4,
    title: 'Clean Water Initiative',
    description: 'Ensuring access to clean water in remote areas',
    image: 'Rectangle 5.svg',
  },
  {
    id: 5,
    title: 'Shelter Support',
    description: 'Providing shelter for the homeless',
    image: 'Rectangle 5.svg',
  },
  {
    id: 6,
    title: 'Disaster Relief',
    description: 'Supporting communities affected by natural disasters',
    image: 'Rectangle 5.svg',
  },
  {
    id: 7,
    title: 'Animal Rescue',
    description: 'Helping rescue and rehabilitate animals in need',
    image: 'Rectangle 5.svg',
  },
  {
    id: 8,
    title: 'Mental Health Awareness',
    description: 'Promoting mental health awareness and support',
    image: 'Rectangle 5.svg',
  },
  {
    id: 9,
    title: 'Youth Sports',
    description: 'Supporting youth sports programs',
    image: 'Rectangle 5.svg',
  },
  {
    id: 10,
    title: 'Environmental Conservation',
    description: 'Working to preserve and protect the environment',
    image: 'Rectangle 5.svg',
  },
];

const Search = () => {

  const [showAll, setShowAll] = useState(false);
  const [showSearchResult,setShowSearchResult] = useState(false);

  const { selectedTab, setSelectedTab }= useTabContext();

  useEffect(()=>{
    setSelectedTab('search');
  })


  const handleLoadMore = () => {
    setShowAll(true);
  };

  const handleLoadLess = () => {
    setShowAll(false);
  };

  const displayedCategories = showAll ? categories : categories.slice(0, 9);

  return (
    <div className="flex flex-col md:flex-row">
      <div className="fixed top-0 left-0 h-full hidden md:block">
        <SideBar />
      </div>
      
      <div className="md:ml-[83px] flex-1 w-full overflow-y-auto flex flex-col">
      <div className="flex-1  ml-0 pt-8  rounded-b-[40px] border border-solid border-[#DFDFDF] bg-[#e9e9e9]
  flex flex-col  items-center py-[20px] px-[20px] ">
       
      <div className="w-full flex justify-center items-center ">
      <div className="cursor-pointer md:hidden">
      <img src="logo-rwd.svg" alt="Logo" />
    </div>
         
            <label
                class="mx-auto  relative bg-white min-w-sm max-w-2xl flex flex-row md:flex-row items-center justify-center shadow-custom-1 md:py-1 px-1  gap-2  focus-within:border-gray-300 rounded-full"
                for="search-bar">

                <input id="search-bar" placeholder="Search CRWD" name="q"
                    class="px-6 py-4 md:py-2 w-full rounded-full flex-1 outline-none bg-white md:min-w-[400px]" required=""/>
                <button onClick={()=>{setShowSearchResult(true)}} 
                    class=" px-6 md:py-3 py-3 bg-gray-100 hover:scale-105  fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-full transition-all">
                    <div class="flex items-center transition-all opacity-1">
                        <span class="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                            Search
                        </span>
                    </div>
                </button>
            </label>
        
        </div>

        </div>
        <div className="mt-10 rounded-[40px]">
        <div className="">
          <div className="w-full">

        {/* <div class="relative mb-5 ">
          <input class="p-2 rounded-[10px] border w-full" type="text" name="password" placeholder="Search"/>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="gray" class="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2" viewBox="0 0 16 16">
          <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
          </svg>
        </div> */}
        <div className="p-2  md:mb-0 rounded-[40px]">
{/* <div className="text-[24px]  font-bold mx-auto w-fit my-4">Categories</div> */}
      <div className="flex mx-3 md:mx-20 ">
        <div className="gap-2 flex flex-row items-center md:justify-center overflow-x-auto mx-auto pb-2 custom-scrollbar">
          {displayedCategories.map((item, index) => (
            <div
              key={index}
              className="p-3 cursor-pointer border-[1px] min-w-[120px] text-center rounded-full hover:bg-gray-100 gap-2"
            >
              {/* <img src={item.path} className="w-[18px] h-[18px]" alt={item.name} /> */}
              <div className="text-[12px]  font-semibold">{item.name}</div>
            </div>
          ))}
        </div>
      </div> 
      </div>


      {
        !showSearchResult && <div className="md:p-5 p-1 mx-4 mb-20 md:mb-7 rounded-[40px] bg-white mt-4">
        {/* <div className="text-[24px] mb-5   font-bold mx-auto w-fit my-4">
          Causes
        </div> */}
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-4 ">
          {causes.map((cause) => (
            <div
              key={cause.id}
              className="rounded-[40px]  border border-solid border-[#DFDFDF]  w-full"
            >
             
              <div className="my-3 p-2 py-6">
             {/*  
                <div className="flex items-center font-semibold justify-center m-2 mx-4 rounded-t-[10px]">
                  My Donation Provides
                </div> */}
             
                <div className=" mb-2 mx-4 font-semibold flex text-[18px] rounded-t-[10px]">
                  {cause.description}
                </div>
                <div className="flex-row flex px-5  justify-left gap-2 items-center">
              <img
                  src={cause.image}
                  className="w-8 h-8 border-solid shadow-custom-1 border-[#DFDFDF] border rounded-full"
                  alt={cause.title}
                />
                <div className="font-semibold text-[14px]">
                  {cause.title}
                <span className="block font-normal text-[12px]"> Atlanta, GA</span>
                </div>
                
              </div>
              </div>
  
            </div>
          ))}
        </div>
        </div>
      }


      {
        showSearchResult && <NotFound/>
      }




</div>






        </div>
        </div>
        <div className="fixed bottom-0 left-0 w-full md:hidden">
          <Footer />
        </div>
      </div>
 
    </div>
  );
};

export default Search;
