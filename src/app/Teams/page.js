"use client";

import React from "react";
import { Instagram, Linkedin, Youtube } from "lucide-react";
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
    <div className="relative min-h-screen bg-white px-6 py-16 mt-10 overflow-hidden font-sans">


      {/* ================= BACKGROUND IMAGES ================= */}

      {/* LEFT TOP SQUARE FRAME */}
      <img
        src="/first.png"
        className="absolute z-0 pointer-events-none"
        style={{
          width: "519px",
          height: "493px",
          top: "420px",
          left: "32px",
        }}
      />

      {/* LEFT STAR SHAPE */}
      <img
        src="/third.png"
        className="absolute z-0 pointer-events-none"
        style={{
          width: "372px",
          height: "372px",
          top: "1150px",
          left: "-77px",
        }}
      />

      {/* RIGHT LARGE RING */}
      <img
        src="/second.png"
        className="absolute z-0 pointer-events-none"
        style={{
          width: "600px",
          top: "780px",
          right: "-180px",
          opacity: 0.9,
        }}
      />

      {/* BOTTOM RIGHT ARC */}
      <img
        src="/fourth.png"
        className="absolute z-0 pointer-events-none"
        style={{
          width: "180px",
          bottom: "40px",
          right: "40px",
          opacity: 0.9,
        }}
      />

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-semibold mb-14">
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
                    className="border border-gray-400 rounded-2xl overflow-hidden 
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

                    <div className="text-center py-3 font-medium border-t border-gray-300">
                      {team.name}
                    </div>
                  </div>

                  {/* SIDE PANEL */}
                  <div className="flex flex-col gap-6">

                    {/* SOCIAL LINKS BOX */}
                    <div className="bg-[rgba(255,249,221,1)]
                                    border border-gray-500
                                    rounded-[40px]
                                    p-6
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
                    </div>
{/* GDG INFO BOX */}
    <div
      className="relative z-10 bg-white border border-black 
      rounded-[18px] px-5 py-5 text-sm shadow-sm w-72
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
                className="border border-gray-400 rounded-2xl overflow-hidden 
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

                <div className="text-center py-3 font-medium border-t border-gray-300">
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
