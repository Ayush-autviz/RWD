import Lottie from "lottie-react";
import signup from "../assets/signup.json";
import { Link, useNavigate } from "react-router-dom";

export default function SignUpComponent() {
  const navigate = useNavigate();
  const handleLogin = () => {
    localStorage.setItem("isAuthenticated", "donar");
    navigate("/verification");
  };
  return (
    <>
      <section className="bg-gray-50 md:w-fit md:mx-auto mx-4">
        {/* login container */}
        <div className="my-5 flex flex-col-reverse md:flex-row bg-white rounded-2xl shadow-lg w-[100%] md:w-[750px]  md:p-8 p-2  items-center h-fit">
          {/* form */}
          <div className="w-[100%]  md:w-[60%] p-2 md:pr-8">
            <h2 className="font-bold text-2xl text-secondary text-center pb-2">Sign up</h2>
            <p className="text-xs  text-secondary text-center font-poppins  pb-4">
              Create your profile to find and support causes for $5 per month
            </p>
            <form action="" className="flex flex-col gap-4">
              <input
                className="p-2 py-4 mt-4 rounded-xl border text-sm w-full bg-white"
                type="email"
                name="email"
                placeholder="Email"
              />
              <div className="relative">
                <input
                  className="p-2 py-4 rounded-xl border text-sm w-full  bg-white"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </div>
              <div className="relative">
                <input
                  className="p-2 py-4  rounded-xl border text-sm w-full bg-white"
                  type="password"
                  name="password"
                  placeholder="Confim Password"
                />
              </div>
              <button
                onClick={handleLogin}
                className="bg-[#464645] rounded-xl text-white py-4 hover:scale-105 duration-300"
              >
                Sign up
              </button>
            </form>
            <div className="mt-3 text-xs flex justify-center items-center text-center text-secondary">
              <p>Already have an account? <Link  className="px-1 underline" to="/login">Login</Link></p>
             
            </div>
          </div>
          {/* image */}
          <div className="md:bg-[#f5f4f4] pt-5 pb-2  md:p-14 rounded-2xl h-full ">
            <div className="flex flex-col gap-24 items-center justify-center h-full">
              <div className="flex flex-row gap-5 items-center justify-center">
              <img src="crwd.png" className="w-[150px]" />
                {/* <div className="text-[49px]">RWD</div> */}
              </div>
              <Lottie
                className="w-[205px] h-[233px] hidden md:block  "
                animationData={signup}
                loop={true}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}