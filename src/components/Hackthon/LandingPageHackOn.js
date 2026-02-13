import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LandingPageHackOn = () => {
  return (
    <div className="flex-col flex gap-5">
      <div className="flex gap-2  md:gap-5 items-center p-5  left-36px">
        <Image
          src="/GDGlog.svg"
          className="w-10 md:w-20"
          alt="Logo"
          width={82}
          height={42}
        />
        <p className="text-white text-base md:text-xl"> GDGC GCOEN </p>
      </div>
      <div className="flex flex-col  items-center justify-center ">
        <Image
          src="/HackONSVG.svg"
          alt="star"
          width={225.094}
          height={277.48}
          className="w-full"
        />
      </div>

      <div className="flex flex-row gap-4 px-5 -mt-10 md:-mt-32 ">
        <div className="flex items-center flex-row gap-3">
          <div className=" text-sm md:text-4xl text-white">on</div>
          <div className=" text-sm md:text-4xl bg-[#FFCB32] rounded-full  md:px-5 py-1 px-2 md:py-2">
            21st February 2025
          </div>
        </div>
      </div>
      {/* button */}

      {/* <div className="flex justify-center py-10 md:py-20">
  <div className="relative w-full max-w-[450px] rounded-full p-[10px] before:absolute before:inset-0 before:rounded-full before:border before:border-white before:opacity-0 before:transition-opacity before:hover:opacity-100">
    <Link
      target="_blank"
      href="/Events/Payment/HackOn"
      className="group relative flex items-center justify-center w-full text-white text-lg font-medium md:text-4xl py-3 px-6 rounded-full 
                hover:bg-gradient-to-r hover:from-[#FFBA03] hover:via-[#38A852] hover:via-33% hover:via-[#FE5246] hover:via-66% hover:to-[#438BFF] 
                hover:text-black transition-all"
    >
      <div className="flex gap-3 items-center justify-center p-3">
        <span className="flex-1 align-">Register Now</span>
        <span className="transition-transform transform translate-x-0 group-hover:translate-x-[calc(100%+2rem)] text-5xl duration-500 ease-in-out">
          <ArrowRight />
        </span>
      </div>
    </Link>
  </div>
</div> */}
      <div className="flex justify-center py-10 px-9 md:py-20">
        <div className="relative w-[300px] md:w-[450px] rounded-full p-[10px] before:absolute before:inset-0 before:rounded-full before:border before:border-white before:opacity-0 before:transition-opacity before:hover:opacity-100">
          {/* <Link
            target="_blank"
            href="https://rzp.io/rzp/5XArlyHL"
            className="group relative flex items-center w-full text-white text-lg font-medium md:text-4xl py-3 px-6 rounded-full 
      hover:bg-[linear-gradient(to_right,#FFBA03_0%,#38A852_30%,#FE5246_60%,#438BFF_100%)] 
                   hover:text-black transition-all"
          >
            <div className="inline-flex items-center gap-2 p-3">
              <span>Register Now</span>
              <span className=" md:mt-6 transition-transform transform translate-x-0 group-hover:translate-x-[calc(100%+5rem)] md:group-hover:translate-x-[calc(100%+6rem)] text-5xl duration-500 ease-in-out">
                <ArrowRight />
              </span>
            </div>
          </Link> */}
          <div className="text-sm md:text-4xl bg-[#FFCB32] rounded-full  font-semibold md:px-5 px-2 md:py-4 text-center py-2">
            Registration closed
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default LandingPageHackOn;
