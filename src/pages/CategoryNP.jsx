import Lottie from "lottie-react";
import signup from '../assets/signup.json'
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


export default function CategoryNP() {
  const navigate = useNavigate()
    const handleChange = (value) => {
        console.log("value:", value);
        setAnimal(value);
      };

      const handleContinue = () => {
        navigate("/");
      };

    const [animal, setAnimal] = useState(null);
  return (<>
<section className="bg-[#FBFBFB] min-h-screen flex items-center justify-center">
  {/* login container */}
  <div className="my-5  bg-white rounded-2xl shadow-lg w-[100%] md:w-[500px]  md:p-8 p-2  items-center h-fit">
    {/* form */}
    <div className="">
      <h2 className="font-bold text-2xl text-secondary text-center pb-2">What category is your cause?</h2>
      <p className="text-xs  text-secondary text-center font-poppins  pb-4">
      which categorize best describes your cause’s initiative?
      </p>
      <form action="" className="flex flex-col gap-4 mt-4">
        <div className="relative">
           <Select
            className="p-2 mt-8 rounded-xl border"
            value={animal}
            onChange={handleChange}
            options={options}
            classNames={{
              menuButton: ({ isDisabled }) => (
                  `flex text-sm text-gray-500 border  py-1.5  rounded-xl   focus:outline-none ${
                      isDisabled
                          ? "bg-gray-200"
                          : "bg-white  focus:outline-offset-0 focus:outline-black"
                  }`
              ),
              menu: "absolute z-10 w-full bg-white  border rounded-xl py-1 mt-1.5 text-sm text-gray-700",
              list:'h-[200px] overflow-y-auto',
              listItem: ({ isSelected }) => (
                  `block transition duration-200 px-2 py-2 cursor-pointer select-none truncate rounded-xl ${
                      isSelected
                          ? `text-white bg-blue-500`
                          : `text-gray-500 hover:bg-[#e9e9e9] `
                  }`
              ),


          }}

        /> 

        </div>

      </form>
      <div className="mt-3 text-xs flex justify-between items-center text-secondary">
        <button   onClick={handleContinue} className="bg-[#464645]  rounded-xl text-white py-4 w-full  hover:scale-105 duration-300">
          Continue
        </button>
      </div>
    </div>
  </div>
</section>
    </>
  );
}