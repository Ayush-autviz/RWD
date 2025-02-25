import Lottie from "lottie-react";
import signup from "../assets/signup.json";
import Select from "react-tailwindcss-select";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const options = [
  { value: "environmental", label: "Animal" },
  { value: "animal_welfare", label: "Community" },
  { value: "education", label: "Environmental" },
  { value: "healthcare", label: "Human Rights" },
  { value: "community_development", label: "Education" },
  { value: "food_insecurity", label: "Health" },
  { value: "arts_and_culture", label: "Religion" },
];

export default function CategoryDonor() {
  const navigate = useNavigate();
  const handleChange = (value) => {
    console.log("value:", value);
    setAnimal(value);
  };

  const { setRole } = useAuth();
  const handleContinue = () => {
    localStorage.setItem("isAuthenticated", "donar");
    setRole("donar");
    navigate("/");
  };

  const [animal, setAnimal] = useState(null);
  return (
    <>
      <section className="bg-[#FBFBFB] min-h-screen flex items-center justify-center">
        {/* login container */}
        <div className="my-5 mx-3  bg-white rounded-2xl shadow-lg w-[100%] md:w-[500px]  md:p-8 p-2  items-center h-fit">
          {/* form */}
          <div className="">
            <h2 className="font-bold text-2xl text-secondary text-center pb-2">
              Choose categories you care about
            </h2>
            <p className="text-xs  text-secondary text-center font-poppins  pb-4">
              Select all of the categories that align with your philanthropic
              goals
            </p>
            <form action="" className="flex flex-col gap-4 mt-4">
              <div className="relative">
                <Select
                  className="p-2 py-4 rounded-xl border w-full text-sm  bg-white"
                  value={animal}
                  onChange={handleChange}
                  options={options}
                  isMultiple={true}
                  classNames={{
                    menuButton: ({ isDisabled }) =>
                      `flex text-sm text-gray-500 border  py-1.5 rounded-xl   focus:outline-none ${
                        isDisabled
                          ? "bg-gray-200"
                          : "bg-white  focus:outline-offset-0 focus:outline-black"
                      }`,
                    menu: "absolute z-10 w-full  bg-white   border rounded-xl py-1 mt-1.5 text-sm text-gray-700",
                    list:'h-[200px] overflow-y-auto',
                    listItem: ({ isSelected }) =>
                      `block transition duration-200 px-2 py-2  cursor-pointer select-none truncate rounded-xl ${
                        isSelected
                          ? `text-white bg-blue-500`
                          : `text-gray-500 hover:bg-[#e9e9e9] `
                      }`,
                  }}
                />
              </div>
            </form>
            <div className="mt-3 text-xs flex justify-between items-center text-secondary">
              <button
                onClick={handleContinue}
                className="bg-[#464645]  rounded-xl text-white py-4 w-full  hover:scale-105 duration-300"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
 