
import { useState } from 'react'
import CancelSubscriptionModal from './CancelSubscriptionModal'
import Lottie from 'lottie-react'


export default function Cancel
() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div >
            <div
              className="cursor-pointer rounded-[5px] mt-5 w-full  bg-[#464645] hover:bg-[#2e2e2e
] duration-200 px-[12px] py-[13px] flex flex-row md:flex-col lg:flex-row gap-2 items-center justify-center"
onClick={() => setIsModalOpen(true)}
            >
              <div className="w-[39px] h-[39px] mr-2">
                {/* <Lottie className="" animationData={share} loop={true} /> */}
              </div>
              <div className="text-white font-poppins text-[14px] text-center font-semibold">
                Share this cause
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

