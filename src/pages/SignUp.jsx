import React, { useState } from "react";
import SignUpComponent from "../components/SignUpComponent";
import SignUpComponentNP from "../components/SignUpComponentNP";
import { useLocation } from "react-router-dom";

const tabs = [
  { name: "Donor", href: "#", id: "donor" },
  { name: "NPO", href: "#", id: "npo" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const SignUp = () => {
  const location = useLocation();
  console.log(location);
  const [selectedTab, setSelectedTab] = useState(
    location?.state?.tab || "donor"
  );
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col bg-cover 2xl:justify-center">
      <div className="flex justify-center  items-center mt-6 ">
        <nav
          className="flex  bg-white border-[0.5px] rounded-full p-2"
          aria-label="Tabs"
        >
          {tabs.map((tab) => (
            <a
              key={tab.id}
              href={tab.href}
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
      </div>
      {selectedTab === "npo" ? <SignUpComponentNP /> : <SignUpComponent />}
    </div>
  );
};

export default SignUp;
