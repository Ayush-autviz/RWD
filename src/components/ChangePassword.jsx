import React from 'react'

const ChangePassword = () => {
  return (
               <div className='md:w-1/2'>
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
        </div> 
  )
}

export default ChangePassword