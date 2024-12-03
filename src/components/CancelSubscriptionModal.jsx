

import { useState } from 'react'
import { CheckCircle, HeartCrack, X } from 'lucide-react'



export default function CancelSubscriptionModal({
  serviceName = "Acme Pro",
  expiryDate = "December 31, 2024",
  onSave = () => {},
  onClose = () => {}
}) {
  const [stayConnected, setStayConnected] = useState(true)


  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg max-w-md w-full p-10 shadow-2xl space-y-6 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 dark:bg-red-900">
      <HeartCrack className="w-8 h-8 text-red-600 dark:text-red-400" />
    </div>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Subscription Cancelled
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Your support will remain active until <span className="font-semibold">{expiryDate}</span>.
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Stay in the loop</h3>
            <button
              role="switch"
              aria-checked={stayConnected}
              onClick={() => setStayConnected(!stayConnected)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#464645] ${
                stayConnected ? 'bg-[#464645]' : 'bg-gray-200 dark:bg-gray-600'
              }`}
            >
              <span className="sr-only">Stay connected</span>
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  stayConnected ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Receive updates and access free content as a community member.
          </p>
        </div>

        <button
          onClick={onSave}
          className="bg-[#464645]  rounded-xl text-white py-3 w-full  hover:scale-105 duration-300"
        >
          Confirm Changes
        </button>
      </div>
    </div>
  )
}

