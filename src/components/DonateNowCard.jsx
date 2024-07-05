import Lottie from 'lottie-react'
import React from 'react'
import donation from '../assets/donation.json'
import maingif from '../assets/maingif.json'

const DonateNowCard = () => {
  return (
    <div className='flex justify-between flex-col  lg:flex-row shadow-custom-1 px-[30px] py-[30px]  md:py-[50px] rounded-[10px] relative overflow-hidden '>
    <img src='Ellipse2.svg' className='absolute bottom-0 left-0 z-[-1] '/>
    <div className='lg:order-1 order-2'>
     <div className='text-secondary center xl:text-left text-center font-poppins text-[25px] font-semibold leading-[30px]'>
     Your donation will provide
     </div>
     <div className='text-secondary center xl-text-left text-center font-poppins text-[16px] font-normal mt-2'>
     Free groceries for local families experiencing food insecurity
     </div>
     <div className='flex center xl:left rounded-[5px] cursor-pointer mt-5 xl:w-fit  bg-[#464645] hover:bg-[#2a2a29] duration-200 px-[20px] py-[13px]  flex-row gap-2 items-center justify-center'>
         <img className='h-6 w-6' src='donation-1.gif'/>
         <div className='text-white font-poppins text-[14px] font-semibold'>
         Donate Now
         </div>
     </div>
    </div>
    <div className='mx-auto pt-3 xl:mr-0 md:mt-0 hidden lg:order-1 order-2 mb-[-50px] md:block lg:relative z-[-10]'>
     {/* <img src='char.svg'/> */}
  
     <Lottie className='w-[220px] h-[233px] ml-4 mt-[-40px] bg-red ' animationData={maingif} loop={true} />
    
    </div>
    
 </div>
  )
}

export default DonateNowCard