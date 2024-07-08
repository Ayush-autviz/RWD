import Lottie from "lottie-react";
import signup from '../assets/signup.json'

export default function VerificationScreen() {
  return (<>
<section className="bg-[#FBFBFB] min-h-screen flex items-center justify-center">
  {/* login container */}
  <div className="bg-[#FBFBFB] flex rounded-2xl shadow-custom-1  p-5 items-center">
    {/* form */}
    <div className="md:w-3/2 px-8 md:px-16">
      <h2 className="font-bold text-2xl text-secondary">Verify your email</h2>
      <p className="text-xs mt-4 text-secondary">
        Enter the verification code sent on your email
      </p>
      <form action="" className="flex flex-col gap-4 mt-4">
        <div className="relative">
          <input
            className="p-2 rounded-xl border w-full"
           
            name="code"
             type="number"
            placeholder="Verification code"
          />

        </div>

      </form>
      <div className="mt-3 text-xs flex justify-between items-center text-secondary">
      <p className="text-xs  text-secondary">
       Didn't receive it? <span className="font-bold underline cursor-pointer hover:scale-105">Resend</span>
      </p>
        <button className="py-2 px-5 bg-[#464645]  text-white border rounded-xl hover:scale-110 duration-300">
          Next
        </button>
      </div>
    </div>
  </div>
</section>
    </>
  );
}