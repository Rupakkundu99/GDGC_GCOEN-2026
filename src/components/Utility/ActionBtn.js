import React from "react";
import Link from "next/link";

const ActionBtn = ({ text, href, onClick }) => {
  const ButtonContent = (
    <div className="relative inline-block group cursor-pointer">
      
      {/* 1. THE YELLOW BACK LAYER (Shadow) */}
      <div className="
        absolute inset-0 
        bg-[#ffd427] 
        group-hover:bg-[#ff9d00] 
        border-2 border-black rounded-xl
        transition-all duration-300 ease-out 
        group-hover:translate-x-2 group-hover:translate-y-2
      "></div>

      {/* 2. THE WHITE FRONT LAYER (Main Button) */}
      <div className="
        relative
        bg-[#fffdf5] 
        group-hover:bg-[#FFF5C5] 
        border-2 border-black rounded-xl
        
        /* RESPONSIVE SIZING: Smaller on mobile, Large on desktop */
        px-8 py-3 
        md:px-20 md:py-5
        
        /* RESPONSIVE TEXT: Base size on mobile, 2xl on desktop */
        text-lg md:text-2xl font-bold
        
        text-black
        flex items-center justify-center gap-2 md:gap-4
        transition-all duration-300 ease-out 
        group-hover:-translate-x-[2px] group-hover:-translate-y-[2px]
      "
      onClick={onClick}
      >
        <span className="whitespace-nowrap">{text}</span>
        
        {/* Responsive Arrow size */}
        <svg 
          className="w-5 h-5 md:w-8 md:h-8" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </div>
  );

  if (href) {
    return <Link href={href}>{ButtonContent}</Link>;
  }

  return ButtonContent;
};

export default ActionBtn;