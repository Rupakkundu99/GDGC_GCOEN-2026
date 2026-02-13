"use client";
import DefaultBtn from "@/components/Utility/DefaultBtn";
import { rethink_sans400, rethink_sans800 } from "@/Fonts/Rethink";
import { useRouter } from "next/navigation";
import React from "react";

const NotFoundPage = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col px-5 md:px-20 fixed gap-5 md:gap-16 top-0 left-0 w-full z-10 justify-center min-h-screen bg-red-500 text-white">
      <div className="text-[96px] font-bold mb-16">:)</div>
      <h1
        className={`${rethink_sans800.className} text-4xl md:text-[5vw] leading-10 font-bold`}
      >
        404! Page Not Found
      </h1>
      <p className={`font-semibold ${rethink_sans400.className}`}>
        It seems the page you are looking for doesn’t exist. <br />
        Don’t worry, let’s get you back on track!
      </p>
      <DefaultBtn
        func={() => {
          router.push("/");
        }}
        name="Back to Home"
        cuStyle="w-full md:w-fit "
        HoverColor="hover:bg-red focus:ring-red hover:text-xl"
        txtColor="text-white border-2 border-white "
      />
    </div>
  );
};

export default NotFoundPage;
