import Image from "next/image";
import React from "react";

const WhyParticipant = () => {
  return (
    <div className="w-full flex flex-col relative gap-10 py-16 px-4 md:px-10 bg-black">

      {/* Heading with lines */}
      <div className="w-full flex items-center gap-4 md:gap-8">
        <div className="flex-1 h-[1px] bg-white/60"></div>

        <h3 className="font-semibold text-white text-3xl md:text-5xl text-center whitespace-nowrap">
          Why Participate?
        </h3>

        <div className="flex-1 h-[1px] bg-white/60"></div>
      </div>

      {/* Cards Grid */}
      <div className="grid container mx-auto grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <WhyParCard image="/Badge1.svg" Title="Exclusive Prizes" subtitle="Win cash prizes and other prizes" color="bg-green-500" />
        <WhyParCard image="/Badge2.svg" Title="No Prerequisite Knowledge" subtitle="Anyone can join!" color="bg-yellow-400" />
        <WhyParCard image="/Badge3.svg" Title="Collaboration" subtitle="Work with a team to create something extraordinary!" color="bg-yellow-400" />
        <WhyParCard image="/Badge4.svg" Title="Flexible Team Size" subtitle="Small or large, we allow it all" color="bg-green-500" />
        
        {/* FIX: Passed a customImgClass to reduce padding and slightly scale up the PNG! */}
        <WhyParCard 
          image="/Badge12.png" 
          Title="Skill Up" 
          subtitle="Learn industry-relevant skills via project building" 
          color="bg-blue-500" 
          customImgClass="p-1 md:p-1.5 scale-110" 
        />
      </div>
    </div>
  );
};

export default WhyParticipant;

// Added customImgClass with a default value so the SVGs stay exactly the same
const WhyParCard = ({ image, Title, subtitle, color, customImgClass = "p-2.5 md:p-3" }) => {
  return (
    <div className="flex items-start gap-4 md:gap-5 mx-auto w-full max-w-xl">
      
      {/* BULLETPROOF Icon Container */}
      <div
        className={`relative flex-none w-[64px] h-[64px] min-w-[64px] min-h-[64px] md:w-[80px] md:h-[80px] md:min-w-[80px] md:min-h-[80px] rounded-[14px] md:rounded-2xl flex items-center justify-center ${color} shadow-lg overflow-hidden`}
      >
        <Image
          src={image}
          alt={Title}
          fill
          sizes="(max-width: 768px) 64px, 80px"
          // Swapped the hardcoded padding for the dynamic prop
          className={`object-contain ${customImgClass}`}
        />
      </div>

      {/* Text */}
      <div className="flex flex-col pt-1 md:pt-1.5">
        <p className="text-lg md:text-2xl font-semibold text-white leading-tight">
          {Title}
        </p>
        <p className="text-sm md:text-base text-gray-400 mt-1">
          {subtitle}
        </p>
      </div>
      
    </div>
  );
};