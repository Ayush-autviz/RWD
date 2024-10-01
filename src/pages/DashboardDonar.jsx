import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import CentreCard from "../components/CentreCard";
import DashboardCard from "../components/DashboardCard";
import ProfileCard from "../components/ProfileCard";
import DonateNowCard from "../components/DonateNowCard";
import AboutUsCard from "../components/AboutUsCard";
import Footer from "../components/Footer";
import { useTabContext } from "../context/TabProvider";
import ProfileCardDonor from "../components/ProfileCardDonor";
import DonateNowCardDonor from "../components/DonateNowCardDonor";
import AboutUsCardDonor from "../components/AboutUsCardDonor";
import StorySection from "../components/StorySection";
import InviteModal from "../components/InviteModal";
import StorySectionDonor from "../components/StorySectionDonor";

const DashboardDonar = () => {

  const { selectedTab, setSelectedTab }= useTabContext();

  const [open,setOpen] = useState(true);

  useEffect(()=>{
    setSelectedTab('home');
  })
  return (
    <div className="flex flex-col md:flex-row bg-white">
      <div className="fixed top-0 left-0 h-full hidden md:block">
        <SideBar />
      </div>
      <div className="md:ml-[90px] flex-1 overflow-y-auto flex flex-col-reverse md:flex-row">
        <CentreCard className="order-2 md:order-1">
          <div className="mx-0 rounded-[10px]">
            <DonateNowCardDonor />
            <div className="mt-[20px] grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1  gap-5">
              <DashboardCard
                image="support (1).png"
                heading="I Support"
                text="8 Causes"
              />
              <DashboardCard
                image="passionate.png"
                heading="I Am Passionate About"
                text="Early childhood education & Women’s healthcare"
              />
              <div className=" md:col-span-2  lg:col-span-1">
              <DashboardCard
                image="subsidy.png"
                heading="My Charity goal is"
                text="To Contribute to efforts to focused  on ending world hunger"
              />
              </div>
            </div>
            <AboutUsCardDonor />
            <StorySectionDonor/>
          </div>
        </CentreCard>
        <ProfileCardDonor className="order-1 md:order-2" />
        <div className="fixed bottom-0 left-0 w-full md:hidden">
          <Footer />
        </div>

      </div>
      <InviteModal open={open} setOpen={setOpen} />
    </div>
  );
};

export default DashboardDonar;
