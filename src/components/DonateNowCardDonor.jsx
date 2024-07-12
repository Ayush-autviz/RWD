import Lottie from "lottie-react";
import React from "react";
import donation from "../assets/donation.json";
import maingif from "../assets/maingif.json";
import ImpactCard from "./ImpactCard";

const DonateNowCardDonor = () => {
  return (
    <div className="flex justify-between items-center flex-col bg-white   shadow-custom-1  rounded-[10px] relative overflow-hidden ">
      <img src="Ellipse2.svg" className="absolute bottom-0 left-0 z-[5] " />
      <div className="bg-[#464645] text-[30px] font-[600] rounded-b-[10px] mx-auto py-1 px-10 text-white"> Luke warm's Impact</div>
      <ImpactCard />
    </div>
  );
};

export default DonateNowCardDonor;
 