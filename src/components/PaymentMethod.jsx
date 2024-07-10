import React, { useState } from 'react'

const PaymentMethod = () => {
    const [cardNumber, setCardNumber] = useState('');


    const handleInputChange = (e) => {
        const value = e.target.value.replace(/\D/g, ''); // Remove all non-digit characters
        const limitedValue = value.slice(0, 16); // Limit to 16 digits
        const formattedValue = limitedValue.replace(/(\d{4})(?=\d)/g, '$1 '); // Add space after every 4 digits
        setCardNumber(formattedValue);
      };
  return (
    <div className='md:w-1/2 mx-auto mt-7 flex flex-col gap-4'>

    <div className='p-3 rounded-[10px] border border-solid flex items-center justify-between border-[#DFDFDF] '>
          <div className='flex flex-row gap-3'>
            <img src='visa.svg' className='w-[60px] p-1  h-[45px] rounded-[10px] border border-solid border-[#DFDFDF]' />
            <div className='flex flex-col '>
               <div className='font-semibold text-[16px]'>Visa ending in 7830</div>
               <div className='text-[14px] text-gray-400'>Exp. date 06/24</div>
           </div>
          </div>
          <div>
              <img className='h-[20px] w-[20px] hover:scale-105 ' src='bin.svg'/>
          </div>
    </div>
    <div className='font-semibold text-[16px] my-1'>Add new card</div>
    <div className="relative ">
    <input
        className="p-2   py-4 rounded-xl border w-full bg-white"
        type="text"
        name="cardNumber"
        placeholder="Card Number"
        value={cardNumber}
        onChange={handleInputChange}
      />
     </div>
     <div className="relative flex flex-row gap-4 ">
       <input
         className="p-2   py-4 rounded-xl border w-full bg-white"
         type="number"
         name="email"
         placeholder="MM"
       />
       <input
         className="p-2   py-4 rounded-xl border w-full bg-white"
         type="number"
         name="email"
         placeholder="YY"
       />
        <input
         className="p-2   py-4 rounded-xl border w-full bg-white"
         type="email"
         name="email"
         placeholder="CVV"
       />
     </div>
     <div className="relative">
       <input
         className="p-2   py-4 rounded-xl border w-full bg-white"
         type="text"
         name="First Name"
         placeholder="First Name"
       />
     </div>
     <div className="relative">
       <input
         className="p-2   py-4 rounded-xl border w-full bg-white"
         type="text"
         name="Last Name"
         placeholder="Last Name"
       />
     </div>
     <button
              
                className="bg-[#464645]  rounded-xl text-white py-4 w-full  hover:scale-105 duration-300"
              >
                Add
              </button>
    </div>
  )
}

export default PaymentMethod