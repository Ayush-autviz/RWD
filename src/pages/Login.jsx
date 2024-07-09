import React, { useState } from 'react'
import LoginComponent from '../components/LoginComponent'
import LoginComponentNP from '../components/LoginComponentNP'
import { useLocation } from 'react-router-dom'


const tabs = [
  { name: 'Donor', href: '#', id: 'donor' },
  { name: 'NPO', href: '#', id: 'npo' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Login = () => {
  const location = useLocation();
  console.log(location);
  const [selectedTab, setSelectedTab] = useState(location?.state?.tab || 'donor')

  return (
    <div className='bg-gray-50'>
      <div className="flex justify-center items-center ">
        <nav className="flex space-x-4 bg-red-100 rounded-xl p-2" aria-label="Tabs">
          {tabs.map((tab) => (
            <a
              key={tab.id}
              href={tab.href}
              onClick={() => setSelectedTab(tab.id)}
              className={classNames(
                selectedTab === tab.id ? 'bg-gray-100 text-gray-700' : 'text-gray-500 hover:text-gray-700',
                'px-3 py-2 font-medium text-sm rounded-md'
              )}
              aria-current={selectedTab === tab.id ? 'page' : undefined}
            >
              {tab.name}
            </a>
          ))}
        </nav>
      </div>
    
      {selectedTab === 'npo' ? <LoginComponentNP/> : <LoginComponent />}
    </div>
  )
}

export default Login
