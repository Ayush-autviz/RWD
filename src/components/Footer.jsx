import { useState } from "react";
import { useTabContext } from "../context/TabProvider";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  // const [selectedTab, setSelectedTab] = useState('home');
  const { selectedTab, setSelectedTab } = useTabContext();
  const navigate = useNavigate();

  return (
    <div className="bg-white flex mx-5 mb-5 flex-row px-[11px] py-[8px] justify-between items-center border border-solid border-[#4db510] shadow-custom-1 rounded-[41px]">
      <div
        className={`rounded-[54px] px-[24px] py-[7px] cursor-pointer ${
          selectedTab === "home" ? "bg-[#4db510] " : ""
        }`}
        onClick={() => {
          setSelectedTab("home"), navigate("/");
        }}
      >
        <img
          className={`w-[24px] ${
            selectedTab === "home" ? "filter-white" : "image-brown"
          }`}
          src="/home.svg"
        />
      </div>
      <div
        className={`rounded-[54px] px-[24px] py-[7px] cursor-pointer ${
          selectedTab === "search" ? "bg-[#4db510] " : ""
        }`}
        onClick={() => {
          setSelectedTab("search"), navigate("/search");
        }}
      >
        <img
          className={` w-[24px] ${
            selectedTab === "search" ? "filter-white" : ""
          }`}
          src="/mdi_search.svg"
        />
      </div>
      <div
        className={`rounded-[54px] px-[24px] py-[7px] cursor-pointer ${
          selectedTab === "user" ? "bg-[#4db510] " : ""
        }`}
        onClick={() => {
          setSelectedTab("user"), navigate("/profile");
        }}
      >
        <img
          className={`w-[24px] ${selectedTab === "user" ? "filter-white" : ""}`}
          src="/lucide_user.svg"
        />
      </div>
    </div>
  );
};

export default Footer;
