import Lottie from "lottie-react";
import login from "../assets/login.json";
import { useState } from "react";
import Select from "react-tailwindcss-select";
import { Link, useNavigate } from "react-router-dom";

const options = [
  { value: "fox", label: "🦊 Fox" },
  { value: "Butterfly", label: "🦋 Butterfly" },
  { value: "Honeybee", label: "🐝 Honeybee" },
];

export default function LoginComponentNP() {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("isAuthenticated", "donar");
    navigate("/");
  };

  const [animal, setAnimal] = useState(null);

  const handleRegister = () => {
    navigate("/signupNP");
  };

  const handleChange = (value) => {
    console.log("value:", value);
    setAnimal(value);
  };
  return (
    <>
      <section className="bg-gray-50 min-h-screen flex bg-cover bg-center  items-center justify-center">
        {/* login container */}
        <div className="bg-[#FBFBFB] flex rounded-2xl shadow-custom-1 w-[750px] p-5 items-center">
          {/* form */}
          <div className="w-[60%] px-8 md:pr-12 md:px-8">
            <h2 className="font-bold text-2xl text-secondary">Login</h2>
            {/* <p className="text-xs mt-4 text-secondary">
        If you are already a member, easily log in
      </p> */}
            <form action="" className="flex flex-col gap-4">
              <input
                className="p-2 mt-4 rounded-xl border"
                type="email"
                name="email"
                placeholder="Email"
              />
              <div className="relative">
                <input
                  className="p-2 rounded-xl border w-full"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                
                <a className="text-xs text-right block py-1" href="#">Forgot your password?</a>

              </div>

              <button
                onClick={handleLogin}
                className="bg-[#464645]  rounded-xl text-white py-2 hover:scale-105 duration-300"
              >
                Login
              </button>
            </form>
           
            <div className="mt-3 text-xs flex justify-center items-center text-center text-secondary">
              <p>Don't have an account? <Link  className="px-1" to="/signup">Register</Link></p>
           
            </div>
            <p
              onClick={() => {
                navigate("/login");
              }}
              className="p-3  rounded-2xl mt-4 bg-red-200 text-xs flex justify-center items-center text-secondary hover:scale-105 duration-300"
            >
              Or go to Donor login
            </p>
          </div>
          {/* image */}
          <div className="md:block hidden bg-[#f5f4f4]  p-14 rounded-2xl h-full ">
            <div className="flex flex-col gap-24 items-center justify-center h-full ">
              <div className="flex flex-row gap-5 items-center justify-center">
                <img src="logo.svg" />
                <div className="text-[49px]">RWD</div>
              </div>
              <Lottie
                className="w-[100%] h-[233px] "
                animationData={login}
                loop={true}
              />
            </div>
            {/* <div className="bg-slate-200 w-[380px] h-screen flex">

</div> */}
          </div>
        </div>
      </section>
    </>
  );
}
