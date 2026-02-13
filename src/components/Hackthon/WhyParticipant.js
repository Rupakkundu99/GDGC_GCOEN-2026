import Image from "next/image";
import React from "react";

const WhyParticipant = () => {
  return (
    <div className="w-full flex flex-col relative gap-5 p-5">
      <h3 className="font-medium text-white text-3xl md:py-5 md:text-5xl text-center">
        Why Participate?
      </h3>

      {/* Centering the Grid */}
      <div className="grid  container mx-auto grid-cols-1 gap-5 md:gap-10 md:grid-cols-2 lg:grid-cols-2 justify-center items-center">
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
    <div className="flex items-center gap-4 mx-auto w-full md:w-4/5 lg:w-3/5 h-[68px]">
      <div className="w-14 md:w-20 flex-shrink-0">
        <Image src={image} alt="badge" width={104} height={104} className="w-full" />
      </div>
      <div className="flex flex-col justify-center flex-1">
        <p className="text-lg md:text-[30px] font-semibold text-white">{Title}</p>
        <p className="text-sm md:text-lg text-gray-400">{subtitle}</p>
      </div>
    </div>
  );
};
