import Lottie from "lottie-react";
import signup from "../assets/signup.json";
import Select from "react-tailwindcss-select";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const options = [
  { value: "environmental", label: "Environmental" },
  { value: "animal_welfare", label: "Animal welfare" },
  { value: "education", label: "Education" },
  { value: "healthcare", label: "Healthcare" },
  { value: "community_development", label: "Community Development" },
  { value: "food_insecurity", label: "Food insecurity" },
  { value: "arts_and_culture", label: "Arts & Culture" },
  { value: "religion_and_spirituality", label: "Religion & Spirituality" },
  { value: "housing_insecurity", label: "Housing insecurity" },
  {
    value: "disability_rights_and_services",
    label: "Disability Rights & Services",
  },
  { value: "civic_engagement", label: "Civic engagement" },
  { value: "public_policy", label: "Public Policy" },
];

export default function CategoryDonor() {
  const navigate = useNavigate();
  const handleChange = (value) => {
    console.log("value:", value);
    setAnimal(value);
  };

  const handleContinue = () => {
    navigate("/");
  };

  const [animal, setAnimal] = useState(null);
  return (
    <>
      <section className="bg-[#FBFBFB]  min-h-screen flex items-center justify-center">
        {/* login container */}
        <div className="bg-[#FBFBFB] flex rounded-2xl shadow-custom-1  p-5 items-center">
          {/* form */}
          <div className="md:w-3/2 px-8  md:px-16">
            <h2 className="font-bold text-2xl text-secondary">
              Choose categories you care about
            </h2>
            <p className="text-xs mt-4 text-secondary">
              Select all of the categories that align with your philanthropic
              goals
            </p>
            <form action="" className="flex flex-col gap-4 mt-4">
              <div className="relative">
                <Select
                  className="p-2 mt-8 rounded-xl border"
                  value={animal}
                  onChange={handleChange}
                  options={options}
                  isMultiple={true}
                  classNames={{
                    menuButton: ({ isDisabled }) =>
                      `flex text-sm text-gray-500 border   rounded-xl   focus:outline-none ${
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
                className="py-2 px-5 bg-[#464645]  text-white border rounded-xl hover:scale-110 duration-300"
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
