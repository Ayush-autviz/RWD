import React from 'react'

const ChangePassword = () => {
  return (
               <div className='md:w-1/2 mx-auto mt-7'>
            <div className='w-full flex items-center justify-end'>
            <p className="text-xs    mb-2 text-secondary">
        Forget Password?
      </p>
      </div>
          <div className="relative">
           
          <input
            className="p-2 rounded-xl border w-full"
            type="password"
            name="password"
            placeholder="Current Password"
          />
        </div>

        <div className="relative my-4">
          <input
            className="p-2 rounded-xl border w-full"
            type="password"
            name="password"
            placeholder="New Password"
          />

        </div>
        <div className="relative">
          <input
            className="p-2 rounded-xl border w-full"
            type="password"
            name="password"
            placeholder="Confirm Password"
          />

        </div>
        <button
              
              className="bg-[#464645] mt-4 rounded-xl text-white py-2 w-full  hover:scale-105 duration-300"
            >
              Update
            </button>
        </div> 
  )
}

export default ChangePassword