"use client";
import DefaultBtn from "./DefaultBtn";
import { rethink_sans800 } from "@/Fonts/Rethink";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SocialLink = ({ href, imageAlt, imageSrc, whiteImageSrc }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getImageSrc = () => {
    if (isHovered && whiteImageSrc) {
      return whiteImageSrc;
    }
    return imageSrc;
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={getImageSrc()}
        alt={imageAlt}
        suppressHydrationWarning
        style={{
          width: "140px",
          height: "44px",
          opacity: isHovered ? 0.95 : 1,
          transform: isHovered ? "scale(1.02)" : "scale(1)",
          transition: "all 0.3s ease",
          cursor: "pointer",
        }}
      />
    </a>
  );
};

const LogoImage = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <img
      src={isHovered ? "/goldengdg.png" : "/whitegdgc.png"}
      alt="GDGC Logo"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      suppressHydrationWarning
      style={{
        position: "absolute",
        right: "20px",
        width: "475px",
        height: "100px",
        cursor: "pointer",
        transition: "all 0.3s ease",
      }}
    />
  );
};

const Footer = () => {
  const router = useRouter();

  return (
    <>
      {/* Desktop Footer */}
      <footer className="hidden md:block bg-white" style={{ paddingTop: "600px" }}>
        <div className="container m-auto">
          {/* Frame 124 - Bottom Box */}
          <div className="flex justify-center py-8 px-5">
            <div
              className="border-2 border-black rounded-[62px] bg-white relative flex justify-center items-center"
              style={{
                width: "1250px",
                height: "180px",
                maxWidth: "95vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Left Section - Social Icons */}
              <div
                style={{
                  position: "absolute",
                  left: "20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                {/* Top Row - Instagram, WhatsApp, LinkedIn */}
                <div style={{ display: "flex", gap: "8px" }}>
                  <SocialLink
                    href="https://www.instagram.com/gdgcgcoen/"
                    imageAlt="Instagram"
                    imageSrc="/insta.png"
                    whiteImageSrc="/whiteinsta.png"
                  />
                  <SocialLink
                    href="https://chat.whatsapp.com/Ge1u3fw4eOzEOIiUG6z6aJ"
                    imageAlt="WhatsApp"
                    imageSrc="/whatsapp.png"
                    whiteImageSrc="/whitewhatsapp.png"
                  />
                  <SocialLink
                    href="https://www.linkedin.com/company/gdgoncampus-gcoen/"
                    imageAlt="LinkedIn"
                    imageSrc="/linkedin.png"
                    whiteImageSrc="/whitelinkedin.png"
                  />
                </div>
                {/* Bottom Row - X, YouTube */}
                <div style={{ display: "flex", gap: "8px" }}>
                  <SocialLink
                    href="https://x.com/GDGCGcoen"
                    imageAlt="X"
                    imageSrc="/x.png"
                    whiteImageSrc="/whiteX.png"
                  />
                  <SocialLink
                    href="https://www.youtube.com/c/gdscgcoen3822"
                    imageAlt="YouTube"
                    imageSrc="/youtube.png"
                    whiteImageSrc="/whiteyoutube.png"
                  />
                </div>
              </div>

              <img
                src="/gdgfooter.png"
                alt="Vector"
                style={{
                  width: "75px",
                  height: "40px",
                }}
              />
              <LogoImage />
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Footer */}
      <footer className="block md:hidden bg-white px-4 py-8">
        <div style={{
          border: "2px solid #000000",
          borderRadius: "20px",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}>
          {/* Social Icons */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "center" }}>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
              <SocialLink
                href="https://www.instagram.com/gdgcgcoen/"
                imageAlt="Instagram"
                imageSrc="/insta.png"
                whiteImageSrc="/whiteinsta.png"
              />
              <SocialLink
                href="https://chat.whatsapp.com/Ge1u3fw4eOzEOIiUG6z6aJ"
                imageAlt="WhatsApp"
                imageSrc="/whatsapp.png"
                whiteImageSrc="/whitewhatsapp.png"
              />
              <SocialLink
                href="https://www.linkedin.com/company/gdgoncampus-gcoen/"
                imageAlt="LinkedIn"
                imageSrc="/linkedin.png"
                whiteImageSrc="/whitelinkedin.png"
              />
            </div>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
              <SocialLink
                href="https://x.com/GDGCGcoen"
                imageAlt="X"
                imageSrc="/x.png"
                whiteImageSrc="/whiteX.png"
              />
              <SocialLink
                href="https://www.youtube.com/c/gdscgcoen3822"
                imageAlt="YouTube"
                imageSrc="/youtube.png"
                whiteImageSrc="/whiteyoutube.png"
              />
            </div>
          </div>

          {/* Center Logo */}
          <img
            src="/gdgfooter.png"
            alt="Vector"
            style={{
              width: "60px",
              height: "auto",
            }}
          />

          {/* Logo - Adjusted for Mobile */}
          <img
            src="/whitegdgc.png"
            alt="GDGC Logo"
            style={{
              width: "280px",
              height: "auto",
            }}
          />
        </div>
      </footer>
    </>
  );
};

export default Footer;
