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

export default function UnsubscribeModal({open , setOpen}) {
  // const [open, setOpen] = useState(true);
  const [success,setSuccess] = useState(false);

  const {activated , setActivated } = useActivation();

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
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
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
                    className="text-base font-semibold leading-6 text-gray-900"
                  >
                    Grocery Spot
                  </DialogTitle>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                     Are you sure?
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#FBFBFB] px-4 py-3 border  ">
      <>

        <button  onClick={()=>{setActivated(false)}}
              className="bg-[#464645]  rounded-xl text-white py-3 w-full  hover:scale-105 duration-300"
            >
             Unsubscribe
        </button>
      </>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
