"use client";

import { client, GDGCDatabase, HackOnTimerCollection } from "@/config/appwrite";
import { ListCollectionData } from "@/Services/Appwrite";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const HackOnCountdown = ({ startTime = "9:00", endTime = "17:00" }) => {
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
      {/* Rainbow Strip */}
      <div className="fixed top-[-50px] left-[-150px] sm:top-[-230px] sm:left-[-230px] md:top-[-440px] md:left-[-200px] z-0 rotate-[-385deg]">
        <img src="/Rectangle.svg" alt="Background Strip" />
      </div>

      {/* Logo */}
      <div className="fixed top-2 size-40 sm:size-56 z-10">
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

      {/* Countdown Timer */}
      <div className="flex relative z-20 flex-col items-center justify-center h-full px-4 left-1/2 transform -translate-x-1/2">
        <div className="text-white text-[100px] sm:text-[150px] md:text-[200px] font-bold leading-none">
          {formattedTime}
        </div>
        {clockDetail?.Description && (
          <div className="mt-6 sm:mt-8">
            <div className="bg-purple-600 text-white text-lg sm:text-xl md:text-2xl font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-full">
              {clockDetail.Description}
            </div>
          </div>
        )}

        <Image
          src="/Sponsore.svg"
          width={100}
          height={100}
          className="absolute px-20 md:mb-5 mb-20 bottom-0 md:w-[50%] w-full"
          alt="sponsors"
        />
      </div>
    </div>
  );
};

export default HackOnCountdown;
