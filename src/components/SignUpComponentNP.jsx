import Lottie from "lottie-react";
import signup from '../assets/signup.json'
import { useNavigate } from "react-router-dom";

export default function SignUpComponentNP() {
  const handleLogin = () => {
    localStorage.setItem('isAuthenticated', 'donar');
    navigate('/');
  };
  const navigate = useNavigate();
  return (<>
<section className="bg-[#FBFBFB] min-h-screen flex items-center justify-center">
  {/* login container */}
  <div className="bg-[#FBFBFB] flex rounded-2xl shadow-custom-1 max-w-3xl p-5 items-center">
    {/* form */}
    <div className="md:w-1/2 px-8 md:px-16">
      <h2 className="font-bold text-2xl text-secondary">Register</h2>
      <p className="text-xs mt-4 text-secondary">
        Create your account if you are passionate about your cause
      </p>
      <form action="" className="flex flex-col gap-4">
        <input
          className="p-2 mt-8 rounded-xl border"
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
        </div>
        <div className="relative">
          <input
            className="p-2 rounded-xl border w-full"
            type="password"
            name="confirmpassword"
            placeholder="Confim Password"
          />

        </div>
        <div className="relative">
          <input
            className="p-2 rounded-xl border w-full"
           
            name="code"
             type="text"
            placeholder="Cause code"
          />

        </div>
        <button onClick={handleLogin} className="bg-[#464645] rounded-xl text-white py-2 hover:scale-105 duration-300">
          Register
        </button>
      </form>
      <div className="mt-3 text-xs flex justify-between items-center text-secondary">
        <p>Already have an account?</p>
        <button onClick={()=>{navigate('/loginNP')}} className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">
          Login
        </button>
      </div>
    </div>
    {/* image */}
    <div className="md:block hidden bg-[#e9e9e9] p-14 rounded-2xl h-full ">
      
      <div className="flex flex-col gap-24 items-center justify-center h-full ">
      <div className="flex flex-row gap-5 items-center justify-center">
      <img src="logo.svg"/>
      <div className="text-[49px]">RWD</div>
      </div>
    <Lottie className='w-[220px] h-[233px] ' animationData={signup} loop={true} />
    </div>
  </div>
  </div>
</section>
    </>
  );
}