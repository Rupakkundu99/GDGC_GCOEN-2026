import Image from "next/image";
import React from "react";

const HackOnPrizes = () => {
  return (
    <div className="w-full flex-col flex relative gap-5 p-5">
      <h3 className="font-medium text-white  text-3xl md:py-5 md:text-5xl text-center">
        Prizes
      </h3>
      <div className="flex justify-between md:flex-row flex-col items-center container m-auto text-base md:text-2xl text-gray8 text-center">
        <Image src="/Prizes/AllPrizes.svg" width={100} className="w-full "  height={100} />
        {/* <Image src="/Prizes/FirstPrize.svg" width={100}  className="w-full md:-mt-32 " height={100} />
        <Image src="/Prizes/ThirdPrize.svg" width={100}  className="w-full md:mt-36 " height={100} /> */}
      </div>
      <Image
        src="/Pin.svg"
        alt="pin"
        className="absolute left-0 -bottom-5 w-24 md:w-60"
        width={104}
        height={104}
      />
    </div>
  );
};

export default HackOnPrizes;
