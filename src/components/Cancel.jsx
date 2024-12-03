
import { useState } from 'react'
import CancelSubscriptionModal from './CancelSubscriptionModal'
import Lottie from 'lottie-react'


export default function Cancel
() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div >
            <div
              className="cursor-pointer rounded-[5px] mt-5 w-full  bg-black hover:bg-[#2e2e2e
] duration-200 px-[12px] py-[13px] flex flex-row md:flex-col lg:flex-row gap-2 items-center justify-center"
onClick={() => setIsModalOpen(true)}
            >
   
              <div className="text-white font-poppins text-[14px] text-center font-semibold">
                Unsubscribe
              </div>
            </div>
      {isModalOpen && (
        <CancelSubscriptionModal
          onClose={() => setIsModalOpen(false)}
          onSave={() => {
            console.log('Changes saved')
            setIsModalOpen(false)
          }}
        />
      )}
    </div>
  )
}

