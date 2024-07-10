import React, { useState } from "react";
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

const categories = [
    {
        name: 'Education',
        path:'education.png'
    },
    {
        name: 'Animal Welfare',
        path:'welfare.png'
    },
    {
        name: 'Enviromental',
        path:'enviroment.png'
    },
    {
        name: 'Human rights/Social Justice',
        path:'human.png'
    },
    {
        name: 'Community Development',
        path:'community.png'
    },
    {
        name: 'Food Insecurity',
        path:'food.png'
    },
    {
        name: 'Arts & Culture',
        path:'art.png'
    },
    {
        name: 'Religion & Spirituality',
        path:'religion.png'
    },
    {
        name: 'Housing insecurity',
        path:'housing.png'
    },
    {
        name: 'Disablity Rights & Services',
        path:'disability.png'
    },
    {
        name: 'Civic engagement',
        path:'civic.png'
    },
    {
        name: 'Youth Developmnet',
        path:'youth.png'
    },
    {
        name: 'Emergency Response',
        path:'emergency.png'
    },
    {
        name: 'Peace building',
        path:'peace.png'
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

  const handleLoadMore = () => {
    setShowAll(true);
  };

  const handleLoadLess = () => {
    setShowAll(false);
  };

  const displayedCategories = showAll ? categories : categories.slice(0, 6);

  return (
    <div className="flex flex-col md:flex-row">
      <div className="fixed top-0 left-0 h-full hidden md:block">
        <SideBar />
      </div>
      <div className="md:ml-[90px] flex-1 w-full overflow-y-auto flex flex-col-reverse md:flex-row">
        <CentreCard className="">
          <div className="w-full">
        <form action="/search">
            <label
                class="mx-auto mt-8 relative bg-white min-w-sm max-w-2xl flex flex-row md:flex-row items-center justify-center border py-1 px-1  gap-2  focus-within:border-gray-300 rounded-full"
                for="search-bar">

                <input id="search-bar" placeholder="Search CRWD" name="q"
                    class="px-6 py-2 w-full rounded-full flex-1 outline-none bg-white" required=""/>
                <button type="submit"
                    class="w-auto md:w-auto px-6 py-3 bg-[#464645] hover:scale-105 text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-full transition-all">
                    <div class="flex items-center transition-all opacity-1">
                        <span class="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                            Search
                        </span>
                    </div>
                </button>
            </label>
        </form>
        {/* <div class="relative mb-5 ">
          <input class="p-2 rounded-[10px] border w-full" type="text" name="password" placeholder="Search"/>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="gray" class="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2" viewBox="0 0 16 16">
          <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
          </svg>
        </div> */}
<div className="text-[18px] font-semibold my-4">Categories:</div>
      <div className="flex  mt-5">
        <div className="gap-3 flex flex-row flex-wrap">
          {displayedCategories.map((item, index) => (
            <div
              key={index}
              className="p-3 border border-solid border-[#4db510] w-fit rounded-full hover:bg-green-50 gap-2 flex flex-row items-center justify-start"
            >
              {/* <img src={item.path} className="w-[18px] h-[18px]" alt={item.name} /> */}
              <div className="text-[12px]  font-semibold">{item.name}</div>
            </div>
          ))}
          {!showAll && (
            <div
              onClick={handleLoadMore}
              className="cursor-pointer p-3 w-fit rounded-full gap-2 flex flex-row items-center justify-start"
            >
              {/* <img src={item.path} className="w-[18px] h-[18px]" alt={item.name} /> */}
              <div className="text-[#4db510]  underline text-[14px] font-semibold">
                Load more
              </div>
            </div>
          )}
                    {showAll && (
            <div
              onClick={handleLoadLess}
              className="cursor-pointer p-3 w-fit rounded-full gap-2 flex flex-row items-center justify-start"
            >
              {/* <img src={item.path} className="w-[18px] h-[18px]" alt={item.name} /> */}
              <div className="text-[#4db510] underline text-[14px] font-semibold">
                Load less
              </div>
            </div>
          )}
        </div>
      </div>


      <div className="text-[18px] font-semibold my-4">
        Causes:
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {causes.map((cause) => (
          <div
            key={cause.id}
            className="rounded-[40px] hover:scale-105 border border-solid border-[#DFDFDF]  w-full mt-4"
          >
            <div className="flex-col flex justify-center gap-2 items-center">
              <img
                src={cause.image}
                className="w-12 h-12 mt-[-24px] border-solid shadow-custom-1 border-[#DFDFDF] border rounded-full"
                alt={cause.title}
              />
              <div className="font-semibold text-[#4db510] underline underline-offset-[10px]">
                {cause.title}
              </div>
            </div>
            <div className="my-5">
              <div className="flex items-center font-semibold justify-center m-2 mx-4 rounded-t-[10px]">
                My Donation Provides
              </div>
              <div className="my-4 mx-4 flex items-center text-[15px] justify-center mt-1 rounded-t-[10px]">
                {cause.description}
              </div>
            </div>
            <div className="w-fit mx-auto bg-[#4db510] hover:scale-105 text-white px-4 py-1 rounded-t-[10px]">
              Make a donation
            </div>
          </div>
        ))}
      </div>



</div>






        </CentreCard>
        <div className="fixed bottom-0 left-0 w-full md:hidden">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Search;
