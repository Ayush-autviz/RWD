
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


export default function ConnectStripe() {
  const navigate = useNavigate()
  const { setRole } = useAuth();
  const handleContinue = () => {
    localStorage.setItem("isAuthenticated", "npo");
    setRole("npo");
    navigate("/");
  };
  return (<>
<section className="bg-[#FBFBFB] min-h-screen flex items-center justify-center">
  {/* login container */}
  <div className="my-5 mx-3  bg-white rounded-2xl shadow-lg w-[100%] md:w-[500px]  md:p-8 p-2  items-center h-fit">
    {/* form */}
    <div className="flex flex-col justify-center items-center">
      <img src='stripe3.png' className="h-20 w-25 mb-4 "/>
      <h2 className="font-bold text-2xl text-secondary text-center pb-2">Start accepting donations</h2>
      <p className="text-xs  text-secondary text-center font-poppins  pb-4">
     Connect your stripe to activate your Cause profile
      </p>
      <div className="mt-3 w-full text-xs flex justify-between items-center text-secondary">
        <button   onClick={handleContinue} className="bg-[#464645]  rounded-xl text-white py-4 w-full  hover:scale-105 duration-300">
          Connect Stripe Account
        </button>
      </div>
    </div>
  </div>
</section>
    </>
  );
}