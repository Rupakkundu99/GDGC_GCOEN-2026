"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const JoinCommunity = () => {
  const router = useRouter();
  return (
    <div className="w-full flex-col flex gap-5 p-5">
      <h3 className="font-medium text-white  text-3xl md:py-5 md:text-5xl text-center">
        Join Community
      </h3>
      <div className='grid gap-2 md:gap-5 grid-rows-[156px] grid-flow-row [grid-template-areas:"Button1_._Button2"] justify-center'>
        <div className="[grid-area:Button1]">
          <button
            onClick={() => {
              router.push("https://discord.gg/SdJmdGaJ");
            }}
            className="p-0 border-0 bg-none hover:scale-100 transition-transform group"
          >
            <Image
              src="/Discord_button_1.png"
              alt="discord"
              height={156}
              width={156}
              className="w-20 md:w-32 group-hover:hidden"
            />

            <Image
              src="/Discord_button_2.png"
              alt="discord"
              height={156}
              width={156}
              className="w-20 md:w-32 group-hover:block hidden"
            />
          </button>
        </div>
        <div className="[grid-area:Button2]">
          <button
            onClick={() => {
              router.push("https://chat.whatsapp.com/Ge1u3fw4eOzEOIiUG6z6aJ");
            }}
            className="p-0 border-0 bg-none hover:scale-100 transition-transform group"
          >
            <Image
              src="/Whatsapp_button_1.png"
              alt="whatsapp"
              height={156}
              width={156}
              className="w-20 md:w-32 group-hover:hidden"
            />

            <Image
              src="/Whatsapp_button_2.svg"
              alt="discord"
              height={156}
              width={156}
              className="w-20 md:w-32 group-hover:block hidden"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinCommunity;
