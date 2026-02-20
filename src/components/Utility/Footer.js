"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { rethink_sans400, rethink_sans800 } from "@/Fonts/Rethink";

/**
 * Updated SocialButton based on ViaSocial UI.
 * Replaces the old image-only SocialLink.
 */
const SocialButton = ({ icon, link, label }) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`group text-xs md:text-sm text-black ${rethink_sans400.className} flex items-center justify-center border border-black rounded-full px-4 py-2 gap-2 bg-white hover:border-[#FCCE48] hover:text-[#FCCE48] transition-all duration-300 whitespace-nowrap hover:-translate-y-1 shadow-sm hover:shadow-md`}
    >
      <i className={`uil ${icon} text-base md:text-xl text-black group-hover:text-[#FCCE48] transition-colors flex-shrink-0`} />
      <span className="font-medium">{label}</span>
    </Link>
  );
};

/**
 * Stable Logo component with constant size and golden glow.
 * (Removed absolute positioning to prevent overlap)
 */
const LogoImage = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="flex items-center justify-end w-full max-w-[350px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        height: "80px",
      }}
    >
      <img
        src={isHovered ? "/goldengdg.png" : "/whitegdgc.png"}
        alt="GDGC Logo"
        suppressHydrationWarning
        style={{
          height: "100%",
          width: "auto",
          maxWidth: "100%",
          cursor: "pointer",
          transition: "filter 0.3s ease",
          filter: isHovered ? "drop-shadow(0 0 12px rgba(255, 212, 39, 0.45))" : "none",
          objectFit: "contain",
          transform: "none", 
        }}
      />
    </div>
  );
};

const Footer = () => {
  const pathname = usePathname();

  // Condition to hide the footer on "/Teams", "/Events", and "/ContactUs"
  if (pathname && (pathname.startsWith("/Teams") || pathname.startsWith("/Events") || pathname.startsWith("/ContactUs") || pathname.startsWith("/Blogs"))) {
    return null; 
  }

  const socialLinks = [
    { label: "Instagram", icon: "uil-instagram", link: "https://www.instagram.com/gdgcgcoen/" },
    { label: "Whatsapp", icon: "uil-whatsapp", link: "https://chat.whatsapp.com/Ge1u3fw4eOzEOIiUG6z6aJ" },
    { label: "Linkedin", icon: "uil-linkedin", link: "https://www.linkedin.com/company/gdgoncampus-gcoen/" },
    { label: "X.com", icon: "uil-x", link: "https://x.com/GDGCGcoen" },
    { label: "Youtube", icon: "uil-youtube", link: "https://www.youtube.com/c/gdscgcoen3822" },
  ];

  return (
    <>
      {/* ------------------------------------------------ */}
      {/* DESKTOP FOOTER                                   */}
      {/* ------------------------------------------------ */}
      <footer className="hidden md:flex justify-center w-full py-10 bg-transparent relative z-30">
        <div className="container m-auto px-4 flex justify-center">
          
          {/* Main Pill Box - Converted to Flexbox layout */}
          <div
            className="border-2 border-black rounded-[62px] bg-white w-full max-w-[1250px] min-h-[180px] flex items-center justify-between px-6 lg:px-12 py-6 shadow-lg gap-4"
          >
            {/* Left Section - Social Buttons */}
            {/* flex-1 ensures it shares space evenly with the right side */}
            <div className="flex-1 flex flex-col gap-3">
              <div className="flex flex-wrap gap-3">
                <SocialButton 
                  label={socialLinks[0].label} 
                  icon={socialLinks[0].icon} 
                  link={socialLinks[0].link} 
                />
                <SocialButton 
                  label={socialLinks[1].label} 
                  icon={socialLinks[1].icon} 
                  link={socialLinks[1].link} 
                />
                <SocialButton 
                  label={socialLinks[2].label} 
                  icon={socialLinks[2].icon} 
                  link={socialLinks[2].link} 
                />
              </div>
              <div className="flex flex-wrap gap-3">
                <SocialButton 
                  label={socialLinks[3].label} 
                  icon={socialLinks[3].icon} 
                  link={socialLinks[3].link} 
                />
                <SocialButton 
                  label={socialLinks[4].label} 
                  icon={socialLinks[4].icon} 
                  link={socialLinks[4].link} 
                />
              </div>
            </div>

            {/* Center Graphic */}
            <div className="w-[80px] lg:w-[110px] flex-shrink-0 flex justify-center">
              <img
                src="/vector26.png"
                alt="Vector"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Right Section - Logo */}
            {/* flex-1 ensures it pushes the center image directly into the middle */}
            <div className="flex-1 flex justify-end">
              <LogoImage />
            </div>
          </div>
        </div>
      </footer>

      {/* ------------------------------------------------ */}
      {/* MOBILE FOOTER                                    */}
      {/* ------------------------------------------------ */}
      <footer className="block md:hidden bg-transparent px-4 py-8 relative z-30">
        <div style={{
          border: "2px solid #000000",
          borderRadius: "20px",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          backgroundColor: "white"
        }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "center" }}>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
              <SocialButton 
                label={socialLinks[0].label} 
                icon={socialLinks[0].icon} 
                link={socialLinks[0].link} 
              />
              <SocialButton 
                label={socialLinks[1].label} 
                icon={socialLinks[1].icon} 
                link={socialLinks[1].link} 
              />
              <SocialButton 
                label={socialLinks[2].label} 
                icon={socialLinks[2].icon} 
                link={socialLinks[2].link} 
              />
            </div>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
              <SocialButton 
                label={socialLinks[3].label} 
                icon={socialLinks[3].icon} 
                link={socialLinks[3].link} 
              />
              <SocialButton 
                label={socialLinks[4].label} 
                icon={socialLinks[4].icon} 
                link={socialLinks[4].link} 
              />
            </div>
          </div>
          <img
            src="/vector26.png"
            alt="Vector"
            style={{ width: "80px", height: "auto" }}
          />
          <div style={{ width: "280px", height: "auto" }}>
            <img
              src="/whitegdgc.png"
              alt="GDGC Logo"
              style={{ width: "100%", height: "auto", objectFit: "contain" }}
            />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;