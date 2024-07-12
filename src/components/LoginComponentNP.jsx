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
    localStorage.setItem("isAuthenticated", "npo");
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
      <section className="bg-gray-50 md:w-fit md:mx-auto mx-4 ">
        {/* login container */}
        <div className=" my-5 flex flex-col-reverse  bg-white rounded-2xl shadow-lg w-[100%] md:w-[550px]  md:p-8 p-4  items-center h-fit">
          {/* form */}
          <div className="w-[100%] p-2 ">
            <h2 className="font-bold text-2xl text-secondary text-center pb-2">
              Login
            </h2>
            <p className="text-xs  text-secondary text-center font-poppins  pb-4">
              Gain loyal supporters who are passionate.
            </p>
            <form action="" className="flex flex-col gap-4">
              <input
                className="p-2 mt-4  py-4 rounded-xl border bg-white"
                type="email"
                name="email"
                placeholder="Email"
              />
              <div className="relative">
                <input
                  className="p-2 py-4 rounded-xl border w-full bg-white"
                  type="password"
                  name="password"
                  placeholder="Password"
                />

                <a className="text-xs text-right block py-1 underline cursor-pointer" href="#">
                  Forgot your password?
                </a>
              </div>

              <button
                onClick={handleLogin}
                className="bg-[#464645] rounded-xl under text-white py-3 hover:scale-105 duration-300"
              >
                Login
              </button>
            </form>

            <div className="mt-3 text-xs flex justify-center items-center text-center text-secondary">
              <p>
                Don't have an account?{" "}
                <Link
                  className="font-bold underline cursor-pointer hover:scale-105 px-1"
                  to="/signup"
                  state={{ tab: "npo" }}
                >
                  Sign up
                </Link>
              </p>
            </div>
            {/* <p
              onClick={() => {
                navigate("/login");
              }}
              className="p-3  rounded-2xl mt-4 bg-red-200 text-xs flex justify-center items-center text-secondary hover:scale-105 duration-300"
            >
              Or go to Donor login
            </p> */}
          </div>
          {/* image */}
          <div className="flex flex-row pb-4 items-center justify-center">
            <img src="crwd.png" className="w-[150px]" />
            {/* <div className="text-[49px]">RWD</div> */}
          </div>
        </div>
      </section>
    </>
  );
}
