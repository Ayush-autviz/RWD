import { useEffect, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import Lottie from "lottie-react";
import suc  from '../assets/suc.json'
import { ExclamationIcon, XIcon } from '@heroicons/react/outline'
import { useActivation } from "../context/DonationContext";

export default function Modal({open , setOpen}) {
  // const [open, setOpen] = useState(true);
  const [card,setCard] = useState(false);
  const [success,setSuccess] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const {activated , setActivated } = useActivation();

  const handleClose = () => {
    setOpen(false);
    setCard(false);
    setTimeout(() => {
      setSuccess(false);
    }, 3000); 
  };

  useEffect(()=>{
     setSuccess(false);
     setCard(false);
  },[])


  const handleInputChange = (e) => {
      const value = e.target.value.replace(/\D/g, ''); // Remove all non-digit characters
      const limitedValue = value.slice(0, 16); // Limit to 16 digits
      const formattedValue = limitedValue.replace(/(\d{4})(?=\d)/g, '$1 '); // Add space after every 4 digits
      setCardNumber(formattedValue);
    };

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-300 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative p-6 transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
                          <div className=" absolute top-0 right-0 pt-4 pr-4">
                <button
                  type="button"
                  className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none "
                  onClick={() => {handleClose()}}
                >
                  <span className="sr-only">Close</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
{  (card && !success) &&  <div onClick={()=>{setCard(false)}} className=" cursor-pointer absolute top-0 left-0 pt-4 pl-4">
      <div  className="w-full flex gap-2 items-center justify-start">
        <img src='back.png' className="w-[15px] h-[15px]"/>
        <div className="font-bold text-[15px]">Back</div>
      </div>
      </div>}

           { !success &&
            <div className="bg-white px-4 pb-4 pt-5 ">
              <div className="">
                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full ">
                  <img
                    src="donor-unsplash.jpg"
                    className="h-12 w-12 rounded-full"
                  />
                </div>
                <div className="mt-3 text-center  ">
                  <DialogTitle
                    as="h3"
                    className="text-secondary center font-poppins md:text-[25px] md:font-bold text-[16px] font-semibold leading-[30px]"
                  >
                    Grocery Spot
                  </DialogTitle>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      This is a recurring donation of $5 per month. Cancel
                      anytime.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            }

          { success &&
           <div>
            <div className=" text-center  ">
              <div className="flex justify-center items-center">
            <Lottie className="w-[280px] h-[100px] " animationData={suc} loop={true} />
            </div>
                  <DialogTitle
                    as="h3"
                    className="text-secondary center font-poppins md:text-[25px] md:font-bold text-[16px] font-semibold leading-[30px]"
                  >
                    Thank you for donating, Luke
                  </DialogTitle>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500 pb-[22px]">
                      You have activated your donar profile. Share this cause with friends
                    </p>
                  </div>
                </div>
            </div>
            }


            <div className=" px-4 py-2  ">
{ (!card && !success) && <>           
              <div className=" text-xs flex justify-between items-center text-secondary">
                <button onClick={()=>{setSuccess(true),setActivated(true)}} className="bg-[#464645] flex justify-center items-center gap-2  rounded-xl text-white py-4 w-full  hover:scale-105 duration-300">
                  <svg
                    data-tag="IconBrandApple"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="20px"
                  >
                    <path
                      d="M16.161 2c.13 1.172-.343 2.348-1.043 3.194-.7.844-1.85 1.502-2.975 1.415-.155-1.148.414-2.345 1.063-3.093.725-.845 1.946-1.476 2.955-1.516m3.641 6.826c-.183.112-2.181 1.328-2.159 3.8.027 2.986 2.594 4.006 2.69 4.045h.003l-.003.013c-.048.154-.453 1.472-1.385 2.832-.837 1.218-1.704 2.432-3.071 2.458-.657.012-1.096-.178-1.552-.375-.478-.206-.975-.42-1.76-.42-.822 0-1.342.22-1.843.433-.434.184-.854.363-1.444.386-1.32.05-2.324-1.317-3.168-2.53C4.388 16.983 3.07 12.45 4.84 9.39c.877-1.52 2.446-2.482 4.15-2.507.735-.014 1.446.267 2.07.513.475.188.898.356 1.24.356.308 0 .72-.162 1.201-.351.758-.298 1.685-.662 2.64-.566.655.028 2.49.264 3.67 1.984z"
                      fill="white"
                    ></path>
                  </svg>
                  <div>Pay</div>
                </button>
              </div>
              <div className="mt-6 flex  justify-center gap-2 items-center text-gray-400">
              <hr className="border-gray-400 w-[50px]" />
              <p className="text-center text-sm">OR</p>
              <hr className="border-gray-400 w-[50px]" />
            </div>
              <p onClick={()=>{setCard(true)}} className=" text-secondary text-center my-2">
        <span className="font-semibold  cursor-pointer hover:underline">Manually enter card details </span>
      </p>
      </> }

      {
        (card && !success )&& <>
    <div className="flex flex-col gap-4">
    <div className="relative ">
    <input
        className="p-2   py-3 rounded-xl border w-full bg-white"
        type="text"
        name="cardNumber"
        placeholder="Card Number"
        value={cardNumber}
        onChange={handleInputChange}
      />
     </div>
     <div className="relative flex flex-row gap-4 ">
       <input
         className="p-2   py-3 rounded-xl border w-full bg-white"
         type="number"
         name="email"
         placeholder="MM"
       />
       <input
         className="p-2   py-3 rounded-xl border w-full bg-white"
         type="number"
         name="email"
         placeholder="YY"
       />
        <input
         className="p-2   py-3 rounded-xl border w-full bg-white"
         type="text"
         name="text"
         placeholder="CVV"
       />
     </div>
     <div className="relative">
       <input
         className="p-2   py-3 rounded-xl border w-full bg-white"
         type="text"
         name="First Name"
         placeholder="First Name"
       />
     </div>
     <div className="relative">
       <input
         className="p-2   py-3 rounded-xl border w-full bg-white"
         type="text"
         name="Last Name"
         placeholder="Last Name"
       />
     </div>
     <button
              onClick={()=>{setSuccess(true),setActivated(true)}}
                className="bg-[#464645]  rounded-xl text-white py-3 w-full  hover:scale-105 duration-300"
              >
                Donate
              </button>
              </div>
        </>
      }


      { success && 
     <button
              
     className="bg-[#464645]  rounded-xl text-white py-3 w-full  hover:scale-105 duration-300"
   >
     Share
   </button>
      }
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
