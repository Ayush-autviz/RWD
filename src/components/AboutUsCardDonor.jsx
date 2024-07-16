import React from "react";

const AboutUsCardDonor = () => {
  return (
    <div className="mt-[20px] w-full rounded-[10px] border border-solid border-[#DFDFDF] bg-[#dddddd24] py-[25px]  px-[14px]  ">
      <div className="gap-4">
        <div className="flex flex-col  xl:flex-row w-full  xl:justify-evenly gap-1  md:gap-0 xl:items-center">
          <div className=" flex   flex-row text-secondary font-poppins text-[16px] font-medium  gap-2 ">
            <div className="flex flex-row gap-2 xl:mx-auto">
              <img className="h-[24px] w-[24px]" src="location.svg" />
              <div>
                My Location:{" "}
                <span className="text-[#4db510] cursor-pointer font-semibold">
                  Atlanta,GA
                </span>
              </div>
            </div>
          </div>
           <div className=" hidden xl:block h-[24px] xl:border-r border-1 md:border-solid border-[#393939]"/>
          <div className="flex flex-row   text-secondary font-poppins text-[16px] font-medium  gap-2 ">
            <div className="flex flex-row gap-2  xl:mx-auto">
              <img className="h-[24px] w-[24px]" src="globe.svg" />
              <div>
              Find me here:{" "}
                <span className="text-[#4db510] cursor-pointer font-semibold">
                  Groceryspot.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsCardDonor;