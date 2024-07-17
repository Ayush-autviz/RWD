import { Button, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {  useNavigate } from 'react-router-dom';
import UnsubscribeModal from './UnsubscribeModal';
import { useState } from 'react';
import { useActivation } from '../context/DonationContext';

export default function Dropdown() {
  const [unsubscribe,setUnsubscribe] = useState(false);
  const {activated , setActivated } = useActivation();
  const navigate = useNavigate();

  return (
    <>
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="">
        <img className="" src="Group 18.svg"/>
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute overflow-hidden right-0 z-10 mt-2 w-56 origin-top-right rounded-[10px] bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="">
          { activated &&
          <MenuItem>
            <button 
               onClick={()=>{setUnsubscribe(true)}}
              className="block w-full px-4 py-2 text-sm text-left text-gray-700 focus:outline-none data-[focus]:bg-[#dddddd24] data-[focus]:text-gray-900"
            >
              Unsubscribe
            </button>
          </MenuItem>
          }
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-[#dddddd24] data-[focus]:text-gray-900"
            >
              Support
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-[#dddddd24] data-[focus]:text-gray-900"
            >
              License
            </a>
          </MenuItem>

            <MenuItem>
              <button
                onClick={()=>{ localStorage.removeItem('isAuthenticated');
                  navigate('/login');}}
                className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-[#dddddd24] data-[focus]:text-gray-900"
              >
                Sign out
              </button>
            </MenuItem>
         
        </div>
      </MenuItems>
    </Menu>
    <UnsubscribeModal open={unsubscribe} setOpen={setUnsubscribe}/>
    </>
  )
}
