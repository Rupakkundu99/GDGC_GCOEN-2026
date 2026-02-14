"use client";

import { useAuth } from "@/context/AuthContext";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import AccountMenu from "../MyAccount/AccountMenu";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isLogin } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  // List of menu items and their routes
  const menuItems = [
    { name: "Home", path: "/", width: "w-[242px]", left: "left-[522px]" },
    { name: "Events", path: "/Events", width: "w-[243px]", left: "left-[767px]" },
    { name: "Teams", path: "/Teams", width: "w-[245px]", left: "left-[1012px]" },
    { name: "Contact", path: "/ContactUs", width: "w-[302px]", left: "left-[1259px]" },
  ];

  return (
    <div className="fixed w-full z-50">
      {/* Mobile Header */}
      <div className="md:hidden fixed top-4 left-1/2 -translate-x-1/2 w-[92vw] h-[64px] bg-black border-2 border-black rounded-[20px] flex items-center px-3">
        <div className="bg-white border-2 border-black rounded-[18px] h-[48px] w-[220px] flex items-center gap-3 px-3">
          <Image src="/vector26.png" alt="GDGC logo" width={60} height={32} />
          <span
            className="text-[16px] leading-[22px] text-black"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            GDGC GCOEN
          </span>
        </div>
        <button
          className="ml-auto bg-white border-2 border-black rounded-[18px] w-[56px] h-[48px] text-black text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          ☰
        </button>
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
        className={`fixed md:hidden top-[88px] left-1/2 -translate-x-1/2 w-[92vw] bg-black border-2 border-black rounded-[20px] p-3 shadow-lg transition-transform duration-300 ${
          menuOpen ? "translate-y-0" : "-translate-y-[20px] opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-3">
          {menuItems.map((item) => (
            <button
              key={item.name}
              className="w-full h-[52px] bg-white border-2 border-black rounded-[18px] text-[18px] text-black"
              style={{ fontFamily: "Poppins, sans-serif" }}
              onClick={() => {
                router.push(item.path);
                setMenuOpen(false);
              }}
            >
              {item.name}
            </button>
          ))}
        </div>
        {isLogin && (
          <div className="mt-3 flex justify-center">
            <AccountMenu btnStyle="flex items-center justify-center text-black border-2 font-semibold border-black p-2 w-10 h-10 bg-white rounded-full focus:outline-none" />
          </div>
        )}
      </div>

      {/* Desktop Navbar */}
      <div className="hidden md:block fixed top-0 left-0 w-full">
        <div className="relative w-[1728px] h-[250px] mx-auto">
          <div className="absolute left-[82px] top-[85px] w-[1562px] h-[80px] bg-black border-[3px] border-black rounded-[24px]">
            <div className="absolute left-0 top-0 w-[415px] h-[80px] bg-white border-[2px] border-black rounded-[24px] flex items-center gap-4 px-[15px]">
              <div className="w-[96px] h-[52px] relative">
                <Image src="/vector26.png" alt="GDGC logo" fill style={{ objectFit: "contain" }} />
              </div>
              <span
                className="text-[36px] leading-[54px] text-black"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                GDGC GCOEN
              </span>
            </div>

            {menuItems.map((item) => (
              <button
                key={item.name}
                className={`absolute top-0 h-[80px] ${item.left} ${item.width} bg-white border-[2px] border-black rounded-[24px] text-[36px] leading-[54px] text-black`}
                style={{ fontFamily: "Poppins, sans-serif" }}
                onClick={() => router.push(item.path)}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
