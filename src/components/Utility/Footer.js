"use client";
import { rethink_sans400 } from "@/Fonts/Rethink";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

/**
 * Updated SocialButton
 * Now accepts a customClasses prop so we can style the desktop and mobile versions independently!
 */
const SocialButton = ({ icon, link, label, customClasses = "" }) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`group text-[10px] md:text-xs xl:text-sm text-black ${rethink_sans400.className} flex items-center justify-center border border-black rounded-full px-3 py-1.5 lg:px-4 lg:py-2 gap-1 lg:gap-2 bg-white hover:border-[#FCCE48] hover:text-[#FCCE48] transition-all duration-300 whitespace-nowrap hover:-translate-y-1 shadow-sm hover:shadow-md ${customClasses}`}
    >
      <i className={`uil ${icon} text-sm lg:text-base xl:text-xl text-black group-hover:text-[#FCCE48] transition-colors flex-shrink-0`} />
      <span className="font-medium truncate">{label}</span>
    </Link>
  );
};

/**
 * Stable Logo component with constant size and golden glow.
 * FIXED: Removed hardcoded 80px height so it naturally scales down on smaller screens.
 */
const LogoImage = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="flex items-center justify-end w-full max-w-[180px] md:max-w-[250px] lg:max-w-[350px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={isHovered ? "/goldengdg.png" : "/whitegdgc.png"}
        alt="GDGC Logo"
        suppressHydrationWarning
        style={{
          width: "100%",
          height: "auto",
          maxHeight: "80px", // Prevents it from getting bigger than the original size
          cursor: "pointer",
          transition: "filter 0.3s ease",
          filter: isHovered ? "drop-shadow(0 0 12px rgba(255, 212, 39, 0.45))" : "none",
          objectFit: "contain",
          objectPosition: "right", // Ensures it stays pinned to the right edge
        }}
      />
    </div>
  );
};

const Footer = () => {
  const pathname = usePathname();

  // This ensures the main white Footer hides on pages that use the Yellow EventBlogFooter
  if (pathname && (pathname.startsWith("/Teams") || pathname.startsWith("/Events") || pathname.startsWith("/ContactUs") || pathname.startsWith("/Blogs"))) {
    return null; 
  }

  const socialLinks = [
    { label: "Instagram", icon: "uil-instagram", link: "https://www.instagram.com/gdgcgcoen/" },
    { label: "Whatsapp", icon: "uil-whatsapp", link: "https://chat.whatsapp.com/DTW7i4taVZ0GPs8KZgYmGu?mode=gi_t" },
    { label: "Linkedin", icon: "uil-linkedin", link: "https://www.linkedin.com/company/gdgoncampus-gcoen/" },
    { label: "X.com", icon: "uil-x", link: "https://x.com/GDGCGcoen" },
    { label: "Youtube", icon: "uil-youtube", link: "http://www.youtube.com/@gdscgcoen3822" },
  ];

  return (
    <>
      {/* ------------------------------------------------ */}
      {/* DESKTOP FOOTER                                   */}
      {/* ------------------------------------------------ */}
      <footer className="hidden md:flex justify-center w-full py-10 bg-transparent relative z-30">
        <div className="container m-auto px-4 flex justify-center">
          
          <div className="border-2 border-black rounded-[62px] bg-white w-full max-w-[1250px] min-h-[180px] flex items-center justify-between px-4 lg:px-12 py-6 shadow-lg gap-2 lg:gap-4">
            
            {/* Left Section - Social Buttons */}
            <div className="flex-1 flex flex-col gap-2 lg:gap-3 pr-2 pt-1">
              
              {/* Row 1: CSS Grid strictly forces 3 columns */}
              <div className="grid grid-cols-3 gap-1 lg:gap-2 w-full">
                <SocialButton customClasses="w-full" label={socialLinks[0].label} icon={socialLinks[0].icon} link={socialLinks[0].link} />
                <SocialButton customClasses="w-full" label={socialLinks[1].label} icon={socialLinks[1].icon} link={socialLinks[1].link} />
                <SocialButton customClasses="w-full" label={socialLinks[2].label} icon={socialLinks[2].icon} link={socialLinks[2].link} />
              </div>

              {/* Row 2: CSS Grid strictly forces 2 columns. Sized to 66.66% to align perfectly with the 3 above */}
              <div className="grid grid-cols-2 gap-1 lg:gap-2 w-[66.66%]">
                <SocialButton customClasses="w-full" label={socialLinks[3].label} icon={socialLinks[3].icon} link={socialLinks[3].link} />
                <SocialButton customClasses="w-full" label={socialLinks[4].label} icon={socialLinks[4].icon} link={socialLinks[4].link} />
              </div>

            </div>

            {/* Center Graphic */}
            <div className="w-[60px] lg:w-[110px] flex-shrink-0 flex justify-center">
              <img src="/vector26.png" alt="Vector" className="w-full h-auto object-contain" />
            </div>

            {/* Right Section - Logo */}
            <div className="flex-1 flex justify-end min-w-0">
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
            
            {/* Notice: No customClasses="w-full" here, so they wrap perfectly based on their natural width */}
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
              <SocialButton label={socialLinks[0].label} icon={socialLinks[0].icon} link={socialLinks[0].link} />
              <SocialButton label={socialLinks[1].label} icon={socialLinks[1].icon} link={socialLinks[1].link} />
              <SocialButton label={socialLinks[2].label} icon={socialLinks[2].icon} link={socialLinks[2].link} />
            </div>
            
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
              <SocialButton label={socialLinks[3].label} icon={socialLinks[3].icon} link={socialLinks[3].link} />
              <SocialButton label={socialLinks[4].label} icon={socialLinks[4].icon} link={socialLinks[4].link} />
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