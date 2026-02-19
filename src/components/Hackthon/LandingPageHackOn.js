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
            {/* Google Icon SVG */}
            <svg
              className="w-8 h-8 md:w-11 md:h-11 flex-shrink-0"
              viewBox="0 0 195 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.03811 69.1681C-2.19739 59.7183 0.381745 47.683 7.79878 42.2867L62.3509 2.59671C69.768 -2.79964 79.2142 0.486366 83.4497 9.93621C87.6852 19.3861 85.1061 31.4213 77.689 36.8176L23.1369 76.5076C15.7199 81.9039 6.27362 78.6179 2.03811 69.1681Z"
                fill="#EA4335"
              />
              <path
                d="M111.55 110.064C107.315 100.614 109.894 88.5787 117.311 83.1824L171.863 43.4924C179.28 38.0961 188.726 41.3821 192.962 50.8319C197.197 60.2817 194.618 72.317 187.201 77.7133L132.649 117.403C125.232 122.8 115.786 119.514 111.55 110.064Z"
                fill="#FBBE0C"
              />
              <path
                d="M2.17732 49.5266C6.48973 40.1334 15.9623 36.9727 23.3349 42.467L77.5601 82.8776C84.9327 88.3719 87.4135 100.441 83.1011 109.834C78.7887 119.227 69.3161 122.388 61.9435 116.893L7.71828 76.4829C0.345688 70.9885 -2.13509 58.9198 2.17732 49.5266Z"
                fill="#4285F4"
              />
              <path
                d="M111.828 10.1832C116.14 0.78994 125.613 -2.37074 132.986 3.12359L187.211 43.5342C194.583 49.0285 197.064 61.0972 192.752 70.4905C188.439 79.8837 178.967 83.0443 171.594 77.55L117.369 37.1394C109.996 31.6451 107.516 19.5764 111.828 10.1832Z"
                fill="#28A769"
              />
              <path
                d="M171.296 77.9512C174.905 80.6407 179.021 81.3333 182.831 80.2734L132.354 116.999C128.776 119.602 124.732 120.102 121.071 118.829C117.403 117.553 114.077 114.479 112.007 109.859C107.85 100.586 110.413 88.8201 117.605 83.5869L148.599 61.0361L171.296 77.9512ZM77.2617 83.2783C84.4134 88.6082 86.8777 100.408 82.6465 109.625C80.5388 114.216 77.1898 117.245 73.5117 118.473C69.8415 119.697 65.8002 119.144 62.2422 116.492L12.1436 79.1572C15.8695 80.1612 19.8837 79.4926 23.4307 76.9121L46.3457 60.2393L77.2617 83.2783ZM172.157 43.8965C175.736 41.2931 179.781 40.7939 183.441 42.0674C184.418 42.4071 185.37 42.8751 186.28 43.4648L186.912 43.9355C194.064 49.2655 196.529 61.0657 192.298 70.2822C190.19 74.873 186.84 77.9017 183.162 79.1289C179.492 80.3534 175.451 79.8009 171.893 77.1494L149.445 60.4199L172.157 43.8965ZM11.7666 40.8887C15.4368 39.664 19.4781 40.2166 23.0361 42.8682L45.5059 59.6133L22.8428 76.1035C19.2645 78.7069 15.2194 79.2061 11.5586 77.9326C9.03686 77.0553 6.67752 75.3289 4.77637 72.835C0.219066 66.8019 -0.87774 57.3799 2.63184 49.7354C4.73944 45.1446 8.08865 42.116 11.7666 40.8887ZM121.418 1.54492C125.088 0.320487 129.129 0.873112 132.687 3.52441L182.708 40.8027C179.024 39.856 175.069 40.5417 171.569 43.0879L148.605 59.7949L117.668 36.7383C110.516 31.4085 108.051 19.6083 112.282 10.3916C114.39 5.80077 117.74 2.77217 121.418 1.54492ZM62.6455 3.00098C66.2236 0.397841 70.2682 -0.1023 73.9287 1.1709C77.5974 2.44711 80.9228 5.52146 82.9932 10.1406C87.1497 19.4144 84.5873 31.1799 77.3945 36.4131L46.3535 58.9971L23.6338 42.0664C20.0493 39.3951 15.964 38.691 12.1758 39.7197L62.6455 3.00098Z"
                stroke="black"
              />
            </svg>

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