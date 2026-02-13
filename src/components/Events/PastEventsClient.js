"use client"; // Mark this as a Client Component

// import React from "react";
import React, { useRef } from "react";
import PastEventCard from "./PastEventCard";

const PastEventsClient = ({ events }) => {
  const scrollRef = useRef(null);
  // Scroll Functionality
  const scrollContainer = (direction) => {
    // const container = document.querySelector(".scroll-container");
    const container = scrollRef.current;
    const scrollAmount = 300; // Adjust this value to control scroll distance

    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col  w-full gap-3">
      <div className="firstchild md:mt-[-100px] mt-[-80px]   flex justify-end ">
        <button
          onClick={() => scrollContainer("left")}
          className="bg-blue-500 text-black font-bold text-2xl  px-3 py-1  border-solid border-black border-2 f  rounded-full shadow-md cursor-pointer hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          <p className="flex justify-center items-center  p-1"> &lt;</p>
        </button>

        <button
          onClick={() => scrollContainer("right")}
          className="bg-blue-500 text-black font-bold ml-3 text-2xl px-3 py-1 border-solid border-black border-2 f  rounded-full shadow-md cursor-pointer hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          <p className="flex justify-center items-center  p-1"> &gt;</p>
        </button>
      </div>

      {/* Scrollable Container */}
      <div
      ref={scrollRef}
        className=" mt-4 flex gap-5 overflow-x-auto w-full"
        style={{
          scrollbarWidth: "none", // Hide scrollbar for Firefox
        }}
      >
        {events.map((event, index) => (
          <PastEventCard
            key={index}
            Title={event?.Title}
            Topics={event?.Topics}
            Description={event?.Description}
            StartDate={event?.StartDate}
            location={event?.location}
            Reports={event?.Reports}
          />
        ))}
      </div>
    </div>
  );
};

export default PastEventsClient;
