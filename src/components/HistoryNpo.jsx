import React from 'react'

const HistoryNpo = () => {
  return (
    <div className='md:w-1/2 mx-auto mt-7 flex flex-col gap-4'>

    <div className='p-3 rounded-[10px] border border-solid flex items-center justify-between border-[#DFDFDF] '>
          <div className='flex flex-row gap-3'>
            <img src='donor-unsplash.jpg' className='w-[45px] p-1 object-cover  h-[45px] rounded-full border border-solid border-[#DFDFDF]' />
            <div className='flex flex-col '>
               <div className='font-semibold text-[16px]'><span className='text-[14px] font-semibold text-gray-400'>You have donated </span>Grocerry Spot</div>
           
               <div className='text-[14px] font-semibold text-gray-400'> $30 on 11 March,2024</div>
           </div>
          </div>
          <div className='flex justify-center items-center'>
          {/* <img src='heart.svg' className='w-[19px] h-[19px]'/>   */}
          <div className='font-bold text-[30px] text-[#4db510]'>$30</div>
          </div>
    </div>

    </div>
  )
}

export default HistoryNpo