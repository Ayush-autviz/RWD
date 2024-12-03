import React from 'react'
import { X } from 'lucide-react'
import { useNavigate, useNavigation } from 'react-router-dom';



export const mockFollowers = [
    { 
      id: '1', 
      name: 'Alice Johnson', 
      avatar: 'https://i.pravatar.cc/150?img=1', 
      joinDate: '2023-01-15', 
      donationAmount: 250,
      profileUrl: '/users/alice-johnson'
    },
    { 
      id: '2', 
      name: 'Bob Smith', 
      avatar: 'https://i.pravatar.cc/150?img=3', 
      joinDate: '2023-02-28', 
      donationAmount: 100,
      profileUrl: '/users/bob-smith'
    },
    { 
      id: '3', 
      name: 'Charlie Brown', 
      avatar: 'https://i.pravatar.cc/150?img=4', 
      joinDate: '2023-03-10', 
      donationAmount: 500,
      profileUrl: '/users/charlie-brown'
    },
    { 
      id: '4', 
      name: 'Diana Prince', 
      avatar: 'https://i.pravatar.cc/150?img=5', 
      joinDate: '2023-04-05', 
      donationAmount: 150,
      profileUrl: '/users/diana-prince'
    },
    { 
      id: '5', 
      name: 'Ethan Hunt', 
      avatar: 'https://i.pravatar.cc/150?img=8', 
      joinDate: '2023-05-20', 
      donationAmount: 300,
      profileUrl: '/users/ethan-hunt'
    },
    { 
      id: '6', 
      name: 'Fiona Gallagher', 
      avatar: 'https://i.pravatar.cc/150?img=9', 
      joinDate: '2023-06-12', 
      donationAmount: 200,
      profileUrl: '/users/fiona-gallagher'
    },
    { 
      id: '7', 
      name: 'George Lucas', 
      avatar: 'https://i.pravatar.cc/150?img=11', 
      joinDate: '2023-07-04', 
      donationAmount: 1000,
      profileUrl: '/users/george-lucas'
    },
    { 
      id: '8', 
      name: 'Hannah Montana', 
      avatar: 'https://i.pravatar.cc/150?img=16', 
      joinDate: '2023-08-18', 
      donationAmount: 75,
      profileUrl: '/users/hannah-montana'
    },
  ]
  
  
  





  export default function FollowersModal({ isOpen, setIsOpen }) {
    if (!isOpen) return null;
    const navigation = useNavigate();
  
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-2xl w-full max-w-lg relative overflow-hidden">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 z-10"
          >
            <X className="w-5 h-5" />
          </button>
  
          <div className="p-6">
            <div className="relative my-8">
            <div className="text-[22px] font-semibold text-gray-900 mb-4">
            Groccery Spot's Amazing Supporters
            </div>
              <div className="bg-[#464645] text-white rounded-xl p-4 shadow-lg -rotate-2  hover:rotate-0 transform transition-transform">
                <div className="flex justify-between items-start mb-2">
                <div className="text-sm text-white">
                Contributors
                </div>
                  <div className="bg-green-500/50 rounded-full p-1">
                    <div className="w-3 h-3 rounded-full bg-white" />
                  </div>
                </div>
                <div className="text-2xl font-bold mb-1">
                  1K
                </div>
                <div className="text-sm text-white">
                  +12% from last month
                </div>
              </div>
            </div>
  
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Supporters</h3>
              <div className="space-y-4 max-h-[200px] overflow-y-auto pr-2 custom-scrollbar">
                {mockFollowers.map((follower) => (
                    <div onClick={()=>navigation('/donor',{ state: { from: 'followersModal' }})}>
                  <FollowerItem key={follower.id} follower={follower} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  function FollowerItem({ follower }) {

    return (
      <div  className="flex items-center space-x-4 cursor-pointer ">
        <img
          src={follower.avatar}
          alt={follower.name}
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate">{follower.name}</p>
          <p className="text-xs text-gray-500 truncate">
            Supporter since {new Date(follower.joinDate).toLocaleDateString()}
          </p>
        </div>
        <div className="text-right">
          <p className="text-sm font-medium text-green-600">${follower.donationAmount}</p>
        </div>
      </div>
    )
  }

//export default FollowersModal


// const FollowersModal = ({isModalOpen,closeModal}) => {
//   return (
//     <div>
//             {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <div 
//             className={`bg-white rounded-2xl  shadow-2xl w-full max-w-4xl overflow-hidden transform transition-all duration-300 '
//             }`}
//           >
//             <div className="flex-1  ml-0   rounded-b-[40px] border border-solid border-[#DFDFDF] bg-[#464645]
//   flex flex-col  items-center py-[20px] px-[20px]">
//               <h2 className="text-2xl font-bold text-[#fff]">Our Amazing Followers</h2>
//               {/* <button onClick={closeModal} className="text-white hover:text-gray-200 transition-colors">
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               </button> */}
//             </div>
//             <div className="overflow-y-auto max-h-[60vh] p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//               {mockFollowers.map((follower) => (
//                 <FollowerItem key={follower.id} follower={follower} />
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }


