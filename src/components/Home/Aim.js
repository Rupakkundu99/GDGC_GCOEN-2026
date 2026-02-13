import React from "react";
import { rethink_sans400, rethink_sans600 } from "@/Fonts/Rethink";

const Aim = () => {
  return (
    <div className="z-0 relative container m-auto px-5"
    // data-aos="fade-up"
    >
      {/* <div  className="mx-5 md:mx-10 "> */}
      <div className=" opacity-0 translate-y-4 transition-all duration-500 ease-in-out sm:opacity-100 sm:translate-y-0 hidden sm:block ">
        <div
          className="my-2 mt-11 flex items-end justify-end w-full aspect-[1600/550] h-auto bg-cover bg-center z"
          style={{
            backgroundImage: "url('/CollegeBg.png')", // Placeholder image
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/CollegeBg.svg')", // High-res image
              backgroundSize: "cover",
              backgroundPosition: "center",
              transition: "opacity 0.5s ease-in-out", // Smooth fade-in transition
              opacity: 100,
              animation: "fadeIn 1s forwards",
              animationKeyframes: `
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      `,
            }}
          ></div>
          <div className="textBox rounded-lg w-[50%] h-[55%] z-10">
            <h2 className={`text-[1.75vw] mb-1 ${rethink_sans600.className}`}>
              <strong>At Google Developer Group on Campus, GCOEN,</strong>
            </h2>
            <p
              className={`text-[1.6vw] text-justify leading-[1.5] ${rethink_sans400.className}`}
            >
              we code, design, and occasionally debug our lives. We’re a student
              community that learns, builds, and breaks things (on purpose!)
              while exploring Google technologies. Workshops, hackathons, and
              great vibes because who said tech can’t be fun?
            </p>
          </div>
        </div>
      </div>
      <div
        className="z-0 mt-11 mx-auto items-end justify-end aspect-[207/214] h-auto bg-cover bg-center block sm:hidden"
        style={{
          backgroundImage: "url('/CollegeBgMOb.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/CollegeBgMob.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            transition: "opacity 0.5s ease-in-out",
            opacity: 100,
            animation: "fadeIn 1s forwards",
            animationKeyframes: `
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      `,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Aim;
