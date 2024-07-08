import React from 'react'

const EditProfile = () => {
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
          <div className='mb-2'>Non profit Name </div>
           
          <input
            className="p-2 rounded-xl border w-full"
            type="text"
            name="name"
            placeholder="Non-profit Name"
          />
        </div>

        <div className="relative my-4">
        <div className='mb-2'>Your dontaion will provide</div>
          <textarea
            className="p-2 rounded-xl border w-full"
            type="text"
            name="donation"
            placeholder="Your dontaion will provide"
          />

        </div>
        <div className="relative my-4">
        <div className='mb-2'>Your dontaion will provide</div>
          <textarea
            className="p-2 rounded-xl border w-full"
            type="text"
            name="mission"
            placeholder="Our mission is"
          />
        </div>
        <div className="relative my-4">
        <div className='mb-2'>Running stats</div>
          <textarea
            className="p-2 rounded-xl border w-full"
            type="text"
            name="stats"
            placeholder="Running stats"
          />
        </div>
        <div className="relative my-4">
        <div className='mb-2'>Our highlights</div>
          <textarea
            className="p-2 rounded-xl border w-full"
            type="text"
            name="highlights"
            placeholder="Our highlights"
          />
        </div>
        <div className="relative my-4">
        <div className='mb-2'>Year Founded</div>
          <input
            className="p-2 rounded-xl border w-full"
            type="text"
            name="founded"
            placeholder="Year Founded"
          />

        </div>
        <div className="relative my-4">
        <div className='mb-2'>You can find us here</div>
          <input
            className="p-2 rounded-xl border w-full"
            type="text"
            name="founded"
            placeholder="You can find us here"
          />

        </div>
        </div> 
    </div>
  )
}

export default EditProfile