import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import Lottie from "lottie-react";
import announce from "../assets/announce.json";
import Tabs from "../components/Tabs";
import CentreCard from "../components/CentreCard";
import Footer from "../components/Footer";
import Settings from "../components/Settings";
import EditProfile from "../components/EditProfile";
import { useTabContext } from "../context/TabProvider";
import EditProfileDonor from "../components/EditProfileDonor";

const tabs = [
  { name: "Edit", href: "#", id: "edit" },
  { name: "Settings", href: "#", id: "setting" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ProfilePageDonor = () => {
  const [localselectedTab, setlocalselectedTab] = useState("edit");

  const { selectedTab, setSelectedTab }= useTabContext();

  useEffect(()=>{
    setSelectedTab('user');
  })


  return (
    <div className="flex flex-col bg-white md:flex-row overflow-x-hidden bg-center ">
      <div className="fixed top-0 left-0 h-full hidden md:block ">
        <SideBar />
      </div>
      <div className="flex-1 overflow-y-auto overflow-x-hidden flex flex-col ">
        {/* <div className="bg-[#e9e9e9] md:ml-[83px] w-full flex mx-auto flex-row items-center justify-between p-[23px] ">
            
            <div className="font-poppins mx-auto md:pr-[75px]    text-[#4db510] text-[16px] font-semibold">
              Grocery Spot
            </div>
            
          </div> */}
        <div className="flex-1  md:ml-[83px]   ml-0   rounded-b-[40px] border border-solid border-[#DFDFDF] bg-[#e9e9e9] flex flex-row  items-center py-[20px] px-[20px]  ">
          <div className="flex flex-col md:flex-row items-center justify-center mx-auto md:gap-20">
            <div className="relative ">
              <img
                className=" w-[82px] h-[82px] object-cover rounded-full md:w-[133px] md:h-[133px] "
                src="userp.jpg"
              />
              {/* <img
                className="absolute w-[22px] h-[22px] md:w-[45px] object-cover md:h-[45px] right-[-3px] bottom-[3px]  md:bottom-0"
                src="check.png"
              /> */}
            </div>


            <div className="flex flex-col gap-2 ">
              {/* <div className="bg-[#e9e9e9] md:ml-[83px] w-full flex  flex-row items-center justify-between  "> */}

              <div className="font-poppins px-10 mx-auto  md:mx-0  mt-5 md:mt-0  text-[25px] font-semibold">
                Luke Warm
              </div>

              {/* </div> */}

              <div className="flex flex-row justify-around  md:px-10 gap-4  mb-6  w-full">
                <div className="text-center item-center flex flex-col md:flex-row-reverse md:items-end gap-2 justify-center">
                  <div className="text-secondary  font-poppins text-[16px] md:text-[14px] font-medium mb-1">
                    Donations
                  </div>
                  <div className="text-secondary s font-poppins text-[25px]  font-semibold leading-[35px] md:leading-[40px]">
                    41
                  </div>
                </div>
                <div className="text-center flex  item-center  flex-col md:flex-row-reverse md:items-end gap-2 justify-center">
                  <div className="text-secondary  font-poppins text-[16px] md:text-[14px] font-medium mb-1">
                    Amount donated
                  </div>
                  <div className="text-secondary s font-poppins text-[25px]  font-semibold leading-[35px] md:leading-[40px]">
                    $205
                  </div>
                </div>
                <div className="text-center flex  item-center  flex-col md:flex-row-reverse md:items-end gap-2 justify-center">
                  <div className="text-secondary font-poppins text-[16px] md:text-[14px] font-medium mb-1">
                    Invites
                  </div>
                  <div className="text-secondary font-poppins text-[25px]  font-semibold leading-[35px] md:leading-[40px]">
                    8
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:ml-[83px]   justify-center  items-center -mt-5 ">
          <nav
            className="flex  bg-white border-[0.5px] rounded-full p-2 "
            aria-label="Tabs"
          >
            {tabs.map((tab) => (
              <a
                key={tab.id}
                href={tab.href}
                onClick={() => setlocalselectedTab(tab.id)}
                className={classNames(
                  localselectedTab === tab.id
                    ? "bg-gray-100 text-gray-700"
                    : "text-gray-500 hover:text-gray-700",
                  "px-6 py-2 font-medium text-sm rounded-full"
                )}
                aria-current={localselectedTab === tab.id ? "page" : undefined}
              >
                {tab.name}
              </a>
            ))}
          </nav>
        </div>
        <div class="md:ml-[83px]   my-7">
          <div className="p-5  mx-5    mb-20 md:mb-0 rounded-[40px] shadow-custom-1">
            {localselectedTab === "setting" ? <Settings /> : <EditProfileDonor />}
          </div>
          <div className="fixed bottom-0 left-0 w-full md:hidden">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePageDonor;