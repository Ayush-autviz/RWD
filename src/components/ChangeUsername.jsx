import React from 'react'

const ChangeUsername = () => {
  return (
    <div className='md:w-1/2'>

    <div className="relative">
  <p className="text-xs ml-2   mb-2 text-secondary">
    xyz123
  </p>
       <input
         className="p-2 rounded-xl border w-full"
         type="text"
         name="username"
         placeholder="New Username"
       />
     </div>
    </div>
  )
}

export default ChangeUsername