import React from "react";

const DashboardCard = ({image,heading,text}) => {
  return (
    <div className="flex animate-fade flex-col  items-center md:w-100 rounded-[6.386px] border border-solid border-[rgba(147, 0, 255, 0.10)] bg-white px-[25px] py-[20px] ">
      <div className="w-[47px] h-[47px] rounded-full bg-gradient-to-b from-[rgba(147, 0, 255, 0.05)] to-[rgba(88, 0, 153, 0.05)] flex justify-center items-center border border-solid border-[rgba(147, 0, 255, 0.10)] bg-[#e9e9e9]">
        <img className="w-5 h-5 filter-purple" src={image} />
      </div>
      <div className="text-secondary font-poppins text-[18px]    md:text-[16px] font-semibold leading-[35px]">
       {heading}
      </div>
      <div className="text-secondary font-poppins text-center  text-[16px] md:text-[14px] font-normal ">
        {text}
      </div>
    </div>
  );
};

export default DashboardCard;
