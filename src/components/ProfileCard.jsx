import React, { useState } from "react";
import handshake from "../assets/handshake.json";
import Lottie from "lottie-react";
import Dropdown from "./Dropdown";
import share from "../assets/share.json";
import { useActivation } from "../context/DonationContext";
import Cancel from "./Cancel";
import FollowersModal from "./FollowersModal";

const ProfileCard = ({
  open,
  setOpen,
  openModal,
  setOpenModal,
  scrollToStorySection,
}) => {
  const [clicked, setClicked] = useState(false);
  const { activated, setActivated } = useActivation();
  const [followersModal,setFollowersModal] = useState(false);

  const closefolowersModal = ()=>{
    setFollowersModal(false);
  }
  return (
    <div className="min-w-[25%] bg-[#FBFBFB] ">
      <div className="bg-[#FBFBFB] flex flex-row items-center justify-between p-5 md:hidden">
        <div></div>
        <div className="font-poppins  text-[22px] font-semibold ml-3 md:ml-0">
          Grocery Spot
        </div>
        <div>
          <Dropdown />
        </div>
      </div>
      <div className=" md:my-[20px]  flex-1 md:mr-[20px] md:rounded-[10px] rounded-b-[40px] border border-solid border-[#DFDFDF] bg-[#dddddd24] flex flex-col  items-center py-[20px] px-[20px] relative">
        <div className="absolute top-3 right-5 md:right-3 hidden md:block cursor-pointer">
          <Dropdown />
        </div>
        <div className="relative">
          <img
            className=" w-[82px] h-[82px] rounded-full md:w-[133px] md:h-[133px] "
            src="donor-unsplash.jpg"
          />
          <img
            className="absolute w-[22px] h-[22px] md:w-[45px] md:h-[45px] right-[-3px] bottom-[3px]  md:bottom-0"
            src="check.png"
          />
        </div>
        <div className=" cursor-pointer hidden md:block  mt-[17px] font-poppins text-[16px] font-semibold ">
          Grocery Spot
        </div>
        <div className="h-[1px] w-full bg-[#DFDFDF] mt-5 hidden md:block" />
        <div className=" ml-[-22px] md:ml-0 flex flex-row justify-center md:flex-col md:gap-6 gap-16 mt-4 w-full">
          <div className="text-center">
            <div className="text-secondary font-poppins text-[16px] md:text-[12px] font-medium md:mb-2 mb-0">
              Donations
            </div>
            <div className="text-secondary font-poppins text-[25px] md:text-[48px] font-semibold leading-[35px] md:leading-[40px]">
              270
            </div>
          </div>
          <div className="text-center" onClick={()=>{setFollowersModal(true)}} >
            <div className="text-secondary font-poppins text-[16px] md:text-[12px] font-medium  md:mb-2 mb-0">
              Supporters
            </div>
            <div className="text-secondary font-poppins text-[25px] md:text-[48px] cursor-pointer font-semibold leading-[35px] md:leading-[40px]">
              1K
            </div>
          </div>
          <div
            onClick={scrollToStorySection}
            className="text-center cursor-pointer"
          >
            <div className="text-secondary font-poppins text-[16px] md:text-[12px] font-medium  md:mb-2 mb-0">
              Stories
            </div>
            <div className="text-secondary font-poppins text-[25px] md:text-[48px] font-semibold leading-[35px] md:leading-[40px]">
              3
            </div>
          </div>
        </div>
        {!activated && (
          <>
            {" "}
            <div
              onClick={() => {
                setOpen(true);
              }}
              className="cursor-pointer rounded-[5px] mt-5 w-full  bg-[#464645]  hover:bg-[#2a2a29] duration-200 px-[12px] py-[13px] flex flex-row md:flex-col lg:flex-row gap-2 items-center justify-center"
            >
              <div className="w-[39px] h-[39px] mr-2">
                <Lottie className="" animationData={handshake} loop={true} />
              </div>
              <div className="text-white font-poppins text-[14px] text-center font-semibold">
                Support this cause
                <span className="font-normal block"> For $5/month</span>
              </div>
            </div>
            <div className="text-secondary font-poppins text-[16px] font-medium mt-2"></div>
          </>
        )}

        {activated && (
          <div className="flex flex-col gap-2 w-full">
            <div
              onClick={() => {
                setOpenModal(true);
              }}
              className="cursor-pointer rounded-[5px] mt-5 w-full   bg-[#393939] hover:bg-[#333333] duration-200 px-[12px] py-[13px] flex flex-row md:flex-col lg:flex-row gap-2 items-center justify-center"
            >
              <div className="w-[39px] h-[39px] mr-2 flex items-center justify-center">
                <img className="h-8 w-8" src="donation-1.gif" />
              </div>
              <div className="text-white font-poppins text-[14px] text-center font-semibold">
                1-Time Donation
              </div>
            </div>
            <div
              className="cursor-pointer rounded-[5px] mt-5 w-full  bg-[#464645] hover:bg-[#2e2e2e
] duration-200 px-[12px] py-[13px] flex flex-row md:flex-col lg:flex-row gap-2 items-center justify-center"
            >
              <div className="w-[39px] h-[39px] mr-2">
                <Lottie className="" animationData={share} loop={true} />
              </div>
              <div className="text-white font-poppins text-[14px] text-center font-semibold">
                Share this cause
              </div>
            </div>
            {/* <Cancel/> */}
          </div>
        )}
      </div>
      <FollowersModal isOpen={followersModal} setIsOpen={setFollowersModal}/>
    </div>
  );
};

export default ProfileCard;
