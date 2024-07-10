import React from "react";

const EditProfile = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center flex-col justify-center gap-2    w-fit">
        <img
          className=" w-[82px] h-[82px] rounded-full  "
          src="Rectangle 5.svg"
        />
        <div className="underline  cursor-pointer  ">Edit image</div>
      </div>
      <div className="w-[100%] md:w-[50%]">
        <div className="w-full flex items-center justify-end"></div>
        <div className="relative my-4">
          <div className="mb-2">Non profit Name </div>

          <input
            className="p-2  py-4 rounded-xl w-full border bg-white"
            type="text"
            name="name"
            placeholder="Non-profit Name"
          />
        </div>

        <div className="relative my-4">
          <div className="mb-2">Your dontaion will provide</div>
          <textarea
            className="p-2  py-4 rounded-xl border w-full bg-white"
            type="text"
            name="donation"
            placeholder="Your dontaion will provide"
          />
        </div>
        <div className="relative my-4">
          <div className="mb-2">Our mission is</div>
          <textarea
            className="p-2  py-4 rounded-xl border w-full bg-white"
            type="text"
            name="mission"
            placeholder="Our mission is"
          />
        </div>
        <div className="relative my-4">
          <div className="mb-2">Running stats</div>
          <textarea
            className="p-2  py-4 rounded-xl border w-full bg-white"
            type="text"
            name="stats"
            placeholder="Running stats"
          />
        </div>
        <div className="relative my-4">
          <div className="mb-2">Our highlights</div>
          <textarea
            className="p-2  py-4 rounded-xl border w-full bg-white"
            type="text"
            name="highlights"
            placeholder="Our highlights"
          />
        </div>
        <div className="relative my-4">
          <div className="mb-2">Year Founded</div>
          <input
            className="p-2   py-4 rounded-xl border w-full bg-white"
            type="text"
            name="founded"
            placeholder="Year Founded"
          />
        </div>
        <div className="relative my-4">
          <div className="mb-2">You can find us here</div>
          <input
            className="p-2   py-4 rounded-xl border w-full bg-white"
            type="text"
            name="founded"
            placeholder="You can find us here"
          />
        </div>
        <button className="bg-[#464645]  rounded-xl text-white py-4 w-full my-4  hover:scale-105 duration-300">
          Save
        </button>
      </div>
    </div>
  );
};

export default EditProfile;
