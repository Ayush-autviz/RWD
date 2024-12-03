
import { useState } from 'react'
import CancelSubscriptionModal from './CancelSubscriptionModal'
import Lottie from 'lottie-react'
import { useActivation } from '../context/DonationContext';


export default function Cancel
({isModalOpen,setIsModalOpen}) {
  //const [isModalOpen, setIsModalOpen] = useState(false)
  const {activated , setActivated } = useActivation();

  return (
    <div >
            {/* <div
              className="cursor-pointer rounded-[5px] mt-5 w-full  bg-black hover:bg-[#2e2e2e
] duration-200 px-[12px] py-[13px] flex flex-row md:flex-col lg:flex-row gap-2 items-center justify-center"
onClick={() => setIsModalOpen(true)}
            >
   
              <div className="text-white font-poppins text-[14px] text-center font-semibold">
                Unsubscribe
              </div>
            </div> */}
      {isModalOpen && (
        <CancelSubscriptionModal
          onClose={() => setIsModalOpen(false)}
          onSave={() => {
            console.log('Changes saved')
            setActivated(false);
            setIsModalOpen(false)
          }}
        />
      )}
    </div>
  )
}

