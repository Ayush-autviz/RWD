import React, { useState } from 'react'
import ChangePassword from './ChangePassword';
import ChangeUsername from './ChangeUsername';
import ChangeEmail from './ChangeEmail';

const Settings = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    }


    const settings = [
      {heading: 'Change Password',component:<ChangePassword/>,arrow:true},
    //  {heading: 'Change Username',component:<ChangeUsername/>,arrow:true},
      {heading: 'Change Email',component:<ChangeEmail/>,arrow:true},
      // {heading: 'Payment Methods',arrow:true},
      {heading: 'Terms of use',arrow:false},
      {heading : 'Privacy Policy',arrow:false}
    ]

    
  return (
    <div className='mb-9'>
      {settings.map((item, index) => (
        <div key={index} className={`collapse bg-base-200 mt-4 ${item.arrow ? 'collapse-arrow' : ''}`}>
  
          <input
            type="checkbox"
            checked={activeIndex === index}
            onChange={() => handleToggle(index)}
            className="hidden"
          />
          <div
            className="collapse-title text-xl font-medium cursor-pointer"
            onClick={() => handleToggle(index)}
          >
            {item.heading}
          </div>
{      item.component &&     
          <div className={`collapse-content ${activeIndex === index ? 'block' : 'hidden'}`}>
             {item.component}
          </div>}
        </div>
      ))}
    </div>
  )
}

export default Settings