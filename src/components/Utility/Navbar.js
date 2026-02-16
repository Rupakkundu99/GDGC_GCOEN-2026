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
        className={`z-[9999px] fixed right-0 top-12 md:relative md:top-auto md:left-auto md:mx-auto md:mt-[44px] bg-blue md:bg-transparent shadow-lg transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:!translate-x-0 md:shadow-none md:flex md:justify-center md:items-center w-[90vw] md:w-fit md:h-[65px]`}
      >
        <div
          className="flex flex-col bg-blue md:bg-black md:flex-row md:items-center md:justify-center gap-2 sm:gap-3 md:gap-0 overflow-visible border-black w-full md:h-[65px] md:px-0"
          style={{ borderWidth: 0, borderRadius: 24 }}
        >
          

          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
