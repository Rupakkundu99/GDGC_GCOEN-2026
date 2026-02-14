"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const JoinCommunity = () => {
  const router = useRouter();

  return (
    <div className="w-full flex flex-col items-center gap-10 py-16 px-4 bg-black">
      <h3 className="font-semibold text-white text-3xl md:text-5xl text-center">
        Join our Community
      </h3>

      <div className="grid grid-cols-2 gap-6 md:gap-12">
        {/* Discord */}
        <CommunityCard
          onClick={() => router.push("https://discord.gg/SdJmdGaJ")}
          img1="/Discord_button_1.png"
          img2="/Discord_button_2.png"
          alt="Discord"
        />

        {/* WhatsApp */}
        <CommunityCard
          onClick={() =>
            router.push("https://chat.whatsapp.com/Ge1u3fw4eOzEOIiUG6z6aJ")
          }
          img1="/Whatsapp_button_1.png"
          img2="/Whatsapp_button_2.svg"
          alt="WhatsApp"
        />
      </div>
    </div>
  );
};

export default JoinCommunity;

const CommunityCard = ({ onClick, img1, img2, alt }) => {
  return (
    <button
      onClick={onClick}
      className="group relative w-28 h-28 md:w-40 md:h-40 rounded-2xl border border-white/20 bg-black flex items-center justify-center transition-all duration-300 hover:scale-105 hover:border-white/40 hover:shadow-[0_0_25px_rgba(255,255,255,0.15)]"
    >
      <Image
        src={img1}
        alt={alt}
        width={120}
        height={120}
        className="w-16 md:w-24 group-hover:hidden"
      />
      <Image
        src={img2}
        alt={alt}
        width={120}
        height={120}
        className="w-16 md:w-24 hidden group-hover:block"
      />
    </button>
  );
};

