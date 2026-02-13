import Image from "next/image";
import Link from "next/link";
import React from "react";

const FollowForUpdates = () => {
  return (
    <div className="w-full flex-col relative flex gap-5 p-5">
      <h3 className="font-medium text-white  text-3xl md:py-5 md:text-5xl text-center">
        Follow For Updates!
      </h3>
      <div className='flex gap-2 md:gap-5 items-center justify-center'>
        <div className="[grid-area:App1]">
          <Link href="https://www.linkedin.com/company/gdgoncampus-gcoen/">
            <Image
              src="/Logo_linkedin.svg"
              alt="linkedin"
              width={92}
              className="w-14 md:w-20 hover:bg-white rounded-lg"
              height={92}
            />
          </Link>
        </div>
        <div className="[grid-area:App2]">
          <Link href="https://chat.whatsapp.com/Ge1u3fw4eOzEOIiUG6z6aJ">
            <Image
              src="/logo_whatsapp.svg"
              alt="Whatsapp"
              width={92}
              className="w-14 md:w-20 hover:bg-white rounded-lg"
              height={92}
            />
          </Link>
        </div>
        <div className="[grid-area:App3]">
          <Link href="https://x.com/GDGCGcoen">
            <Image src="/logo_x.svg" alt="X" width={92}
            className="w-14 md:w-20 hover:bg-white rounded-lg" height={92} />
          </Link>
        </div>
        <div className="[grid-area:App4]">
          <Link href="https://discord.gg/SdJmdGaJ">
            <Image
              src="/logo_discord.svg"
              alt="discord"
              width={92}
              className="w-14 md:w-20 hover:bg-white rounded-lg"
              height={92}
            />
          </Link>
        </div>
      </div>
      <Image
        src="/HackonCircle.png"  alt="circle" width={20} height={30} className="w-16 md:w-36 absolute right-0 " />
    </div>
  );
};

export default FollowForUpdates;
