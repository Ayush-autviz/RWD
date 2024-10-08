import Lottie from 'lottie-react'
import React from 'react'
import donation from '../assets/donation.json'
import maingif from '../assets/maingif.json'
import { useActivation } from '../context/DonationContext'

const DonateNowCard = ({open,setOpen}) => {
  const {activated , setActivated } = useActivation();
  return (
    <div className='flex justify-between items-center flex-col bg-white  lg:flex-row shadow-custom-1 px-[30px] py-[30px]  md:py-[50px] rounded-[10px] relative overflow-hidden '>
    <img src='Ellipse2.svg' className='absolute bottom-0 left-0 '/>
    <div className='lg:order-1 order-2'>
     <div className='text-secondary center lg:text-left text-center font-poppins md:text-[25px] md:font-bold text-[16px] font-semibold leading-[30px]'>
     Your donation will provide
     </div>
     <div className='text-secondary center lg:text-left text-center font-poppins md:text-[16px] md:font-normal text-[25px] font-bold  mt-2'>
     Free groceries for local families experiencing food insecurity
     </div>
{ !activated &&
    <div onClick={()=>{setOpen(true)}} className='relative z-[3] center xl:left hidden lg:flex rounded-[5px] cursor-pointer mt-5 w-fit  bg-[#464645] hover:bg-[#2a2a29] duration-200 px-[20px] py-[13px]  flex-row gap-2 items-center justify-center'>
        <img className='h-6 w-6' src='donation-1.gif'/>
        <div className='text-white  font-poppins text-[14px] font-semibold'>
        Donate Now
        </div>
    </div>
    }
    </div>
    <div className='mx-auto   lg:mr-0 md:mt-0 hidden lg:order-1 order-2  md:block lg:relative z-[4]'>
     <img className='w-[260px] h-[150px]  mt-3 lg:mt-0 object-cover rounded-full' src='foody.png'/>

     {/* <Lottie className='w-[220px] h-[233px]  ml-4 mt-[-40px] bg-red ' animationData={maingif} loop={true} /> */}

    </div>
    {/* <div className='flex w-full center xl:left rounded-[5px] lg:hidden cursor-pointer mt-5 order-3  bg-[#464645] hover:bg-[#2a2a29] duration-200 px-[20px] py-[13px]  flex-row gap-2 items-center justify-center'>
         <img className='h-6 w-6' src='donation-1.gif'/>
         <div className='text-white font-poppins text-[14px] font-semibold'>
         Donate Now 
         </div>
     </div>
     */}
</div>
  )
}

export default DonateNowCard