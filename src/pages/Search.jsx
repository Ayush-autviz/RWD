import React from "react";
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

const Search = () => {
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
                class="mx-auto mt-8 relative bg-white min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-1 px-1  gap-2  focus-within:border-gray-300 rounded-full"
                for="search-bar">

                <input id="search-bar" placeholder="your keyword here" name="q"
                    class="px-6 py-2 w-full rounded-full flex-1 outline-none bg-white" required=""/>
                <button type="submit"
                    class="w-full md:w-auto px-6 py-3 bg-black border-black text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-full transition-all">
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
<div className="flex justify-center mt-5">
  <div className=" gap-3 flex flex-row flex-wrap ">
    {categories.map((item, index) => (
      <div key={index} className="p-3  border w-fit rounded-full gap-2 flex flex-row items-center justify-start">
        <img src={item.path} className="w-[18px] h-[18px] " alt={item.name} />
        <div className=" text-[12px] font-semibold ">{item.name}</div>
      </div>
    ))}
  </div>
</div>

<div className="mt-4">
  Causes:
</div>
<div className="rounded-[10px] shadow-custom-1 w-fit mt-4 p-4">
<div className="  flex items-center  justify-start    rounded-t-[10px]">My Donation Provides</div>
<div className="font-semibold flex items-center text-[20px] justify-start mt-1   rounded-t-[10px]">free meals foe undeserved familes in atlanta</div>
    <div className="flex-row flex justify-center gap-2 mt-2 items-center ">
        <img src='Rectangle 5.svg' className="w-12 h-12 rounded-full" />
        <div className="font-semibold">Habitat for Humanity provide</div>
    </div>

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
