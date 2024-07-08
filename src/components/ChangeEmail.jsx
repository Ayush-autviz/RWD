import React from 'react'

const ChangeEmail = () => {
  return (
    <div className='md:w-1/2'>

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
    </div>
  )
}

export default ChangeEmail