import { rethink_sans400 } from "@/Fonts/Rethink";
import { Rethink_Sans } from "next/font/google";
import Link from "next/link";
import React from "react";

const rethink_sans = Rethink_Sans({
  weight: "800",
  subsets: ["latin", "latin-ext"],
});
export const SocialLinks = [
  {
    text: "Instagram",
    Icon: "uil-instagram-alt",
    link: "https://www.instagram.com/gdgcgcoen/",
  },
  {
    text: "LinkedIn",
    Icon: "uil-linkedin",
    link: "https://www.linkedin.com/company/gdgoncampus-gcoen/",
  },
  {
    text: "YouTube",
    Icon: "uil-youtube",
    link: "http://www.youtube.com/@gdscgcoen3822",
  },
  {
    text: "WhatsApp",
    Icon: "uil-whatsapp-alt",
    link: "https://chat.whatsapp.com/Ge1u3fw4eOzEOIiUG6z6aJ",
  },
  {
    text: "Twitter",
    Icon: "uil-twitter",
    link: "https://x.com/GDGCGcoen",
  },
];
const ViaSocial = () => {
  return (
    <div className="w-full">
      <h4
        className={` text-2xl md:text-[40px] mb-1 ${rethink_sans.className} `}
      >
        via Social
      </h4>
      <div className="grid md:grid-cols-4 grid-cols-2 mt-5 gap-2">
        {SocialLinks.map(({ text, Icon, link }, index) => (
          <SocialButton key={index} icon={Icon} link={link} label={text} />
        ))}
      </div>
      <p
        className={`text-[20px] py-5 mb-1 text-center ${rethink_sans.className} `}
      >
        or
      </p>
      <div className="text-center">
        Email us at{" "}
        <Link className="font-semibold" href="mailto:gdsc.gcoen@gmail.com">
          gdsc.gcoen@gmail.com
        </Link>
      </div>
    </div>
  );
};

export default ViaSocial;

const SocialButton = ({ icon, link, label }) => {
  return (
    <Link
      href={link}
      target="_blank"
      className={` text-lg  ${rethink_sans400.className}  flex items-center justify-center border border-black rounded-full px-3 py-1 gap-2 uil ${icon}`}
    >
      {label}
    </Link>
  );
};
