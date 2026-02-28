"use client";
import React, { useState } from "react";
import Link from "next/link";

const HackOnPrizes = () => {
  // State to control the popup window
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="w-full relative py-16 px-4 bg-black overflow-hidden flex justify-center shrink-0 min-h-fit h-auto">
        
        {/* Background Glow Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-64 bg-yellow-500/10 blur-[100px] pointer-events-none rounded-full" />

        <div className="w-full max-w-5xl flex flex-col gap-12 md:gap-16 relative z-10">
          
          {/* TOP SECTION: Prize Box & Rounds Info */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            
            {/* LEFT: Prize Pool Box */}
            <div className="border border-[#F9AB00] rounded-[32px] p-8 md:p-10 flex flex-col items-center justify-center bg-black min-w-[280px] shadow-[0_0_40px_rgba(249,171,0,0.15)] transition-all duration-500 hover:scale-105 hover:shadow-[0_0_60px_rgba(249,171,0,0.6)] cursor-default">
              <h4 className="text-white text-3xl font-bold tracking-wide">
                Prize Pool
              </h4>
              <h2 
                className="text-[#F9AB00] text-7xl md:text-8xl font-black mt-1 transition-all duration-500"
                style={{ textShadow: "4px 4px 0px rgba(255,255,255,0.15)" }} 
              >
                20K
              </h2>
            </div>

            {/* RIGHT: HackOn Rounds Info */}
            <div className="flex flex-col text-center md:text-left text-white max-w-lg">
              <h3 className="text-[#F9AB00] text-2xl md:text-3xl font-medium mb-4">
                HackOn Rounds
              </h3>
              
              <div className="space-y-3 text-base md:text-lg mb-6">
                <div>
                  <p>
                    <span className="font-bold">Round 1:</span> Online PPT Submission
                  </p>
                  {/* NEW BUTTON TO OPEN MODAL */}
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="mt-2 inline-flex items-center gap-2 px-4 py-1.5 text-sm md:text-base border border-[#F9AB00] text-[#F9AB00] rounded-full hover:bg-[#F9AB00] hover:text-black transition-all duration-300"
                  >
                    Resources & Guidelines
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                
                <div>
                  <p>
                    <span className="font-bold">Round 2:</span> 8-Hour Offline Hackathon
                  </p>
                  <p className="font-bold text-gray-300">
                    (Selected Teams Only)
                  </p>
                </div>
              </div>

              <div className="text-gray-400 text-sm md:text-base leading-relaxed border-t border-white/10 pt-4">
                Certificates | Mentorship & Networking | Goodies | Refreshments
              </div>
            </div>

          </div>

          {/* BOTTOM SECTION: Event Coordinators */}
          <div className="flex flex-col items-center w-full mt-4 md:mt-8">
            <h3 className="text-gray-300 text-base sm:text-lg md:text-xl font-medium mb-8 uppercase tracking-wide md:tracking-widest text-center whitespace-nowrap">
              Event Coordinators
            </h3>
            
            <div className="flex flex-row justify-center gap-3 sm:gap-12 w-full px-2">
              
              {/* EC 1 */}
              <div className="flex flex-col items-center text-center bg-white/5 border border-white/10 px-2 py-4 sm:px-5 rounded-xl w-[48%] max-w-[200px] transition-colors hover:bg-white/10">
                <p className="text-white font-semibold text-sm sm:text-base leading-tight mb-1">Shreyash Ambhure</p>
                <Link href="tel:+918767607452" className="text-[#F9AB00] hover:underline text-xs sm:text-sm">
                  +91 8767607452
                </Link>
              </div>

              {/* EC 2 */}
              <div className="flex flex-col items-center text-center bg-white/5 border border-white/10 px-2 py-4 sm:px-5 rounded-xl w-[48%] max-w-[200px] transition-colors hover:bg-white/10">
                <p className="text-white font-semibold text-sm sm:text-base leading-tight mb-1">Kartik Bissa</p>
                <Link href="tel:+918329284863" className="text-[#F9AB00] hover:underline text-xs sm:text-sm">
                  +91 8329284863
                </Link>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* POPUP MODAL WINDOW */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          {/* Modal Container */}
          <div className="bg-[#1a1a1a] border border-[#F9AB00]/30 rounded-2xl p-6 md:p-8 w-full max-w-md relative shadow-2xl animate-in fade-in zoom-in duration-200">
            
            {/* Close Button */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Content */}
            <h3 className="text-white text-2xl font-bold mb-2">Round 1 Resources</h3>
            <p className="text-gray-400 text-sm mb-6">
              Download the official rulebook and the presentation template required for your Round 1 submission.
            </p>

            <div className="flex flex-col gap-4">
              {/* Rulebook Download Link */}
              <a 
                href="/Hackon Rulebook.pdf" 
                download
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-[#F9AB00] text-black font-semibold rounded-xl hover:bg-yellow-400 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Rulebook (PDF)
              </a>

              {/* PPT Template Download Link */}
              <a 
                href="/HACKON2.0_PPT_TEMPLATE.pptx" 
                download
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 px-6 py-3 border border-gray-600 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-gray-400 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download PPT Template
              </a>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default HackOnPrizes;