import React from "react";
import { rethink_sans400, rethink_sans600 } from "@/Fonts/Rethink";

const Aim = () => {
  return (
    <div className="z-0 relative container m-auto px-5"
    // data-aos="fade-up"
    >
      {/* <div  className="mx-5 md:mx-10 "> */}
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
