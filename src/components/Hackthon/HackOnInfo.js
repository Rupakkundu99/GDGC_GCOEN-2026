import { rethink_sans600 } from "@/Fonts/Rethink";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HackOnInfo = () => {
  return (
    <div className="flex flex-col md:flex-row p-5 justify-center  relative gap-2 md:gap-5 items-center ">
      <Image
        src="/Dates.svg"
        className="w-full "
        alt="date"
        width={800}
        height={265}
      />
      <div className="w-full h-full p-5 flex-col flex justify-between bg-yellow-1  rounded-md border-2 border-black">
        <p className="text-3xl md:text-4xl lg:text-6xl " classFont={rethink_sans600.classFont}>
          Government College of Engineering, Nagpur
        </p>
        <div className="w-fit mt-2 "> 
          <Link
            target="_blank"
            href="https://maps.app.goo.gl/n1KmtBqbJvemGpeU6"
            className="flex items-center gap-2  text-sm rounded-3xl hover:border-[#282828] border bg-transparent border-black  md:text-xl text-black hover:text-black  md:py-7 py-2 px-10     hover:border  hover:bg-gradient-to-r hover:from-[#FFBA03] hover:via-[#38A852] hover:via-33% hover:via-[#FE5246] hover:via-66% hover:to-[#438BFF]
"
          >
            See On Google Maps
          </Link>
        </div>
      </div>
      <Image
        src="/HackOnSearch.png"
        width={20}
        className="absolute right-0 -bottom-10 md:w-[20%] w-[40%]"
        height={30}
      />
    </div>
  );
};

export default HackOnInfo;
