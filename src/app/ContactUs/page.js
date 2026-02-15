// import ThankYouPage from "@/components/ContactsUs/ThankYouContact";
import ViaEmail from "@/components/ContactsUs/ViaEmail";
import ViaSocial from "@/components/ContactsUs/ViaSocial";
import { Rethink_Sans } from "next/font/google";
import React from "react";

export const metadata = {
  title: "Contact Us",
  description: "Contact us page",
};

const rethink_sans = Rethink_Sans({
  weight: "400",
  subsets: ["latin", "latin-ext"],
});

const ContactUs = () => {
  return (
    <div className="relative mt-14 md:mt-0 py-10">
      <h2
        className={`text-3xl md:text-[64px] mb-1 font-normal ${rethink_sans.className}`}
      >
        Contact us
      </h2>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 md:gap-10 gap-5 md:items-stretch">
        <ViaEmail />
        <ViaSocial />
      </div>

      <div className="flex items-center mt-4">
        <img src="/Group 47.png" alt="" width={96} height={96} className="flex-shrink-0" />
        <img src="/Arrow 4.png" alt="" width={300} height={30} className="flex-shrink-0 -ml-1" />
      </div>
    </div>
  );
};

export default ContactUs;
