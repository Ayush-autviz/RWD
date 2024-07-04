import React from 'react'

const DonateNowCard = () => {
  return (
    <div className='flex justify-between flex-col md:flex-row shadow-custom-1 px-[30px] py-[30px]  md:py-[50px] rounded-[10px]  '>
    <div>
     <div className='text-secondary md:text-left text-center font-poppins text-[25px] font-semibold leading-[30px]'>
     Your donation will provide
     </div>
     <div className='text-secondary md:text-left text-center font-poppins text-[16px] font-normal mt-2'>
     Free groceries for local families experiencing food insecurity
     </div>
     <div className=' md:flex rounded-[5px] cursor-pointer mt-5 w-fit hidden   bg-[#9300FF] px-[20px] py-[13px]  flex-row gap-2 items-center justify-center'>
         <img className='h-6 w-6 filter-white ' src='box.png'/>
         <div className='text-white font-poppins text-[14px] font-semibold'>
         Donate Now
         </div>
     </div>
    </div>
    <div className='mt-5 mx-auto md:mt-0 '>
     <img src='char.svg'/>
    </div>
    <div className='rounded-[5px] mt-5 cur   md:hidden   bg-[#9300FF] px-[20px] py-[13px] flex flex-row gap-2 items-center justify-center'>
         <img className='h-6 w-6 filter-white ' src='box.png'/>
         <div className='text-white font-poppins text-[14px] font-semibold'>
         Donate Now
         </div>
     </div>
 </div>
  )
}

export default DonateNowCard