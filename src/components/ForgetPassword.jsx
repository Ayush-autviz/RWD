import Lottie from "lottie-react";
import signup from '../assets/signup.json'
import { useLocation, useNavigate } from "react-router-dom";

export default function ForgetPassword() {
  const location = useLocation();
  console.log(location,'location');
  const navigate = useNavigate();

  return (<>
<section className="bg-[#FBFBFB]  min-h-screen  flex items-center justify-center">
  {/* login container */}
  <div className="my-5  bg-white rounded-2xl mx-3 shadow-lg w-[100%] md:w-[500px]  md:p-8 p-2  items-center h-fit">
    {/* form */}
    <div className="">
      <h2 className="font-bold text-2xl text-secondary text-center pb-2">Reset Password</h2>
      <p className="text-xs  text-secondary text-center font-poppins  pb-4">
        Enter the new password for account: <span className="font-semibold">xyz@gmail.com</span>
      </p>
      <form action="" className="flex flex-col gap-4">
        <div className="relative">
          <input
            className="p-2 py-4 rounded-xl border w-full text-sm  bg-white"

            name="code"
             type="password"
            placeholder="New Password"
          />

        </div>
        <div className="relative">
          <input
            className="p-2 py-4 rounded-xl border w-full text-sm  bg-white"

            name="code"
             type="password"
            placeholder="Confirm Password"
          />

        </div>

      </form>
      <div className="mt-3 text-xs flex flex-col gap-3 justify-between items-center text-secondary">
      <button
               onClick={()=>{navigate('/login')}}
                className="bg-[#464645]  rounded-xl text-white py-4 w-full  hover:scale-105 duration-300"
              >
               Reset Password
              </button>

      </div>
    </div>
  </div>
</section>
    </>
  );
}
 