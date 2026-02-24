import Image from "next/image";
import Link from "next/link";
import React from "react";

const FollowForUpdates = () => {
  return (
    <div className="w-full relative flex flex-col items-center gap-10 py-16 px-4 bg-black">
      <h3 className="font-semibold text-white text-3xl md:text-5xl text-center">
        Follow For Updates!
      </h3>

      <div className="flex gap-4 md:gap-8 items-center justify-center">
        <SocialCard
          href="https://www.linkedin.com/company/gdgoncampus-gcoen/"
          src="/Logo_linkedin.svg"
          alt="LinkedIn"
        />
        <SocialCard
          href="https://chat.whatsapp.com/DTW7i4taVZ0GPs8KZgYmGu?mode=gi_t"
          src="/logo_whatsapp.svg"
          alt="WhatsApp"
        />
        
        {/* FIX: Removed the imgClass="w-5 md:w-7" so it uses the default size! */}
        <SocialCard
          href="https://x.com/GDGCGcoen"
          src="/Frame 66.svg"
          alt="X"
        />
        
        <SocialCard
          href="https://discord.gg/SdJmdGaJ"
          src="/logo_discord.svg"
          alt="Discord"
        />
      </div>

      {/* Floating Decoration */}
      <Image
        src="/HackonCircle.png"
        alt="circle"
        width={120}
        height={120}
        className="w-20 md:w-36 absolute right-0 top-1/2 -translate-y-1/2 opacity-80"
      />
    </div>
  );
};

export default FollowForUpdates;

const SocialCard = ({ href, src, alt, imgClass = "w-8 md:w-12" }) => {
  return (
    <Link
      href={href}
      target="_blank"
      className="group w-16 h-16 md:w-20 md:h-20 rounded-2xl border border-white/20 bg-black flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-white hover:border-white hover:shadow-[0_0_25px_rgba(255,255,255,0.25)] overflow-hidden"
    >
      <Image
        src={src}
        alt={alt}
        width={60}
        height={60}
        className={`${imgClass} object-contain transition-all duration-300 group-hover:brightness-0`}
      />
    </Link>
  );
};