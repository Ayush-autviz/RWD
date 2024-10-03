import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";

const StorySectionScreen = ({ comment }) => {
  const [clapCount, setClapCount] = useState(comment.clap);
  const [heartCount, setHeartCount] = useState(comment.heart);
  const [tearsOfJoyCount, setTearsOfJoyCount] = useState(comment.tears_of_joy);

  const handleClapClick = () => {
    setClapCount((prevCount) => prevCount + 1);
  };

  const handleHeartClick = () => {
    setHeartCount((prevCount) => prevCount + 1);
  };

  const handleTearsOfJoyClick = () => {
    setTearsOfJoyCount((prevCount) => prevCount + 1);
  };

  return (
    <section className="py-4 relative  rounded-[10px] mt-5">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-center items-center lg:gap-3 gap-3 inline-flex">
          <div className="w-full flex-col justify-center items-center gap-8 flex">
            <div className="w-full lg:p-8 p-5 bg-white rounded-[12px] border border-gray-200 flex-col justify-center items-center flex">
              <div className="w-full flex-col justify-center items-center gap-3.5 flex">
                <div className="w-full justify-center items-center inline-flex">
                  <div className="justify-center items-center gap-2.5 flex flex-col">
                    <div className="w-14 h-14 bg-stone-300 rounded-full justify-center items-center gap-2.5 flex">
                      <img
                        className="rounded-full object-cover"
                        src={comment.avatar}
                        alt="John smith image"
                      />
                    </div>
                    <div className="flex-col justify-center items-center gap-1 inline-flex">
                      <h5 className="text-gray-900 text-sm font-semibold leading-snug">
                        {comment.author}
                      </h5>
                      <h6 className="text-gray-500 text-xs font-normal leading-5">
                        {comment.time}
                      </h6>
                    </div>
                  </div>
                </div>
                <p className="text-gray-800 text-sm font-normal text-center leading-snug">
                  {comment.content}
                </p>
              </div>
              <div className="flex flex-row gap-2 mt-4">
                <div
                  className="flex-row px-2 py-1 rounded-full bg-[#e9e9e9] cursor-pointer flex gap-2 justify-center items-center"
                  onClick={handleClapClick}
                >
                  <div className="bg-white hover:scale-105 rounded-full justify-center items-center flex h-[30px] w-[30px]">
                    👏
                  </div>
                  <div className="rounded-full justify-center items-center flex p-[2px] w-4">
                    {clapCount}
                  </div>
                </div>

                <div
                  className="flex-row px-2 py-1 rounded-full bg-[#e9e9e9] cursor-pointer flex gap-2 justify-center items-center"
                  onClick={handleHeartClick}
                >
                  <div className="bg-white hover:scale-105 rounded-full justify-center items-center flex h-[30px] w-[30px]">
                    ❤️
                  </div>
                  <div className="rounded-full justify-center items-center flex p-[2px] w-4">
                    {heartCount}
                  </div>
                </div>

                <div
                  className="flex-row px-2 py-1 rounded-full bg-[#e9e9e9] cursor-pointer flex gap-2 justify-center items-center"
                  onClick={handleTearsOfJoyClick}
                >
                  <div className="bg-white hover:scale-105 rounded-full justify-center items-center flex h-[30px] w-[30px]">
                  🥹
                  </div>
                  <div className="rounded-full justify-center items-center flex p-[2px] w-4">
                    {tearsOfJoyCount}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySectionScreen;
