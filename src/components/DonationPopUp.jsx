import { useState } from "react";
import { X } from "lucide-react";

export default function DonationPopUp({ isOpen, setIsOpen }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  // const [isOpen, setIsOpen] = useState(true);

  const slides = [
    {
      title: "Currently Serving",
      amount: "Atlanta, Georgia",
      cardTitle: "Total Donations",
      cardAmount: "174",
      cardSubtext: "+12% from last month",
      heading: "Welcome to CRWD",
      content:
        "Your gateway to doing good. Connect with meaningful causes and join a community of changemakers.",
    },
    {
      title: "Lives Impacted",
      amount: "25,431",
      cardTitle: "Recent Projects",
      cardAmount: "156",
      cardSubtext: "Active campaigns",
      heading: "Start your philanthropy journey",
      content:
        "Discover Atlanta nonprofits, join their mission, invite others, share your experiences, and track every step of your giving journey.",
    },
    {
      title: "Global Reach",
      amount: "45 Countries",
      cardTitle: "Active Regions",
      cardAmount: "12",
      cardSubtext: "Current focus areas",
      heading: "Get Started with CRWD",
      content:
        "CRWD is all about recurring micro-donations-just $5 a month-making giving accessible and impactful for everyone. Welcome to the next generation of giving. Welcome to CRWD.",
    },
  ];

  if (!isOpen) return null;

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
          <div className="relative mb-8">
            <div className="text-[22px] font-semibold text-gray-900 mb-2">
              {slides[currentSlide].title}
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-6">
              {slides[currentSlide].amount}
            </div>

            <div className="bg-[#464645]  text-white rounded-xl p-4 shadow-lg transform -rotate-2  hover:rotate-0 transition-transform">
              <div className="flex justify-between items-start mb-2">
                <div className="text-sm text-white">
                  {slides[currentSlide].cardTitle}
                </div>
                <div className="bg-green-500/50 rounded-full p-1">
                  <div className="w-3 h-3 rounded-full bg-white" />
                </div>
              </div>
              <div className="text-2xl font-bold mb-1">
                {slides[currentSlide].cardAmount}
              </div>
              <div className="text-sm text-white">
                {slides[currentSlide].cardSubtext}
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">
              {slides[currentSlide].heading}
            </h2>
            <p className="text-gray-600">{slides[currentSlide].content}</p>
          </div>

          <div className="flex justify-center gap-2 mb-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentSlide === index ? "bg-[#464645]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
              className="flex-1 px-4 py-2 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
            >
              Back
            </button>
            <button
              onClick={() => {
                if (currentSlide < slides.length - 1) {
                  setCurrentSlide(currentSlide + 1);
                } else {
                  setIsOpen(false);
                }
              }}
              className="flex-1 px-4 py-2 bg-[#464645] hover:bg-[#3b3b3a] text-white rounded-lg  transition-colors"
            >
              {currentSlide === slides.length - 1 ? "Get Started" : "Continue"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
