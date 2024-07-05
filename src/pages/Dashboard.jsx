import React from "react";
import SideBar from "../components/SideBar";
import CentreCard from "../components/CentreCard";
import DashboardCard from "../components/DashboardCard";
import ProfileCard from "../components/ProfileCard";
import DonateNowCard from "../components/DonateNowCard";
import AboutUsCard from "../components/AboutUsCard";
import Footer from "../components/Footer";

const Dashboard = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="fixed top-0 left-0 h-full hidden md:block">
        <SideBar />
      </div>
      <div className="md:ml-[90px] flex-1 overflow-y-auto flex flex-col-reverse md:flex-row">
        <CentreCard className="order-2 md:order-1">
          <div className="mx-0 rounded-[10px]">
            <DonateNowCard />
            <div className="mt-[20px] grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1  gap-5">
              <DashboardCard
                image="stat (1).png"
                heading="Running stats"
                text="2000 meals provides per month"
              />
              <DashboardCard
                image="achievement (1).png"
                heading="Our highlights"
                text="received the NAACP award for non-profit achievement 2024"
              />
              <div className=" md:col-span-2  lg:col-span-1">
              <DashboardCard
                image="mission (1).png"
                heading="Our Mission is to"
                text="eliminate food poverty across the metro-Atlanta area. Our mission is to eliminate food poverty across the metro-Atlanta area"
              />
              </div>
            </div>
            <AboutUsCard />
          </div>
        </CentreCard>
        <ProfileCard className="order-1 md:order-2" />
        <div className="fixed bottom-0 left-0 w-full md:hidden">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
