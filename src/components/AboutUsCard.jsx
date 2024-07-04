import React from "react";

const AboutUsCard = () => {
  return (
    <div className="mt-[20px] rounded-[10px] border border-solid border-[#DFDFDF] bg-gradient-to-b from-[rgba(147, 0, 255, 0.05)] to-[rgba(88, 0, 153, 0.05)] py-[25px] bg-[#F8F2FD] px-[14px]  ">
      <div className="gap-4">
        <div className="flex flex-col md:flex-row justify-between gap-5  md:gap-0">
          <div className=" flex  flex-row text-secondary font-poppins text-[16px] font-medium  gap-2 ">
            <div className="flex flex-row gap-2 md:mx-auto">
              <img className="h-[24px] w-[24px]" src="location.svg" />
              <div>
                Our Location :{" "}
                <span className="text-[#9300FF] cursor-pointer">Atlanta,GA</span>
              </div>
            </div>
          </div>
          <div className="flex flex-row md:px-7 text-secondary font-poppins text-[16px] font-medium  gap-2 md:border-r md:border-l md:border-solid border-[#393939]">
            <div className="flex flex-row gap-2 md:mx-auto">
              <img className="h-[24px] w-[24px]" src="building.svg" />
              <div>
                Founded : <span className="text-[#9300FF]">2021</span>
              </div>
            </div>
          </div>
          <div className="flex flex-row text-secondary font-poppins text-[16px] font-medium  gap-2 ">
            <div className="flex flex-row gap-2 md:mx-auto">
              <img className="h-[24px] w-[24px]" src="globe.svg" />
              <div>
                You can find us here :{" "}
                <span className="text-[#9300FF] cursor-pointer">Groceryspot.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsCard;
