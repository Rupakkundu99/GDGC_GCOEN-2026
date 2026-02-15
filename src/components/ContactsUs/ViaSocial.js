import { rethink_sans400 } from "@/Fonts/Rethink";
import { Rethink_Sans, Poppins } from "next/font/google";
import Link from "next/link";
import React from "react";

const rethink_sans = Rethink_Sans({
  weight: "800",
  subsets: ["latin", "latin-ext"],
});

const poppins = Poppins({
  weight: "300",
  subsets: ["latin"],
});

const SocialLinks = [
  {
    text: "Instagram",
    Icon: "uil-instagram",
    link: "https://www.instagram.com/gdgcgcoen/",
  },
  {
    text: "Whatsapp",
    Icon: "uil-whatsapp",
    link: "https://chat.whatsapp.com/Ge1u3fw4eOzEOIiUG6z6aJ",
  },
  {
    text: "Linkedin",
    Icon: "uil-linkedin",
    link: "https://www.linkedin.com/company/gdgoncampus-gcoen/",
  },
  {
    text: "x.com",
    Icon: "uil-x",
    link: "https://x.com/GDGCGcoen",
  },
  {
    text: "Youtube",
    Icon: "uil-youtube",
    link: "http://www.youtube.com/@gdscgcoen3822",
  },
];

const ViaSocial = () => {
  return (
    <div className="w-full max-w-2xl mx-auto h-full min-h-0 flex flex-col gap-5 px-6 pt-0 pb-5 self-stretch md:mt-5">
      <div className="border-2 rounded-3xl border-black p-6 flex-[2] flex flex-col min-h-0 justify-between">
        <h4
          className={`text-2xl md:text-[40px] mb-1 mt-2 font-normal ${rethink_sans400.className}`}
          style={{ color: '#FCCE48' }}
        >
          via Socials
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-3 mt-5 gap-2 md:gap-x-2 md:gap-y-4 flex-1 content-center">
          {SocialLinks.map(({ text, Icon, link }, index) => (
            <SocialButton key={index} icon={Icon} link={link} label={text} />
          ))}
        </div>
        <p
          className={`text-3xl md:text-4xl font-bold pt-2 pb-5 mb-1 text-center ${rethink_sans.className}`}
        >
          or
        </p>
        <div className="text-center text-lg md:text-xl mb-6 pb-2">
          Email us at: {" "}
          <Link className="font-semibold" href="mailto:gdsc.gcoen@gmail.com">
            gdsc.gcoen@gmail.com
          </Link>
        </div>
      </div>
      <div className="border-2 rounded-3xl border-black px-5 py-3 text-left flex-none flex flex-col justify-center hover:bg-yellow-100 hover:border-yellow-500 transition-colors">
        <div className={`text-4xl md:text-5xl font-light ${poppins.className}`}>Google Developer Group</div>
        <div className={`text-4xl md:text-5xl font-light ${poppins.className}`}>On Campus •GCOEN</div>
      </div>
    </div>
  );
};

export default ViaSocial;

const SocialButton = ({ icon, link, label }) => {
  const isLightIcon = label === "Instagram" || label === "Whatsapp";
  return (
    <Link
      href={link}
      target="_blank"
      className={`group text-sm md:text-lg text-black ${rethink_sans400.className} flex items-center justify-center border border-black rounded-full px-3 py-2 md:px-4 md:py-2.5 gap-1.5 md:gap-2 bg-white hover:border-yellow-500 hover:text-yellow-500 transition-colors whitespace-nowrap`}
    >
      <i className={`uil ${icon} text-base md:text-xl text-black group-hover:text-yellow-500 transition-colors flex-shrink-0 ${isLightIcon ? "font-light" : ""}`} />
      <span>{label}</span>
    </Link>
  );
};
