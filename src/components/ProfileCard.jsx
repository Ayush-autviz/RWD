import React from "react";
import handshake from '../assets/handshake.json'
import Lottie from "lottie-react";

const ProfileCard = () => {
  return (
    <div className="min-w-[25%] md:my-[20px] flex-1 md:mr-[20px] md:rounded-[10px] rounded-b-[40px] border border-solid border-[#DFDFDF] bg-[#dddddd24] flex flex-col  items-center py-[20px] px-[20px] relative">
      <img className="absolute top-3 right-5 md:right-3 cursor-pointer" src="Group 18.svg"/>
      <div className="relative">
        <img className=" w-[82px] h-[82px] rounded-full md:w-[133px] md:h-[133px] " src="Rectangle 5.svg" />
        <img className="absolute w-[22px] h-[22px] md:w-[45px] md:h-[45px] right-[-3px] bottom-[3px]  md:bottom-0" src="check.png" />
      </div>
      <div className="cursor-pointer hidden md:block text-[#4db510] mt-[17px] font-poppins text-[16px] font-semibold ">
        Grocery Spot
      </div>
      <div className="h-[1px] w-full bg-[#DFDFDF] mt-5 hidden md:block" />
      <div className="flex flex-row justify-between md:flex-col md:gap-6 mt-4 w-full">
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
      <div className="cursor-pointer rounded-[5px] mt-5 w-full  bg-[#464645]  hover:bg-[#2a2a29] duration-200 px-[12px] py-[13px] flex flex-row md:flex-col lg:flex-row gap-2 items-center justify-center">
        <div className="w-[39px] h-[39px] mr-2">
      <Lottie className="" animationData={handshake} loop={true} />
      </div>
        <div className="text-white font-poppins text-[14px] text-center font-semibold">
          Support this cause
        </div>
      </div>
      <div className="text-secondary font-poppins text-[16px] font-medium mt-2">
        For $5/month
      </div>
    </div>
  );
};

export default ProfileCard;
