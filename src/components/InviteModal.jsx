import { useEffect, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import {  XIcon } from '@heroicons/react/outline'


export default function InviteModal({open , setOpen}) {
 
  const handleClose = () => {
    setOpen(false);
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
        
            <div className="bg-white px-4 pb-4 pt-5 ">
              <div className="">
                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full ">
                  <img
                    src="https://pagedone.io/asset/uploads/1710226776.png"
                    className="h-12 w-12 rounded-full"
                  />
                </div>
                <div className="mt-3 text-center  ">
                  <DialogTitle
                    as="h3"
                    className="text-secondary cursor-pointer center font-poppins md:text-[25px] md:font-bold text-[16px]  hover:underline font-semibold leading-[30px]"
                    onClick={() => {handleClose()}}
                  >
                    Mia Thompson
                  </DialogTitle>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                    Invited you to help make a difference 
                    </p>
                  </div>
                  {/* <div className="mt-2">
                    <p className="text-sm text-gray-500">
                    Welcome aboard!
                    </p>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="justify-center items-center w-full flex">
                <img className="h-8 w-9 object-fill" src='handh.png'/>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
