import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import CentreCard from "../components/CentreCard";
import DashboardCard from "../components/DashboardCard";
import ProfileCard from "../components/ProfileCard";
import DonateNowCard from "../components/DonateNowCard";
import AboutUsCard from "../components/AboutUsCard";
import Footer from "../components/Footer";



import { FreeMode, Pagination } from "swiper/modules";
import { useTabContext } from "../context/TabProvider";
import Modal from "../components/Modal";
import NotFound from "../components/NotFound";
import { useLocation, useNavigate } from "react-router-dom";
import StorySection from "../components/StorySection";
import StorySectionScreen from "../components/StorySectionScreen";

const Stories = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { comment } = location.state || {};

 // console.log(comment,"commenttt")
  return (
    <div className="flex flex-col md:flex-row">
      <div className="fixed top-0 left-0 h-full hidden md:block">
        <SideBar />
      </div>

      <div className="md:ml-[83px] flex-1 w-full overflow-y-auto flex flex-col">
        <div
          className="flex-1  ml-0   rounded-b-[40px] border border-solid border-[#DFDFDF] bg-[#e9e9e9]
  flex flex-col  items-center py-[20px] px-[20px] "
        >
       <div className="font-bold  text-[35px] text-[#4db510]  md:max-w-[55%] text-center ">
      Groccery Spot
      </div>
      <div className="font-bold  text-[35px] text-[#464645]  md:max-w-[55%] text-center ">
      Unfolding Your Story
      </div>
        </div>
        <div className="p-[20px] mb-20 md:mb-7">
        <StorySectionScreen comment={comment}/>
        </div>

        <div className="fixed bottom-0 left-0 w-full md:hidden">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Stories;
