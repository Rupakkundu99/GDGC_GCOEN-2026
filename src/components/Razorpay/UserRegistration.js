"use client";
import { useEventRegistration } from "@/context/RegistrationPaymentContext";
import Image from "next/image";
import TeamDetailsHackOn from "./TeamDetailsHackOn";

const UserRegistration = ({ onClose }) => {
  const { UserRegiSteps } = useEventRegistration();
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#282828] w-full max-w-3xl rounded-2xl border border-white/20 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col relative">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-all"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar">
          <div className="flex flex-col items-center mb-8">
            <Image
              src="/HackOnLogoBlue.svg"
              width={200}
              height={50}
              alt="HackOn Logo"
              className="w-48 md:w-64"
            />
            <p className="text-gray-400 mt-2 text-sm">Registration Form</p>
          </div>
          
          <div className="w-full">
            <TeamDetailsHackOn onClose={onClose} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserRegistration;
