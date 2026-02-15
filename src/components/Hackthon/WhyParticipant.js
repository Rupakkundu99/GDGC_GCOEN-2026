import Image from "next/image";
import React from "react";

const WhyParticipant = () => {
  return (
    <div className="w-full flex flex-col relative gap-5 p-5">
      <h3 className="font-medium text-white text-3xl md:py-5 md:text-5xl text-center">
        Why Participate?
      </h3>

      {/* Centering the Grid - Optimized for mobile and desktop */}
      <div className="grid container mx-auto grid-cols-1 gap-6 md:gap-8 lg:gap-10 xl:gap-12 md:grid-cols-2 lg:grid-cols-2 justify-center items-start px-2 md:px-4">
        <WhyParCard
          image="/Badge1.svg"
          Title="Exclusive Prizes"
          subtitle="Win cash prizes and other prizes"
        />

        <WhyParCard
          image="/Badge2.svg"
          Title="No Prerequisite Knowledge"
          subtitle="Anyone can join!"
        />

        <WhyParCard
          image="/Badge3.svg"
          Title="Collaboration"
          subtitle="Work with a team to create something extraordinary!"
        />

        <WhyParCard
          image="/Badge4.svg"
          Title="Flexible Team Size"
          subtitle="Small or large, we allow it all"
        />

        <WhyParCard
          image="/Badge5.svg"
          Title="Skill Up"
          subtitle="Learn industry-relevant skills via project building"
        />
      </div>

      {/* Floating Star Decoration */}
      <Image
        src="/Star-2.svg"
        alt="star"
        width={30}
        height={30}
        className="w-20 absolute md:w-60 -bottom-20 md:-bottom-56 -mt-12 md:-mt-20"
      />
    </div>
  );
};

export default WhyParticipant;

const WhyParCard = ({ image, Title, subtitle }) => {
  return (
    <div className="flex items-start gap-3 md:gap-4 w-full max-w-full md:max-w-[500px] mx-auto min-h-[70px] md:min-h-[80px] px-2 md:px-0">
      <div className="w-12 md:w-16 lg:w-20 flex-shrink-0">
        <Image src={image} alt="badge" width={104} height={104} className="w-full" />
      </div>
      <div className="flex flex-col justify-start flex-1 pr-2">
        <p className="text-base md:text-xl lg:text-[28px] xl:text-[30px] font-semibold text-white leading-tight mb-0.5 md:mb-1">
          {Title}
        </p>
        <p className="text-xs md:text-sm lg:text-base xl:text-lg text-gray-400 leading-snug md:leading-relaxed">
          {subtitle}
        </p>
      </div>
    </div>
  );
};