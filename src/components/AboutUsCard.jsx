import React from "react";

const AboutUsCard = () => {
  return (
    <div className="mt-[20px] w-full rounded-[10px] border border-solid border-[#DFDFDF] bg-[#dddddd24] py-[25px]  px-[14px]  ">
      <div className="gap-4">
        <div className="flex flex-col  xl:flex-row w-full  xl:justify-between gap-5  md:gap-0 xl:items-center">
          <div className=" flex lg:pr-[1.5%] xl:pr-[3%] xl:border-r  md:border-solid border-[#393939] flex-row text-secondary font-poppins text-[16px] font-medium  gap-2 ">
            <div className="flex flex-row gap-2 xl:mx-auto">
              <img className="h-[24px] w-[24px]" src="location.svg" />
              <div>
                Our Location:{" "}
                <span className="text-[#4db510] cursor-pointer font-semibold">
                  Atlanta,GA
                </span>
              </div>
            </div>
          </div>
          <div className="flex lg:pr-[1.5%] xl:pr-[3%] flex-row py-3 xl:py-0 text-secondary font-poppins text-[16px] font-medium  gap-2 xl:border-r  md:border-solid border-[#393939]">
            <div className="flex flex-row gap-2 xl:mx-auto">
              <img className="h-[24px] w-[24px]" src="building.svg" />
              <div>
                Founded: <span className="text-[#4db510] font-semibold">2021</span>
              </div>
            </div>
          </div>
          <div className="flex flex-row   text-secondary font-poppins text-[16px] font-medium  gap-2 ">
            <div className="flex flex-row gap-2  xl:mx-auto">
              <img className="h-[24px] w-[24px]" src="globe.svg" />
              <div>
                You can find us here:{" "}
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

export default AboutUsCard;
