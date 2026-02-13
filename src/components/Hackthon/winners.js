"use client";

import { client, GDGCDatabase, HackOnTimerCollection } from "@/config/appwrite";
import { ListCollectionData } from "@/Services/Appwrite";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const HackOnCountdown = ({ startTime = "8:00", endTime = "16:00" }) => {
  const [formattedTime, setFormattedTime] = useState("00:00:00");
  const [clockDetail, setClockDetail] = useState(null);

  // Convert HH:MM to today's Date object
  const getTimeToday = (timeString) => {
    const [hours, minutes] = timeString.split(":").map(Number);
    const date = new Date();
    date.setHours(hours, minutes, 0, 0);
    return date;
  };

  // Fetch clock details
  const getDescription = async () => {
    try {
      const res = await ListCollectionData(HackOnTimerCollection);
      setClockDetail(res.documents[0]);
    } catch (error) {
      console.error("Failed to fetch documents:", error);
    }
  };

  useEffect(() => {
    getDescription();

    const intervalId = setInterval(() => {
      const now = new Date();
      const start = getTimeToday(startTime);
      const end = getTimeToday(endTime);

      if (now < start) {
        setFormattedTime("00:00:00");
      } else if (now < end) {
        const secondsRemaining = Math.floor((end - now) / 1000);
        const hours = String(Math.floor(secondsRemaining / 3600)).padStart(
          2,
          "0"
        );
        const minutes = String(
          Math.floor((secondsRemaining % 3600) / 60)
        ).padStart(2, "0");
        const seconds = String(secondsRemaining % 60).padStart(2, "0");
        setFormattedTime(`${hours}:${minutes}:${seconds}`);
      } else {
        setFormattedTime("00:00:00");
      }
    }, 1000);

    // Realtime data update
    const unsubscribe = client.subscribe(
      `databases.${GDGCDatabase}.collections.${HackOnTimerCollection}.documents`,
      (response) => {
        if (
          response.events.some(
            (event) => event.includes(".create") || event.includes(".update")
          )
        ) {
          setClockDetail(response.payload);
        }
        if (response.events.some((event) => event.includes(".delete"))) {
          setClockDetail(null);
        }
      }
    );

    return () => {
      unsubscribe();
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="relative w-full h-screen bg-Dark overflow-hidden">
     
     <div className="fixed top-[-50px] left-[-150px] sm:top-[-230px] sm:left-[-230px] md:top-[-440px] md:left-[-200px] z-0 rotate-[-385deg]">
        <img src="/Rectangle.svg" alt="Background Strip" />
      </div>

      {/* Logo */}
      <div className="fixed top-3 left-2 size-40 sm:size-56 z-10">
        <img src="/gdgc_logo.svg" alt="GDGC Logo" />
      </div>

      {/* Hack On Title */}
      <div className="absolute top-4 right-3 sm:right-10 size-20 sm:size-40 z-10">
        <img src="/Vector.svg" alt="Hack On Title" />
      </div>

      {/* Globe */}
      <div className="absolute top-[530px] size-16 z-10">
        <img src="/Group 9.svg" alt="Globe" />
      </div>

     <div className="flex justify-center items-start mt-[-70px] "> <img src="/winners.svg" className="size-[900px]" alt="GDGC Logo" /> </div>
     
      <div className="flex justify-center"><Image  src="/Sponsore.svg" width={100} height={100} className="absolute px-20 md:mb-5 mb-20 bottom-0 md:w-[50%] w-full" alt="sponsors"  />
      </div>  </div>
  );
};

export default HackOnCountdown;
{/* <div className="flex relative z-20 flex-col items-center justify-center h-full px-4 left-1/2 transform -translate-x-1/2">
        
<div class="flex flex-col items-center p-6  rounded-xl shadow-lg w-full max-w-2xl mx-auto">

<h2 class="text-5xl font-extrabold mb-20 mt-[-70px] text-gray-900 tracking-widest uppercase bg-gradient-to-r from-purple-500 to-indigo-500 text-transparent bg-clip-text shadow-2xl drop-shadow-lg font-poppins"> Winners! </h2>


<div class="flex justify-center items-end space-x-6 w-full py-12">

<div class="flex flex-col items-center bg-[#faac0e] p-6 rounded-xl shadow-2xl w-1/3 min-h-[200px] hover:transform hover:scale-105 transition-all duration-300 border-2 border-[#C0C0C0]/30">
  <div class="flex items-center text-2xl font-bold text-[#C0C0C0] mb-4">
      <span class="text-4xl mr-2">🥈</span> Rank 2
  </div>
  <div class="flex-1 flex items-center justify-center w-full">
      <p class="text-2xl font-bold text-white text-center px-4 break-words w-full">$03_orbidden</p>
  </div>
</div>


<div class="flex flex-col items-center bg-[#ea4335] p-8 rounded-xl shadow-2xl w-1/3 min-h-[240px] transform translate-y-[-40px] hover:transform hover:scale-105 transition-all duration-300 border-2 border-yellow-500/30">
  <div class="flex items-center text-3xl font-bold text-yellow-400 mb-4">
      <span class="text-4xl ">🏆</span> Rank 1
  </div>
  <div class="flex-1 flex items-center justify-center w-full">
      <p class="text-3xl font-bold text-white text-center px-4 break-words w-full">Alpha</p>
  </div>
</div>


<div class="flex flex-col items-center bg-[#4285f4] p-6 rounded-xl shadow-2xl w-1/3 min-h-[200px] hover:transform hover:scale-105 transition-all duration-300 border-2 border-[#CD7F32]/30">
  <div class="flex items-center text-2xl font-bold text-[#CD7F32] mb-4">
      <span class="text-4xl mr-2">🥉</span> Rank 3
  </div>
  <div class="flex-1 flex items-center justify-center w-full">
      <p class="text-3xl font-bold text-white text-center px-4 break-words w-full">Nova</p>
  </div>
</div>
</div>
</div>



</div> */}