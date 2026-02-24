"use client";
import { UserRegistrationPaymentProvider } from "@/context/RegistrationPaymentContext";
import Image from "next/image";
import { useState } from "react";
import UserRegistration from "../Razorpay/UserRegistration";

const LandingPageHackOn = () => {
  const [showRegistration, setShowRegistration] = useState(false);

  return (
    <UserRegistrationPaymentProvider>
      <div className="flex-col flex gap-3 md:gap-5">
        {/* Registration Modal */}
        {showRegistration && (
          <UserRegistration onClose={() => setShowRegistration(false)} />
        )}

        {/* GDGC GCOEN Logo Button */}
        <div className="flex justify-start mt-5 ml-5 md:mt-10 md:ml-10 p-3 md:p-5">
          <a
            href="#"
            className="inline-flex items-center gap-2 md:gap-4 px-4 md:px-8 py-2 md:py-3 bg-transparent border-[2px] md:border-[3px] border-white rounded-full 
                       transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_4px_15px_rgba(255,215,0,0.3)]
                       group cursor-pointer"
          >
            {/* REPLACED SVG WITH IMAGE - SIZE INCREASED HERE */}
            <Image 
              src="/vector26.png" // CHANGE THIS TO YOUR ACTUAL IMAGE PATH
              alt="GDGC Logo" 
              width={195} 
              height={120} 
              // Updated classes below: w-10 h-10 (mobile) and md:w-14 md:h-14 (desktop)
              className="w-10 h-10 md:w-14 md:h-14 flex-shrink-0 object-contain" 
            />

            {/* Text */}
            <span className="text-white text-base md:text-xl lg:text-2xl font-bold tracking-[1px] md:tracking-[2px] transition-colors duration-300 group-hover:text-[#FFD700]">
              GDGC GCOEN
            </span>
          </a>
        </div>

        {/* NEW HACKON LOGO FROM /SVG FOLDER */}
        <div className="flex flex-col items-center justify-center px-2 md:px-0">
          <Image
            src="/svg/Hackon.png" // Updated Path
            alt="HackON"
            width={800} // You can adjust width/height based on new image resolution
            height={300}
            className="w-full md:max-w-2xl lg:max-w-4xl object-contain drop-shadow-xl"
            priority
          />
        </div>

        {/* Register Now Button */}
        <div className="flex justify-center py-6 md:py-10 px-4 md:px-5">
          <button
            onClick={() => setShowRegistration(true)}
            className="inline-flex items-center gap-3 md:gap-4 px-8 md:px-12 py-3 md:py-4 bg-white text-black border-[2px] md:border-[3px] border-transparent rounded-full 
                       font-bold text-base md:text-lg lg:text-xl transition-all duration-300 
                       hover:text-[#FFD700] hover:border-[#FFD700] hover:-translate-y-0.5 hover:shadow-[0_4px_15px_rgba(255,215,0,0.3)]
                       group cursor-pointer"
          >
            <span>Register Now</span>
            
            {/* Arrow Icon */}
            <svg 
              className="w-6 h-6 md:w-8 md:h-8 self-center transition-all duration-300" 
              viewBox="0 0 24 24" 
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" 
                fill="black" 
                stroke="black" 
                strokeWidth="2.5"
                className="group-hover:fill-[#FFD700] group-hover:stroke-[#FFD700] transition-all duration-300"
              />
            </svg>
          </button>
        </div>

        {/* Main Date & Location Card */}
        <div className="flex justify-center px-10 md:px-20 pb-6 md:pb-10 w-full">
          <div className="relative max-w-4xl w-full">
            {/* Main Card Container */}
            <div className="bg-black border-[2px] md:border-[3px] border-white rounded-[25px] md:rounded-[35px] relative overflow-visible flex flex-col">
              
              {/* Star Decoration */}
              <svg 
                className="absolute -left-[24px] md:-left-[30px] lg:-left-[37px] top-[20px] md:top-[25px] w-[45px] md:w-[55px] lg:w-[70px] h-auto z-10" 
                viewBox="0 0 135 153" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M67.0428 0.0171568C67.0126 8.52847 66.1026 21.4648 63.6518 29.6968C55.9002 55.7126 33.6155 80.433 4.27832 83.5836L4.39525 84.6802L4.32028 84.6503L4.31849 84.6549L3.08997 87.6493L4.70042 87.5236L4.70189 87.5444L6.07213 87.4171L6.34771 87.396C13.6497 86.8294 20.8234 87.5594 27.3592 89.7267C54.1806 98.6239 67.0205 125.966 67.0426 152.618L71.0627 152.643C71.0627 152.64 71.0628 152.637 71.0628 152.634C71.0628 152.626 71.0628 152.618 71.0628 152.61C71.0924 144.237 72.1391 136.166 74.6133 127.873C82.4141 101.724 104.886 77.0193 134.331 73.8606L133.887 69.9028C126.468 70.664 119.153 70.2294 112.448 68.2418C98.6239 64.142 88.295 53.9677 81.3873 41.2899C74.4756 28.6046 71.0752 13.5528 71.0629 0.0423142L67.0428 0.0171568Z"
                  fill="black" 
                  stroke="white" 
                  strokeWidth="4"
                />
              </svg>

              {/* Date Section */}
              <div className="flex flex-row gap-2 md:gap-5 justify-center p-4 md:p-8 lg:p-12">
                {["10", "March", "2026"].map((text, i) => (
                  <div key={i} className="border-[2px] md:border-[3px] border-white rounded-[15px] md:rounded-[20px] px-2 md:px-8 py-4 text-white hover:text-[#FFD700] transition-colors duration-300 cursor-pointer font-bold flex-1 flex items-center justify-center">
                    <div className={`${text === 'March' ? 'text-lg md:text-3xl lg:text-6xl' : 'text-xl md:text-4xl lg:text-7xl'}`}>
                      {text}
                    </div>
                  </div>
                ))}
              </div>

              {/* Location Section */}
              <div className="flex flex-row border-t-[1.5px] md:border-t-2 border-white min-h-[80px] md:min-h-[110px] lg:min-h-[130px] rounded-b-[23px] md:rounded-b-[32px] overflow-hidden">
                <div className="flex-[3] flex items-center gap-3 pl-8 md:pl-16 pr-4 py-4 group">
                  <div className="w-5 h-5 md:w-8 lg:w-11 flex-shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-[#FFD700] transition-colors duration-300">
                      <path d="M12 22s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z" />
                      <circle cx="12" cy="11" r="3" />
                    </svg>
                  </div>

                  <a 
                    href="https://maps.app.goo.gl/cdRQKZyJ9mKr7mmb6" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[12px] md:text-lg lg:text-3xl font-bold leading-tight text-white hover:text-[#FFD700] transition-colors duration-300 no-underline"
                  >
                    <span className="block whitespace-nowrap">Government College of</span>
                    <span className="block whitespace-nowrap">Engineering, Nagpur</span>
                  </a>
                </div>

                <div className="flex flex-1 border-l-[1.5px] md:border-l-2 border-r-[1.5px] md:border-r-2 border-white"></div>
                <div className="flex-[0.4] bg-gradient-to-br from-white/10 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </UserRegistrationPaymentProvider>
  );
};

export default LandingPageHackOn;