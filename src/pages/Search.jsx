import React from "react";
import SideBar from "../components/SideBar";
import CentreCard from "../components/CentreCard";
import DashboardCard from "../components/DashboardCard";
import ProfileCard from "../components/ProfileCard";
import DonateNowCard from "../components/DonateNowCard";
import AboutUsCard from "../components/AboutUsCard";
import Footer from "../components/Footer";

const categories = [
    {
        name: 'Education',
        path:'education.png'
    },
    {
        name: 'Animal Welfare',
        path:'welfare.png'
    },
    {
        name: 'Enviromental',
        path:'enviroment.png'
    },
    {
        name: 'Human rights/Social Justice',
        path:'human.png'
    },
    {
        name: 'Community Development',
        path:'community'
    },
    {
        name: 'Food Insecurity',
        path:'food.png'
    },
    {
        name: 'Arts & Culture',
        path:'art.png'
    },
    {
        name: 'Religion & Spirituality',
        path:'religion.png'
    },
    {
        name: 'Housing insecurity',
        path:'housing.png'
    },
    {
        name: 'Disablity Rights & Services',
        path:'disability.png'
    },
    {
        name: 'Civic engagement',
        path:'civic.png'
    },
    {
        name: 'Youth Developmnet',
        path:'youth.png'
    },
    {
        name: 'Emergency Response',
        path:'emergency.png'
    },
    {
        name: 'Peace building',
        path:'peace.png'
    },

]

const Search = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="fixed top-0 left-0 h-full hidden md:block">
        <SideBar />
      </div>
      <div className="md:ml-[90px] flex-1 w-full overflow-y-auto flex flex-col-reverse md:flex-row">
        <CentreCard className="">
        {/* <div class="relative ">
          <input class="p-2 rounded-xl border w-full" type="text" name="password" placeholder="Search"/>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" class="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2" viewBox="0 0 16 16">
            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
          </svg>
        </div> */}
                <div className="p-3 shadow-custom-1 border w-[130px]  rounded-xl">
                   <img src='education.png' className="w-[24px] h-[24px]"/>
                   <div className="mt-2">Education</div>
            </div>
        </CentreCard>
        <div className="fixed bottom-0 left-0 w-full md:hidden">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Search;
