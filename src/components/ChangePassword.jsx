import React from 'react'

const ChangePassword = () => {
  return (
               <div className='md:w-1/2 mx-auto mt-7'>
            <div className='w-full flex items-center justify-end'>
            <p className="text-xs underline font-semibold   mb-2 text-secondary">
        Forget Password?
      </p>
      </div>
          <div className="relative">
           
          <input
            className="p-2   py-4 rounded-xl border w-full bg-white"
            type="password"
            name="password"
            placeholder="Current Password"
          />
        </div>

        <div className="relative my-4">
          <input
            className="p-2   py-4 rounded-xl border w-full bg-white"
            type="password"
            name="password"
            placeholder="New Password"
          />

        </div>
        <div className="relative">
          <input
            className="p-2   py-4 rounded-xl border w-full bg-white"
            type="password"
            name="password"
            placeholder="Confirm Password"
          />

        </div>
        <button
               onClick={()=>{navigate('/login')}}
              className="bg-[#464645] mt-4 rounded-xl text-white py-4 w-full  hover:scale-105 duration-300"
            >
              Update
            </button>
        </div> 
  )
}

export default ChangePassword