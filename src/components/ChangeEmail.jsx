import React from 'react'

const ChangeEmail = () => {
  return (
    <div className='md:w-1/2 mx-auto mt-7'>

    <div className="relative">
  <p className="text-xs ml-2   mb-2 text-secondary">
    xyz@gmail.com
  </p>
       <input
         className="p-2 rounded-xl border w-full"
         type="email"
         name="email"
         placeholder="New email"
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

export default ChangeEmail