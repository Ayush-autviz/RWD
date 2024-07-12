import React from 'react'

const ImpactCard = ({heading , text}) => {
  return (
    <div className='rounded-[10px] py-[19px] mt-[21px] px-[50px] border border-solid border-[#DFDCDC] flex flex-col justify-center items-center gap-1'>
        <div className='text-[18px] font-[400] text-center '>{heading}</div>
        <div className='text-[30px] font-[500] text-center'>{text}</div>
    </div>
  )
}

export default ImpactCard