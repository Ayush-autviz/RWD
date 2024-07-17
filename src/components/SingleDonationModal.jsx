import { useState } from "react";
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

export default function SingleDonationModal({open , setOpen}) {
  // const [open, setOpen] = useState(true);
  const [donation,setDonation] = useState(5);

  const [success,setSuccess] = useState(false);

  const {activated , setActivated } = useActivation();

  const handleChange = (event) => {
    const value = parseInt(event.target.value, 10);
      setDonation(value);
  };
  


  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-300 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative p-6 transform overflow-hidden rounded-lg bg-white text-left shadow-xl  transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
                          <div className=" absolute top-0 right-0 pt-4 pr-4">
                <button
                  type="button"
                  className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none "
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
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
                    <p className="text-sm text-gray-500 ">
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
            <div className="mt-3 text-center  ">
              <div className="flex justify-center items-center">
            <Lottie className="w-[280px] h-[100px] " animationData={suc} loop={true} />
            </div>
                  <DialogTitle
                    as="h3"
                    className="text-secondary center font-poppins md:text-[25px] md:font-bold text-[16px] font-semibold leading-[30px]"
                  >
                    Thank you for donating, Luke
                  </DialogTitle>
                  <div className="">
                    <p className="text-sm text-gray-500 pb-[22px]">
                     Share this cause with friends
                    </p>
                  </div>
                </div>
            </div>
            }


            <div className=" px-4 py-2  ">
      { !success && <>
        <div className="relative">
          <input
            className="p-2 py-4 rounded-xl border w-full text-sm  bg-white"
             onChange={handleChange}
            name="code"
             type="number"
            value={donation}
          />
        </div>
        <p className="text-sm font-semibold text-right my-2 pb-5 text-gray-500">
           Min $5 USD
        </p>
        <button  onClick={()=>{setSuccess(true)}}
              className="bg-[#464645]  rounded-xl text-white py-3 w-full  hover:scale-105 duration-300"
            >
              Send Donation
        </button>
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
