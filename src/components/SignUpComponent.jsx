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
      <section className="bg-[#FBFBFB] min-h-screen flex items-center justify-center">
        {/* login container */}
        <div className="bg-[#FBFBFB] flex rounded-2xl shadow-custom-1 w-[750px] p-5 items-center">
          {/* form */}
          <div className="w-[60%] px-8  md:px-8 md:pr-12">
            <h2 className="font-bold text-2xl text-secondary">Sign up</h2>
            <p className="text-xs mt-4 text-secondary">
              Create your profile to find and support causes for $5 per month
            </p>
            <form action="" className="flex flex-col gap-4">
              <input
                className="p-2 mt-8 rounded-xl border bg-white"
                type="email"
                name="email"
                placeholder="Email"
              />
              <div className="relative">
                <input
                  className="p-2 rounded-xl border w-full bg-white"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </div>
              <div className="relative">
                <input
                  className="p-2 rounded-xl border w-full bg-white"
                  type="password"
                  name="password"
                  placeholder="Confim Password"
                />
              </div>
              <button
                onClick={handleLogin}
                className="bg-[#464645] rounded-xl text-white py-2 hover:scale-105 duration-300"
              >
                Sign up
              </button>
            </form>
            <div className="mt-3 text-xs flex justify-between items-center text-secondary">
              <p>Already have an account? <Link  className="px-1" to="/login">Login</Link></p>
             
            </div>
          </div>
          {/* image */}
          <div className=" bg-[#f5f4f4]  p-4 rounded-2xl h-full ">
            <div className="flex flex-col gap-24 items-center justify-center h-full ">
              <div className="flex flex-row gap-5 items-center justify-center">
              <img src="crwd.png" className="w-[150px] mt-10" />
                {/* <div className="text-[49px]">RWD</div> */}
              </div>
              <Lottie
                className="w-[100%] h-[233px] "
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
