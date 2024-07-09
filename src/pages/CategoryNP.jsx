import Lottie from "lottie-react";
import signup from '../assets/signup.json'
import Select from "react-tailwindcss-select";
import { useState } from "react";

const options = [
    { value: "fox", label: "🦊 Fox" },
    { value: "Butterfly", label: "🦋 Butterfly" },
    { value: "Honeybee", label: "🐝 Honeybee" },
  ];
  

export default function CategoryNP() {
    const handleChange = (value) => {
        console.log("value:", value);
        setAnimal(value);
      };

    const [animal, setAnimal] = useState(null);
  return (<>
<section className="bg-[#FBFBFB] min-h-screen flex items-center justify-center">
  {/* login container */}
  <div className="bg-[#FBFBFB] flex rounded-2xl shadow-custom-1  p-5 items-center">
    {/* form */}
    <div className="md:w-3/2 px-8 md:px-16">
      <h2 className="font-bold text-2xl text-secondary">What category is your cause?</h2>
      <p className="text-xs mt-4 text-secondary">
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
                  `flex text-sm text-gray-500 border   rounded-xl   focus:outline-none ${
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
        <button className="py-2 px-5 bg-[#464645]  text-white border rounded-xl hover:scale-110 duration-300">
          Continue
        </button>
      </div>
    </div>
  </div>
</section>
    </>
  );
}