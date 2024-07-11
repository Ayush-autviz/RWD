import Lottie from "lottie-react";
import signup from "../assets/signup.json";
import { Link, useNavigate } from "react-router-dom";

export default function SignUpComponentNP() {
  const handleLogin = () => {
    localStorage.setItem("isAuthenticated", "donar");
    navigate("/verification", (state = { tab: "npo" }));
  };
  const navigate = useNavigate();
  return (
    <>
      <section className="bg-gray-50 md:w-fit md:mx-auto mx-4">
        {/* login container */}
        <div className="my-5 flex flex-col-reverse  bg-white rounded-2xl shadow-lg w-[100%] md:w-[550px]  md:p-8 p-4  items-center h-fit">
          {/* form */}
          <div className="w-[100%]  p-2 ">
            <h2 className="font-bold text-2xl text-secondary text-center pb-2">
              Sign up
            </h2>
            <p className="text-xs  text-secondary text-center font-poppins  pb-4">
              Create your account if you are passionate about your cause
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
                  className="p-2 py-4 rounded-xl border text-sm w-full bg-white"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </div>
              <div className="relative">
                <input
                  className="p-2 py-4 rounded-xl border text-sm w-full bg-white"
                  type="password"
                  name="confirmpassword"
                  placeholder="Confim Password"
                />
              </div>
              <div className="relative">
                <input
                  className="p-2 py-4 rounded-xl border text-sm w-full bg-white"
                  name="code"
                  type="text"
                  placeholder="Cause code"
                />
              </div>
              <button
                onClick={handleLogin}
                className="bg-[#464645] rounded-xl text-white py-4 hover:scale-105 duration-300"
              >
                Sign up
              </button>
            </form>
            <div className="mt-3 text-xs flex justify-center items-center text-secondary text-center">
              <p>
                Already have an account?{" "}
                <Link
                  className="font-bold underline cursor-pointer hover:scale-105 px-1"
                  state={{ tab: "npo" }}
                  to="/login"
                >
                  Login
                </Link>
              </p>
            </div>
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
