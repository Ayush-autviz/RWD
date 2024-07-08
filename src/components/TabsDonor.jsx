
import { CogIcon, CreditCardIcon, OfficeBuildingIcon, UserIcon, UsersIcon } from '@heroicons/react/solid'
import { useState } from 'react'
import Settings from './Settings'
import EditProfileDonor from './EditProfileDonor'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function TabsDonor() {

    const [tabs,setTabs] = useState([
        { name: 'Edit Profile', href: '#', icon: UserIcon, current: true },
        { name: 'Your Settings', href: '#', icon: CogIcon, current: false},
      ])

    const handleTabClick = (clickedTab) => {
        console.log('hello');
        setTabs(tabs.map(tab => ({
          ...tab,
          current: tab.name === clickedTab.name
        })))
      }

  return (
    <div className='md:mx-10 flex flex-col gap-10'>
      <div className="  sm:block">
        <div className="border-b border-[#393939]">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {tabs.map((tab) => (
              <div onClick={()=>{handleTabClick(tab)}}
                key={tab.name}
                className={classNames(
                  tab.current
                    ? 'border-[#4db510] text-[#4db510]'
                    : 'border-transparent text-secondary hover:text-green-300 hover:border-green-300 ',
                  'group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm'
                )}
                aria-current={tab.current ? 'page' : undefined}
              >
                <tab.icon
                  className={classNames(
                    tab.current ? 'text-[#4db510]' : 'text-secondary group-hover:text-green-300',
                    '-ml-0.5 mr-2 h-5 w-5'
                  )}
                  aria-hidden="true"
                />
                <span>{tab.name}</span>
              </div>
            ))}
          </nav>
        </div>
      </div>

      {tabs[1].current && (<Settings/>) }
      {tabs[0].current && (<EditProfileDonor/>) }

    </div>
  )
}
