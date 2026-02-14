"use client";

import { useAuth } from "@/context/AuthContext";
import { poppins400 } from "@/Fonts/Poppins";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import AccountMenu from "../MyAccount/AccountMenu";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoverGDGC, setHoverGDGC] = useState(false);
  const [hoverItem, setHoverItem] = useState(null);
  const { isLogin } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  // List of menu items and their routes
  const menuItems = [
    { name: "Home", path: "/", width: "md:w-[197px]" },
    { name: "Events", path: "/Events", width: "md:w-[197px]" },
    { name: "Teams", path: "/Teams", width: "md:w-[199px]" },
    { name: "Contact us", path: "/ContactUs", width: "md:w-[245px]" },
  ];

  return (
    <div className="relative w-full z-50">
      {/* Mobile Menu Header */}
      <div className="top-0 md:hidden relative w-full right-0 flex justify-between items-center p-3 bg-blue">
        <div className="flex items-center gap-3">
          <button
            className="text-white text-xl focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
          <p className="text-white font-bold text-sm sm:text-base">
            {pathname == "/" ? "HOME" : pathname.split("/")[1].toUpperCase()}
          </p>
        </div>
        <div className="text-lg flex gap-2 items-center ">
          {isLogin && (
            <AccountMenu btnStyle=" flex items-center justify-center text-black border-2 font-semibold border-black p-2 w-8 h-8  bg-white rounded-full focus:outline-none" />
          )}
        </div>
      </div>

      {/* Background Overlay */}
      {menuOpen && (
        <div
          className="fixed md:hidden inset-0 bg-black bg-opacity-50"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Navbar Container */}
      <div
        className={`z-[9999px] md:relative md:top-10 md:left-1/2 fixed left-0 top-12 md:!top-10 md:!left-1/2 md:!fixed-none bg-blue md:bg-transparent shadow-lg transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:translate-y-0 md:shadow-none md:flex md:justify-center md:items-center w-[90vw] md:w-fit md:h-[65px]`}
        style={{ transform: menuOpen ? "translateX(0)" : "translateX(-100%)" }}
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

          <div
            className="hidden md:block bg-white border-black md:w-[85px] md:h-[65px]"
            style={{ borderWidth: 2, borderRadius: 24, marginLeft: -1, marginRight: -1 }}
          ></div>

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
