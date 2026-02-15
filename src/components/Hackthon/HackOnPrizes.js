import Image from "next/image";
import React from "react";

const PrizeCard = ({ trophy, bg, title, amount, height, trophyOffset, titleColor, amountColor }) => {
  return (
    <div className="relative flex flex-col items-center">
      {/* Trophy */}
      <div className="absolute z-20" style={{ top: trophyOffset }}>
        <Image
          src={trophy}
          alt="trophy"
          width={64}
          height={64}
          className="w-10 md:w-12"
          priority
        />
      </div>

      {/* Card */}
      <div
        className="relative 
          w-[110px] sm:w-[150px] md:w-[240px] lg:w-[260px]
          rounded-[28px] overflow-hidden
          shadow-[0_20px_60px_rgba(0,0,0,0.35)]
          flex flex-col justify-end
        "
        style={{ height }}
      >
        <Image src={bg} alt="prize bg" fill className="object-cover" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-center">
          <p className={`text-base sm:text-lg md:text-2xl font-semibold ${titleColor}`}>
            {title}
          </p>
          <p className={`text-2xl sm:text-3xl md:text-4xl font-bold mt-1 ${amountColor}`}>
            {amount}
          </p>
        </div>
      </div>
    </div>
  );
};


const HackOnPrizes = () => {
  return (
    <section className="w-full relative py-10 md:py-16 bg-black">
      <h3 className="text-white text-3xl md:text-5xl text-center font-medium mb-12">
        Prizes
      </h3>

      <div className="mx-auto w-full flex items-end justify-center gap-3 sm:gap-4 md:gap-10 px-2">
        
        {/* 2nd Prize */}
        <PrizeCard
          trophy="/prizes/trophy-2nd.png"
          bg="/prizes/prize-bg-silver.png"
          title="2nd Prize"
          amount="₹5,000"
          height="clamp(200px, 50vw, 420px)"
          trophyOffset="12px"
          titleColor="text-gray-200"
          amountColor="text-gray-100"
        />

        {/* 1st Prize */}
        <PrizeCard
          trophy="/prizes/trophy-1st.png"
          bg="/prizes/prize-bg-gold.png"
          title="1st Prize"
          amount="₹10,000"
          height="clamp(240px, 60vw, 480px)"
          trophyOffset="14px"
          titleColor="text-yellow-300"
          amountColor="text-yellow-400"
        />

        {/* 3rd Prize */}
        <PrizeCard
          trophy="/prizes/trophy-3rd.png"
          bg="/prizes/prize-bg-bronze.png"
          title="3rd Prize"
          amount="₹3,000"
          height="clamp(180px, 45vw, 360px)"
          trophyOffset="10px"
          titleColor="text-orange-300"
          amountColor="text-orange-400"
        />
      </div>

      {/* Decorative pin */}
      <Image
        src="/Pin.svg"
        alt="pin"
        width={160}
        height={160}
        className="absolute left-0 -bottom-8 w-20 md:w-48"
      />
    </section>
  );
};

export default HackOnPrizes;





