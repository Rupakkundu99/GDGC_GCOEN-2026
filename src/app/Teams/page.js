"use client";

import { Instagram, Linkedin, Youtube } from "lucide-react";
import React from "react";
import { FaWhatsapp, FaXTwitter } from "react-icons/fa6";

export default function TeamsPage() {
  const teams = [
    { name: "GDG Lead", image: "/gdglead.png" },
    { name: "Development Team", image: "/dev.png" },
    { name: "Operations Team", image: "/op1.png" },
    { name: "Design Team", image: "/designfinal.png" },
    { name: "PR & Marketing Team", image: "/mpr.png" },
    { name: "Media Productions Team", image: "/media.png" },
    { name: "Social Media Team", image: "/smedia.png" },
  ];

  return (
    <div className="relative min-h-screen bg-white px-6 py-6 mt-3 overflow-hidden font-sans">


      {/* ================= BACKGROUND IMAGES ================= */}

      {/* LEFT TOP SQUARE FRAME */}
      <img
        src="/first.png"
        className="absolute z-0 pointer-events-none w-[170px] top-[70px] left-[-20px] md:w-[519px] md:h-[493px] md:top-[420px] md:left-[32px]"
      />

      {/* LEFT STAR SHAPE */}
      <img
        src="/third.png"
        className="absolute z-0 pointer-events-none w-[140px] top-[600px] left-[-20px] md:w-[372px] md:h-[372px] md:top-[1150px] md:left-[-77px]"
      />

      {/* RIGHT LARGE RING */}
      <img
        src="/second.png"
        className="absolute z-0 pointer-events-none w-[200px] top-[260px] right-[-80px] opacity-90 md:w-[600px] md:top-[780px] md:right-[-180px]"
      />

      {/* BOTTOM RIGHT ARC */}
      <img
        src="/fourth.png"
        className="absolute z-0 pointer-events-none w-[80px] bottom-[20px] right-[-10px] opacity-90 md:w-[180px] md:bottom-[40px] md:right-[40px]"
      />

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-semibold mb-14">
          Teams
        </h1>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {teams.map((team, index) => {

            if (index === teams.length - 1) {
              return (
                <React.Fragment key={index}>

                  {/* SOCIAL MEDIA TEAM CARD */}
                  <div
                    className="border-2 border-black rounded-2xl overflow-hidden 
                    bg-white shadow-sm cursor-pointer
                    transition-all duration-300 ease-in-out
                    hover:bg-[rgba(255,249,221,1)] hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className="w-full h-[320px] overflow-hidden">
                      <img
                        src={team.image}
                        alt={team.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="text-center py-3 font-medium border-t-2 border-black">
                      {team.name}
                    </div>
                  </div>

                  {/* SIDE PANEL */}
                  <div className="flex flex-col gap-6">

                    {/* SOCIAL LINKS BOX */}
<div className="bg-[#FFF9DD] border border-black rounded-[40px] p-8 w-64 shadow-sm">
  <div className="flex flex-col items-center gap-4">
    {[
      { name: "Instagram", icon: <Instagram size={18} />, href: "https://www.instagram.com/gdgcgcoen/" },
      { name: "Whatsapp", icon: <FaWhatsapp size={18} />, href: "https://chat.whatsapp.com/Ge1u3fw4eOzEOIiUG6z6aJ" },
      { name: "LinkedIn", icon: <Linkedin size={18} />, href: "https://www.linkedin.com/company/gdgoncampus-gcoen/" },
      { name: "X.com", icon: <FaXTwitter size={18} />, href: "https://x.com/GDGCGcoen" },
      { name: "Youtube", icon: <Youtube size={18} />, href: "https://www.youtube.com/@gdscgcoen3822" },
    ].map((link) => (
      <a
        key={link.name}
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        /* w-48 ensures all pills are the exact same width for a uniform look */
        className="flex items-center gap-3 border border-black rounded-full px-5 py-2 w-44 bg-transparent text-black transition-all duration-200 
                   hover:border-[#F9AB00] hover:text-[#F9AB00] group"
      >
        <span className="flex-shrink-0 flex items-center justify-center w-5 group-hover:text-[#F9AB00]">
          {link.icon}
        </span>
        <span className="text-sm font-medium underline underline-offset-4 decoration-1">
          {link.name}
        </span>
      </a>
    ))}
  </div>
</div>
                    {/* <div className="bg-[rgba(255,249,221,1)]
                                    border border-gray-500
                                    rounded-[40px]
                                    p-6 py-8
                                    w-64
                                    shadow-sm">

                      <div className="flex flex-col gap-4">

                        <a
                          href="https://www.instagram.com/gdgcgcoen/"
                          target="_blank"
                          className="flex items-center gap-3 border border-black rounded-full px-4 py-2 bg-white hover:bg-[rgba(255,249,221,1)] transition"
                        >
                          <Instagram size={18} />
                          <span className="text-sm">Instagram</span>
                        </a>

                        <a
                          href="https://chat.whatsapp.com/Ge1u3fw4eOzEOIiUG6z6aJ"
                          target="_blank"
                          className="flex items-center gap-3 border border-black rounded-full px-4 py-2 bg-white hover:bg-[rgba(255,249,221,1)] transition"
                        >
                          <FaWhatsapp size={18} />
                          <span className="text-sm">Whatsapp</span>
                        </a>

                        <a
                          href="https://www.linkedin.com/company/gdgoncampus-gcoen/"
                          target="_blank"
                          className="flex items-center gap-3 border border-black rounded-full px-4 py-2 bg-white hover:bg-[rgba(255,249,221,1)] transition"
                        >
                          <Linkedin size={18} />
                          <span className="text-sm">LinkedIn</span>
                        </a>

                        <a
                          href="https://x.com/GDGCGcoen"
                          target="_blank"
                          className="flex items-center gap-3 border border-black rounded-full px-4 py-2 bg-white hover:bg-[rgba(255,249,221,1)] transition"
                        >
                          <FaXTwitter size={18} />
                          <span className="text-sm">X.com</span>
                        </a>

                        <a
                          href="https://www.youtube.com/@gdscgcoen3822"
                          target="_blank"
                          className="flex items-center gap-3 border border-black rounded-full px-4 py-2 bg-white hover:bg-[rgba(255,249,221,1)] transition"
                        >
                          <Youtube size={18} />
                          <span className="text-sm">Youtube</span>
                        </a>

                      </div>
                    </div> */}
{/* GDG INFO BOX */}
    <div
      className="relative z-10 bg-white border border-black 
      rounded-[18px] px-5 py-2 text-sm shadow-sm w-72
      cursor-pointer transition-all duration-300 ease-in-out
      hover:bg-[rgba(255,249,221,1)] hover:-translate-y-1 hover:shadow-md"
    >
      <p className="font-semibold">
        Google Developer Group
      </p>
      <p className="mt-2">
        On Campus • GCOEN
      </p>
    </div>


                  </div>

                </React.Fragment>
              );
            }

            // NORMAL TEAM CARDS
            return (
              <div
                key={index}
                className="border-2 border-black rounded-2xl overflow-hidden 
                bg-white shadow-sm cursor-pointer
                transition-all duration-300 ease-in-out
                hover:bg-[rgba(255,249,221,1)] hover:-translate-y-1 hover:shadow-md"
              >
                <div className="w-full h-[320px] overflow-hidden">
                  <img
                    src={team.image}
                    alt={team.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="text-center py-3 font-medium border-t-2 border-black">
                  {team.name}
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </div>
  );
}
