

export default function Foooter() {
  return (
    <footer className="rounded-t-[40px] border border-solid border-[#DFDFDF] bg-[#e9e9e9] ">
      <div className="max-w-7xl mx-auto py-8 px-4 ">
        <div className="flex flex-col  justify-between items-center">
          <div className="mb-4 ">
            <p className="text-lg text-[#464645] text-center font-medium">&copy; 2024 CRWD Collective. All rights reserved.</p>
          </div>
          <nav className="flex space-x-4">
            <div 
              href="/terms" 
              className="text-lg text-[#464645] cursor-pointer font-medium hover:scale-105 transition-colors duration-200"
            >
              Terms of Service
            </div>
            <div 
              href="/privacy" 
              className="text-lg text-[#464645] cursor-pointer font-medium hover:scale-105 transition-colors duration-200"
            >
              Privacy Policy
            </div>
          </nav>
        </div>
      </div>
    </footer>
  )
}

