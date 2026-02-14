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
        <WhyParCard image="/Badge5.svg" Title="Skill Up" subtitle="Learn industry-relevant skills via project building" color="bg-blue-500" />
      </div>
    </div>
  );
};

export default WhyParticipant;

const WhyParCard = ({ image, Title, subtitle, color }) => {
  return (
    <div className="flex items-start gap-5 mx-auto w-full max-w-xl">
      {/* Icon Container */}
      <div
        className={`relative w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center ${color} shadow-lg`}
      >
        <Image
          src={image}
          alt="badge"
          fill
          className="object-contain p-2"
        />
      </div>

      {/* Text */}
      <div className="flex flex-col">
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


