"use client";

import { useAuth } from "@/context/AuthContext";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import DefaultBtn from "./DefaultBtn";
import AccountMenu from "../MyAccount/AccountMenu";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isLogin, setauthModalOpen, logoutUser } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  console.log(pathname);

  // List of menu items and their routes
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Events", path: "/Events" },
    { name: "Blogs", path: "/Blogs" },
    { name: "Teams", path: "/Teams" },
    { name: "Contact", path: "/ContactUs" },
  ];

  return (
    <div className="fixed  w-full z-50">
      {/* Mobile Menu Header */}
      <div className=" top-0 md:hidden fixed w-full right-0 flex justify-between items-center p-5 bg-blue ">
        <div className="flex items-center gap-5">
          <button
            className="text-white text-2xl focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰{/* {menuOpen ? "✖" : "☰"} */}
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
        className={` z-[9999px] md:mt-10  fixed md:relative h-full bg-blue md:bg-transparent md:container md:m-auto shadow-lg transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }  md:h-20 md:translate-x-0 md:shadow-none md:flex md:justify-center mt-0 top-0  md:items-center w-[300px] md:w-full `}
      >
        <div className="flex md:h-16   md:bg-white flex-col md:border-2 bg-blue md:relative fixed top-0 overflow-hidden border-black md:rounded-full md:w-[700px] md:flex-row w-full">
          {menuItems.map((item) => (
            <button
              key={item.name}
              className={`py-[10px] px-[20px] font-bold text-left md:text-center transition w-full duration-300 ${
                pathname === item.path || pathname.startsWith(`${item.path}/`)
                  ? "md:bg-blue text-black"
                  : "md:bg-white text-gray1 md:text-black md:hover:bg-gray2"
              }`}
              onClick={() => {
                router.push(item.path); // Navigate to the route
                setMenuOpen(false); // Close the menu after navigation
              }}
            >
              {item.name}
            </button>
          ))}
        </div>
        {isLogin && (
          <AccountMenu btnStyle=" hidden md:flex items-center justify-center border-2 font-semibold border-black p-7 w-10 h-10  bg-white rounded-full focus:outline-none" />
        )}
      </div>
    </div>
  );
};

export default Navbar;
