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
    { name: "Home", path: "/", width: "md:w-[186px]" },
    { name: "Events", path: "/Events", width: "md:w-[186px]" },
    { name: "Teams", path: "/Teams", width: "md:w-[187px]" },
    { name: "Contact us", path: "/ContactUs", width: "md:w-[231px]" },
  ];

  return (
    <div className="fixed w-full z-50">
      {/* Mobile Menu Header */}
      <div className="top-0 md:hidden fixed w-full right-0 flex justify-between items-center p-5 bg-blue">
        <div className="flex items-center gap-5">
          <button
            className="text-white text-2xl focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
          <p className="text-white  font-bold">
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
        className={`z-[9999px] md:absolute md:top-6 md:left-1/2 md:-translate-x-1/2 fixed h-full bg-blue md:bg-transparent shadow-lg transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:shadow-none md:flex md:justify-center mt-0 top-0 md:items-center w-[300px] md:w-full md:max-w-[1188px] md:h-[60px]`}
      >
        <div
          className="flex flex-col bg-blue md:bg-black md:flex-row md:items-center md:justify-start gap-3 md:gap-0 overflow-hidden border-black w-full md:h-[60px] md:px-0"
          style={{ borderWidth: 3, borderRadius: 24 }}
        >
          <button
            className="flex items-center bg-white border-black px-[15px] py-[14px] md:w-[318px] md:h-[60px]"
            style={{ borderWidth: 2, borderRadius: 24 }}
            onClick={() => {
              router.push("/");
              setMenuOpen(false);
            }}
          >
            <Image src="/vector26.png" alt="GDGC triangles" width={96} height={52} />
            <span className="text-black font-['Poppins'] font-normal text-[28px] leading-[42px] ml-[29px] whitespace-nowrap">
              GDGC GCOEN
            </span>
          </button>

          <div
            className="hidden md:block bg-white border-black md:w-[80px] md:h-[60px]"
            style={{ borderWidth: 2, borderRadius: 24 }}
          ></div>

          {menuItems.map((item) => (
            <button
              key={item.name}
              className={`flex items-center justify-center bg-white border-black text-black font-['Poppins'] font-normal text-[28px] leading-[42px] md:h-[60px] ${
                item.width
              } ${
                pathname === item.path || pathname.startsWith(`${item.path}/`)
                  ? "bg-blue1"
                  : "hover:bg-gray1"
              }`}
              style={{ borderWidth: 2, borderRadius: 24 }}
              onClick={() => {
                router.push(item.path);
                setMenuOpen(false);
              }}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
