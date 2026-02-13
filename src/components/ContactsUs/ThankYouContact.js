"use client"
import { rethink_sans400, rethink_sans800 } from "@/Fonts/Rethink";
import React from "react";
import DefaultBtn from "../Utility/DefaultBtn";
import { useRouter } from "next/navigation";

export const metadata = {
  title: "Thank You",
  description: "Thank you for reaching out!",
};

const ThankYouPage = ({ setformSubmittedSuccess }) => {
  const router = useRouter();
  return (
    <div className="flex flex-col  px-5 md:px-20 fixed gap-5 md:gap-16  top-0 left-0 w-full z-10 justify-center min-h-screen bg-blue text-white">
      <div className="text-[96px] font-bold mb-16">:)</div>
      <h1
        className={`${rethink_sans800.className} text-4xl md:text-[5vw] leading-10  font-bold `}
      >
        Thank you for reaching out!
      </h1>
      <p className={` font-semibold  ${rethink_sans400.className} `}>
        We appreciate your efforts to reach out to us! <br />
        Sit back, relax, and maybe grab a snack. We’ll email you soon!
      </p>
      <DefaultBtn
        name="Back to Home"
        func={() => {
          setformSubmittedSuccess(false);
          router.push("/");
        }}
        cuStyle="w-full md:w-fit "
        disabled="disabled:bg-blue4"
        HoverColor="hover:bg-blue focus:ring-blue "
        txtColor="text-white border-2 border-white "
      />
    </div>
  );
};

export default ThankYouPage;
