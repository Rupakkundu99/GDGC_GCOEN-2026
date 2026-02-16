"use client";

import { useAuth } from "@/context/AuthContext";
import { poppins400 } from "@/Fonts/Poppins";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import AccountMenu from "../MyAccount/AccountMenu";
import { Home, Calendar, Rss, Users, Mail, Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMenuClosing, setIsMenuClosing] = useState(false);
  const [hoverGDGC, setHoverGDGC] = useState(false);
  const [hoverItem, setHoverItem] = useState(null);
  const { isLogin } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  // List of menu items and their routes
  const menuItems = [
    { name: "Home", path: "/", width: "md:w-[197px]", imgURl: "/homemobile.png", icon: Home },
    { name: "Events", path: "/Events", width: "md:w-[197px]", imgURl: "/eventmobile.png", icon: Calendar },
    { name: "Blogs", path: "/Blogs", width: "md:w-[197px]", imgURl: "/blogsmobile.png", icon: Rss },
    { name: "Teams", path: "/Teams", width: "md:w-[199px]", imgURl: "/teamsmobile.png", icon: Users },
    { name: "Contact Us", path: "/ContactUs", width: "md:w-[245px]",  imgURl: "/contactmobile.png", icon: Mail },
  ];

  const handleMenuOpen = () => {
    setIsMenuClosing(false);
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMenuClosing(true);
    setTimeout(() => {
      setMenuOpen(false);
      setIsMenuClosing(false);
    }, 300);
  };

  const toggleMenu = () => {
    if (menuOpen) {
      handleMenuClose();
    } else {
      handleMenuOpen();
    }
  };

  return (
    <div className="relative w-full z-50">
      {/* Mobile Menu Header */}
      <div className="top-0 md:hidden relative w-full right-0 flex justify-between items-center p-3 bg-white">
        <div className="flex items-center gap-3">
          {pathname == "/" ? (
            <Image
              src="/homemobile.png"
              alt="Home"
              width={197}
              height={47}
            />
          ) : pathname.includes("/Events") ? (
            <Image
              src="/eventmobile.png"
              alt="Events"
              width={117}
              height={57}
            />
          ) : pathname.includes("/Blogs") ? (
            <Image
              src="/blogsmobile.png"
              alt="Blogs"
              width={117}
              height={57}
            />
          ) : pathname.includes("/Teams") ? (
            <Image
              src="/teamsmobile.png"
              alt="Teams"
              width={117}
              height={57}
            />
          ) : pathname.includes("/ContactUs") ? (
            <Image
              src="/contactmobile.png"
              alt="Contact"
              width={187}
              height={57}
            />
          ) : (
            <p className="text-black text-sm sm:text-base">
              {pathname.split("/")[1].toUpperCase()}
            </p>
          )}
        </div>
        <div className="text-lg flex gap-2 items-center ">
          <button
            className="text-black focus:outline-none p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => toggleMenu()}
          >
            <Image src="/mobilenav.png" alt="Menu" width={28} height={28} className="w-[28px] h-[28px]" />
          </button>
          {isLogin && (
            <AccountMenu btnStyle=" flex items-center justify-center text-black border-2 font-semibold border-black p-2 w-8 h-8  bg-white rounded-full focus:outline-none" />
          )}
        </div>
      </div>

      {/* Background Overlay */}
      {menuOpen && (
        <div
          className="fixed md:hidden inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => handleMenuClose()}
        ></div>
      )}

      {/* Mobile Hamburger Menu */}
      {menuOpen && (
        <div className={`md:hidden fixed bg-yellow-600 top-16 left-20 right-3 border-2 border-black rounded-2xl p-2 z-50 shadow-lg ${
          isMenuClosing 
            ? "animate-out slide-out-to-right duration-300 ease-in" 
            : "animate-in slide-in-from-right duration-300 ease-out"
        }`}>
          <div className="flex flex-col">
            {menuItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = pathname === item.path || pathname.startsWith(item.path);
              
              return (
                <button
                  key={item.name}
                  onClick={() => {
                    router.push(item.path);
                    handleMenuClose();
                  }}
                  className="flex items-center gap-3 w-full bg-white border-2 border-black rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center justify-center w-16 h-12 bg-white border-r-2 border-black rounded-lg flex-shrink-0">
                    <IconComponent size={32} className="text-black" />
                  </div>
                  <span className={`text-black font-semibold text-base ${poppins400.className}`}>
                    {item.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Navbar Container */}
      <div
        className={`hidden md:flex z-[9999px] md:relative md:mx-auto md:mt-[44px] md:bg-transparent md:shadow-none md:justify-center md:items-center md:w-fit md:h-[65px]`}
      >
        <div
          className="flex flex-col bg-blue md:bg-black md:flex-row md:items-center md:justify-center gap-2 sm:gap-3 md:gap-0 overflow-visible border-black w-full md:h-[65px] md:px-0"
          style={{ borderWidth: 0, borderRadius: 24 }}
        >
          
           <button
            className="flex items-center border-black px-2 py-2 sm:px-[15px] sm:py-[14px] md:w-[337px] md:h-[65px] transition-colors text-nowrap w-full animate-none"
            style={{ borderWidth: 2, borderRadius: 24, backgroundColor: hoverGDGC ? "#f8d8d8" : "white", marginRight: -1 }}
            onClick={() => {
              router.push("/");
              setMenuOpen(false);
            }}
            onMouseEnter={() => setHoverGDGC(true)}
            onMouseLeave={() => setHoverGDGC(false)}
          >
            <Image src="/vector26.png" alt="GDGC triangles" width={50} height={28} className="w-[50px] h-[28px] sm:w-[80px] sm:h-[43px]" />
            <span className={`text-black text-xs sm:text-2xl md:text-[29px] leading-tight sm:leading-[44px] ml-1 sm:ml-[29px] whitespace-nowrap ${poppins400.className}`}>
              GDGC GCOEN
            </span>
           </button>

          {menuItems.map((item) => {
            const isHovered = hoverItem === item.name;
            
            let bgColor = "white";
            if (isHovered) bgColor = "#fffacd";
            
            return (
              <button
                key={item.name}
                className={`flex items-center justify-center border-black text-black text-xs sm:text-lg md:text-[29px] leading-tight md:leading-[44px] md:h-[65px] px-2 sm:px-4 py-2 sm:py-2 ${item.width} transition-colors w-full ${poppins400.className}`}
                style={{ borderWidth: 2, borderRadius: 24, backgroundColor: bgColor, marginLeft: -1, marginRight: -1 }}
                onClick={() => {
                  router.push(item.path);
                  setMenuOpen(false);
                }}
                onMouseEnter={() => setHoverItem(item.name)}
                onMouseLeave={() => setHoverItem(null)}
              >
                {item.name}
              </button>
            );
          })}
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;

//done
