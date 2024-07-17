import React from 'react'
import nodata from '../assets/nodata.json'
import Lottie from 'lottie-react'

const NotFound = () => {
  return (
    <div className='flex flex-col gap-10 items-center justify-center mb-24 md:mb-0'>
        <Lottie className='w-[220px] h-[220px]' animationData={nodata} loop={true} />
        <div className='font-semibold text-center text-gray-400 text-[18px]'>
              We couldn't find any result for your search.
        </div>
    </div>
  )
}

export default NotFound