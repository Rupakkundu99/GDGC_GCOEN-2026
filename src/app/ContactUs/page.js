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
  weight: "800",
  subsets: ["latin", "latin-ext"],
});

const ContactUs = () => {
  return (
    <div className="  mt-14 md:mt-0  py-10">
      <h2
        className={`text-3xl md:text-[64px]   ${rethink_sans.className}  mb-1 `}
      >
        Contact us
      </h2>

      <div className={`mt-5 flex md:gap-10 gap-5  md:flex-row flex-col  `}>
        <ViaEmail />
        <ViaSocial />
      </div>
    </div>
  );
};

export default ContactUs;
