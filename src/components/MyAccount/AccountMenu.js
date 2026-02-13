"use client";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import React, { useState } from "react";

const AccountMenu = ({btnStyle}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logoutUser } = useAuth();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative ml-5 inline-block">
      {/* Avatar button */}
      <button
        onClick={toggleMenu}
        className={`${btnStyle}`}
      >
        {user?.name?.charAt(0)?.toUpperCase()}
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-fit min-w-60 p-2 bg-white border border-gray-200 rounded-lg shadow-lg">
          <p className="border-b pb-3">
            {" "}
            <span className="   font-semibold text-blue">Hello !</span>{" "}
            {user?.name}
          </p>
          <Link
            href="/MyAccount/Profile"
            className="uil uil-user flex items-center gap-2 py-2 "
          >
            Profile
          </Link>
          <Link
            href="/MyAccount/MyEvents"
            className="uil uil-brackets-curly flex items-center gap-2 py-2 "
          >
            My Events
          </Link>
          <button
            onClick={logoutUser}
            className="bg-blue text-white font-semibold w-full p-1 rounded-md"
          >
            Log Out
          </button>
        </div>
      )}
    </div>
  );
};

export default AccountMenu;
