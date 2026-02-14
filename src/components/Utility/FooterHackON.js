"use client";
import Image from "next/image";
import Link from "next/link";

const FooterHackON = () => {
  return (
    <footer className="w-full bg-black py-12">
      <div className="container mx-auto flex flex-col items-center gap-8 px-4">

        {/* Register Box from Figma */}
        <Link href="https://your-register-link.com" target="_blank">
          <Image
            src="/register-box.svg"
            alt="Register Now"
            width={800}
            height={300}
            className="w-full max-w-xl cursor-pointer hover:scale-[1.02] transition-transform"
          />
        </Link>

        {/* Social Media Links */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {socialLinks.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              target="_blank"
              className="flex items-center gap-2 rounded-full border border-white/40 px-4 py-2 text-white text-xs sm:text-sm hover:bg-white hover:text-black transition"
            >
              <Image src={item.icon} alt={item.label} width={16} height={16} />
              <span className="underline">{item.label}</span>
            </Link>
          ))}
        </div>


        {/* GDG Logo Section - Shifted Left but Large */}
        <div className="w-full flex items-center mt-6">
          {/* Left Line - Short segment to push logo slightly right of the edge */}
          <div className="flex-[0.05] h-[1.5px] bg-white/80"></div>
          
          {/* Large Logo - Matches the scale of your first version */}
          <div className="px-6 shrink-0">
            <Image
              src="/gdc-on-campus-logo.svg" 
              alt="Google Developer Group On Campus GCOEN"
              width={700} // Increased width
              height={120}
              className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto object-contain"
            />
          </div>

          {/* Right Line - Fills the rest of the horizontal space */}
          <div className="flex-grow h-[1.5px] bg-white/80"></div>
        </div>
      </div>
    </footer>
  );
};

export default FooterHackON;

const socialLinks = [
  { icon: "/instagram.svg", link: "https://www.instagram.com/gdgcgcoen/", label: "Instagram" },
  { icon: "/whatsapp.svg", link: "https://chat.whatsapp.com/Ge1u3fw4eOzEOIiUG6z6aJ", label: "Whatsapp" },
  { icon: "/linkedin.svg", link: "https://www.linkedin.com/company/gdgoncampus-gcoen/", label: "LinkedIn" },
  { icon: "/x.svg", link: "https://x.com/GDGCGcoen", label: "X.com" },
  { icon: "/youtube.svg", link: "http://www.youtube.com/@gdscgcoen3822", label: "YouTube" },
];

