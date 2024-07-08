import React from 'react'

const EditProfileDonor = () => {
  return (
    <div>
            <div className="flex items-center   relative w-fit">
              <img
                className=" w-[82px] h-[82px] rounded-full  "
                src="Rectangle 5.svg"
              />
              <div className='underline ml-8 cursor-pointer  '>
               Edit image
             </div>
            </div>
            <div className='md:w-1/2'>
            <div className='w-full flex items-center justify-end'>

      </div>
        <div className="relative my-4">
          <div className='mb-2'>Your Name</div>
           
          <input
            className="p-2 rounded-xl border w-full"
            type="text"
            name="name"
            placeholder="Your Name"
          />
        </div>

        <div className="relative my-4">
        <div className='mb-2'>Causes i am passionate about</div>
          <textarea
            className="p-2 rounded-xl border w-full"
            type="text"
            name="donation"
            placeholder="Causes i am passionate about"
          />

        </div>
        <div className="relative my-4">
        <div className='mb-2'>My charity goals</div>
          <textarea
            className="p-2 rounded-xl border w-full"
            type="text"
            name="mission"
            placeholder="My charity goals"
          />
        </div>
        <div className="relative my-4">
        <div className='mb-2'>Fun facts</div>
          <textarea
            className="p-2 rounded-xl border w-full"
            type="text"
            name="stats"
            placeholder="Fun facts"
          />
        </div>
        </div> 
    </div>
  )
}

export default EditProfileDonor