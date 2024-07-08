import Lottie from "lottie-react";
import login from '../assets/login.json'
import { useState } from "react";
import Select from "react-tailwindcss-select";
import { useNavigate } from "react-router-dom";

const options = [
    { value: "fox", label: "🦊 Fox" },
    { value: "Butterfly", label: "🦋 Butterfly" },
    { value: "Honeybee", label: "🐝 Honeybee" }
];

export default function LoginComponentNP() {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem('isAuthenticated', 'donar');
    navigate('/');
  };

  const [animal, setAnimal] = useState(null);

  const handleRegister = ()=>{
    navigate('/signupNP');
  }

  const handleChange = value => {
    console.log("value:", value);
    setAnimal(value);
};
    return (
      <>
<section className="bg-gray-50  min-h-screen flex  items-center justify-center">
  {/* login container */}
  <div className="bg-gray-100 my-5 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center relative">
    {/* form */}
    <div className="md:w-[60%] px-8 md:px-16">
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            fill="gray"
            className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2"
            viewBox="0 0 16 16"
          >
            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
          </svg>
        </div>

        <button onClick={handleLogin} className="bg-[#464645]  rounded-xl text-white py-2 hover:scale-105 duration-300">
          Login
        </button>
      </form>
      <div className="mt-0 text-xs border-b border-[#002D74] py-4 text-secondary">
        <a href="#">Forgot your password?</a>
      </div>
      <div className="mt-3 text-xs flex justify-between items-center text-secondary">
        <p>Don't have an account?</p>
        <button onClick={handleRegister} className="py-2 px-5 ml-1 bg-white border rounded-xl hover:scale-110 duration-300">
          Register
        </button>
      </div>
      <p onClick={()=>{navigate('/login')}} className="p-3  rounded-2xl mt-4 bg-red-200 text-xs flex justify-center items-center text-secondary hover:scale-105 duration-300">
    Or go to Donor login
     </p>
    </div>
    {/* image */}
    <div className="md:block hidden bg-[#e9e9e9] p-14 rounded-2xl h-full ">
      
      <div className="flex flex-col gap-24 items-center justify-center h-full ">
      <div className="flex flex-row gap-5 items-center justify-center">
      <img src="logo.svg"/>
      <div className="text-[49px]">RWD</div>
      </div>
    <Lottie className='w-[100%] h-[233px] ' animationData={login} loop={true} />
    </div>
{/* <div className="bg-slate-200 w-[380px] h-screen flex">

</div> */}
    </div>

  </div>

</section>

      </>
    )
  }