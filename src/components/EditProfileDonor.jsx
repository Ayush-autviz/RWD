import React from "react";

const EditProfileDonor = () => {
  return (
    <div className="flex flex-col items-center bg-white justify-center">
      <div className="flex items-center flex-col justify-center gap-2    w-fit">
        <img
          className=" w-[82px] h-[82px] rounded-full  object-cover"
          src="userp.jpg"
        />
        <div className="underline  cursor-pointer  ">Edit image</div>
      </div>
      <div className="w-[100%] md:w-[50%]">
        <div className="w-full flex items-center justify-end"></div>
        <div className="relative my-4">
          <div className="mb-2">Your Name</div>

          <input
            className="p-2  py-4 rounded-xl w-full border bg-white"
            type="text"
            name="name"
            placeholder="Your Name"
          />
        </div>

        <div className="relative my-4">
          <div className="mb-2">Causes I am passionate about</div>
          <textarea
            className="p-2  py-4 rounded-xl border w-full bg-white"
            type="text"
            name="donation"
            placeholder="Causes I am passionate about"
          />
        </div>
        <div className="relative my-4">
          <div className="mb-2">My charity goals</div>
          <textarea
            className="p-2  py-4 rounded-xl border w-full bg-white"
            type="text"
            name="mission"
            placeholder="My charity goals"
          />
        </div>
        <div className="relative my-4">
          <div className="mb-2">Fun facts</div>
          <textarea
            className="p-2  py-4 rounded-xl border w-full bg-white"
            type="text"
            name="stats"
            placeholder="Fun facts"
          />
        </div>
        <button className="bg-[#464645]  rounded-xl text-white py-4 w-full my-4  hover:scale-105 duration-300">
          Save
        </button>
      </div>
    </div>
  );
};

export default EditProfileDonor;
