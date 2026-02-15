import React from "react";
import Image from "next/image";
import Link from "next/link";
import { rethink_sans800 } from "@/Fonts/Rethink";

const UniversalCard = ({ 
  imageSrc, 
  title, 
  date, 
  link = "#", 
  label = "Read more" 
}) => {
  return (
    <Link href={link} className="block group h-full">
      {/* CONTAINER: Holds the stack */}
      <div className="relative w-full h-full">
        
        {/* 1. YELLOW BACKGROUND LAYER (The Rim) */}
        {/* Simplified: Sits behind the white card, offset slightly upwards */}
        {/* -top-2 means it peeks out just 8px. This reduces the "huge gap". */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#ffd427] border-2 border-black rounded-[30px] transform -translate-y-2 transition-transform duration-300 group-hover:-translate-y-3 z-0"></div>

        {/* 2. MAIN WHITE CARD (The Content) */}
        <div className="relative z-10 w-full h-full bg-white border-2 border-black rounded-[30px] overflow-hidden flex flex-col transition-transform duration-300 group-hover:-translate-y-1">
          
          {/* A. IMAGE SECTION (Top Half) */}
          {/* Added a border-bottom to separate image from text */}
          <div className="w-full h-56 relative border-b-2 border-black bg-gray-50">
             {imageSrc ? (
               <Image 
                 src={imageSrc} 
                 alt={title} 
                 fill 
                 className="object-cover"
               />
             ) : (
               // Placeholder pattern if no image
               <div className="w-full h-full opacity-10 bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:16px_16px]"></div>
             )}
          </div>

          {/* B. CONTENT SECTION (Bottom Half) */}
          <div className="p-6 flex flex-col flex-grow justify-between">
            
            {/* Title */}
            <h3 className={`text-xl font-bold text-black mb-6 line-clamp-2 leading-tight ${rethink_sans800.className}`}>
              {title}
            </h3>

            {/* Footer: Read More Button + Date */}
            <div className="flex items-center justify-between mt-auto">
              
              {/* Pill Button */}
              <div className="flex items-center gap-2 px-4 py-2 border-2 border-black rounded-full transition-colors group-hover:bg-[#ffd427]">
                <span className="text-sm font-bold text-black whitespace-nowrap">
                  {label}
                </span>
                {/* Arrow Icon */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>

              {/* Date with Calendar Icon */}
              {date && (
                <div className="flex items-center gap-2 text-black">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                     <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                     <line x1="16" y1="2" x2="16" y2="6"></line>
                     <line x1="8" y1="2" x2="8" y2="6"></line>
                     <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  <span className="text-xs md:text-sm font-bold">
                    {new Date(date).toLocaleDateString('en-GB').replace(/\//g, '-')}
                  </span>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </Link>
  );
};

export default UniversalCard;
