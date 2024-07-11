import React, { useState } from "react";
import ChangePassword from "./ChangePassword";
import ChangeUsername from "./ChangeUsername";
import ChangeEmail from "./ChangeEmail";
import PaymentMethod from "./PaymentMethod";
import TermsAndCondition from "./TermsAndCondition";
import PrivacyPolicy from "./PrivacyPolicy";

const Settings = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const [selectedTab, setSelectedTab] = useState("password");

  const [selectedTabMd, setSelectedTabMd] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const tabs = [
    { name: "Change Password", id: "password" },
    //  {heading: 'Change Username',component:<ChangeUsername/>,arrow:true},
    { name: "Change Email", id: "email" },
    { name: "Payment Methods", id: "payment" },
    { name: "Terms of use", id: "terms" },
    { name: "Privacy Policy", id: "policy" },
  ];

  const handleChange = (event) => {
    const selectedTab = tabs.find((tab) => tab.name === event.target.value);
    setSelectedTab(selectedTab.id);
  };

  return (
    <div className=" md:mb-9 bg-white  mx-auto">
      {/* <div className="md:hidden custom-select">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
       
        <select
          id="tabs"
          name="tabs"
          className="p-2 py-4 rounded-xl custom-select border w-full text-sm  bg-white px-2"
          defaultValue={"Change Password"}
          onChange={handleChange}
        >
          {tabs.map((tab) => (
            <option className="bg-grey-50" key={tab.name}>
              {tab.name}
            </option>
          ))}
        </select>
      </div> */}
      { !selectedTabMd &&
      <div className="flex md:hidden flex-col gap-5">
      {
        tabs.map((tab)=>(<div className=" w-[100%]   bg-white border-[0.5px] mx-auto rounded-full p-2">
          <div
            key={tab.id}
            href={tab.href}
            onClick={() => setSelectedTabMd(tab.id)}
            className={classNames(
              selectedTabMd === tab.id
                ? "bg-gray-100 text-gray-700 "
                : "text-gray-500 hover:text-gray-700",
              "px-6 py-2 text-center font-medium text-sm rounded-full"
            )}
            aria-current={selectedTab === tab.id ? "page" : undefined}
          >
            {tab.name}
          </div>
          </div>
        ))
       }
       </div>
       
       }

      <nav
        className=" w-fit hidden md:flex bg-white border-[0.5px] mx-auto rounded-full p-2 "
        aria-label="Tabs"
      >
        {tabs.map((tab) => (
          <a
            key={tab.id}
            onClick={() => setSelectedTab(tab.id)}
            className={classNames(
              selectedTab === tab.id
                ? "bg-gray-100 text-gray-700"
                : "text-gray-500 hover:text-gray-700",
              "px-6 py-2 font-medium text-sm rounded-full"
            )}
            aria-current={selectedTab === tab.id ? "page" : undefined}
          >
            {tab.name}
          </a>
        ))}
      </nav>
{  selectedTabMd &&
      <div onClick={()=>{setSelectedTabMd(null)}}  className="w-full md:hidden p-2 flex gap-2 items-center justify-start">
        <img src='back.png' className="w-[15px] h-[15px]"/>
        <div className="font-bold text-[15px]">Back</div>
      </div>
}


      <div className="hidden md:block">
      {selectedTab === "password" && <ChangePassword />}
      {selectedTab === "email" && <ChangeEmail />}
      {selectedTab === "payment" && <PaymentMethod />}
      {selectedTab === "terms" && <TermsAndCondition />}
      {selectedTab === "policy" && <PrivacyPolicy />}
      </div>


      {selectedTabMd === "password" && <ChangePassword />}
      {selectedTabMd === "email" && <ChangeEmail />}
      {selectedTabMd === "payment" && <PaymentMethod />}
      {selectedTabMd === "terms" && <TermsAndCondition />}
      {selectedTabMd === "policy" && <PrivacyPolicy />}


    </div>
  );
};

export default Settings;
