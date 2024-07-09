import Lottie from "lottie-react";
import signup from '../assets/signup.json'
import { useLocation, useNavigate } from "react-router-dom";

export default function VerificationScreen() {
  const location = useLocation();
  const navigate = useNavigate();
  const handleNext = ()=>{
    if(location?.state?.tab==='donor'){
         navigate('/categoryNP');
    }else{
      navigate('/categoryDonor');
    }
  }
  return (<>
<section className="bg-[#FBFBFB] min-h-screen flex items-center justify-center">
  {/* login container */}
  <div className="my-5  bg-white rounded-2xl shadow-lg w-[100%] md:w-[500px]  md:p-8 p-2  items-center h-fit">
    {/* form */}
    <div className="">
      <h2 className="font-bold text-2xl text-secondary text-center pb-2">Verify your email</h2>
      <p className="text-xs  text-secondary text-center font-poppins  pb-4">
        Enter the verification code sent on your email
      </p>
      <form action="" className="flex flex-col gap-4">
        <div className="relative">
          <input
            className="p-2 py-4 rounded-xl border w-full text-sm  bg-white"

            name="code"
             type="number"
            placeholder="Verification code"
          />

        </div>

      </form>
      <div className="mt-3 text-xs flex flex-col gap-3 justify-between items-center text-secondary">
      <p className="text-xs  text-secondary">
       Didn't receive it? <span className="font-bold underline cursor-pointer hover:scale-105">Resend</span>
      </p>
      <button
                onClick={handleNext}
                className="bg-[#464645]  rounded-xl text-white py-4 w-full  hover:scale-105 duration-300"
              >
               Next
              </button>

      </div>
    </div>
  </div>
</section>
    </>
  );
}
 