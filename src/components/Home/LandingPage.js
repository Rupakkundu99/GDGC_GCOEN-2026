"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import DefaultBtn from "../Utility/DefaultBtn";

const LogoImage = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <img
      src="/gdgc.png"
      alt="GDGC Logo"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      suppressHydrationWarning
      style={{
        position: "absolute",
        top: "66px",
        left: "50%",
        transform: `translateX(-50%) scale(${isHovered ? 1.05 : 1})`,
        width: "195px",
        height: "105px",
        opacity: isHovered ? 0.9 : 1,
        cursor: "pointer",
        transition: "all 0.3s ease",
      }}
    />
  );
};

const MainImage = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <img
      src="/main.png"
      alt="Main"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      suppressHydrationWarning
      style={{
        position: "absolute",
        left: "50%",
        transform: `translateX(-50%) scale(${isHovered ? 1.01 : 1})`,
        top: "538px",
        width: "1016px",
        height: "430px",
        zIndex: "10",
        opacity: isHovered ? 0.98 : 1,
        cursor: "pointer",
        transition: "all 0.3s ease",
      }}
    />
  );
};

const LandingPage = () => {
  const router = useRouter();

  return (
    <>
      {/* Desktop Version */}
      <div className="hidden md:flex flex-col container m-auto mt-4 md:-mt-24 items-center justify-center min-h-screen bg-white px-2 sm:px-4 relative" style={{ minHeight: "2000px" }}>
        <LogoImage />
        <h1
          style={{
            position: "absolute",
            width: "1114px",
            height: "128px",
            left: "calc(50% - 1114px / 2)",
            top: "176px",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "89px",
            lineHeight: "134px",
            display: "flex",
            alignItems: "center",
            color: "#F9AB00",
            WebkitTextStroke: "1px #000000",
          }}
        >
          Google Developer Group
        </h1>

        <div
          style={{
            position: "absolute",
            width: "950px",
            height: "96px",
            left: "317px",
            top: "376px",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "40px",
            lineHeight: "60px",
            display: "flex",
            alignItems: "center",
            color: "#000000",
          }}
        >
          GOVERNMENT COLLEGE OF ENGINEERING NAGPUR
        </div>
        <MainImage />
        <div
          style={{
            position: "absolute",
            width: "549px",
            height: "128px",
            left: "520px",
            top: "272px",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "89px",
            lineHeight: "134px",
            display: "flex",
            alignItems: "center",
            color: "#F9AB00",
            WebkitTextStroke: "1px #000000",
          }}
        >
          On Campus
        </div>
        <img
          src="/polygon4.png"
          alt="Polygon 4"
          style={{
            position: "absolute",
            top: "465px",
            left: "100px",
            width: "60.92px",
            height: "43.09px",
            transform: "rotate(-7.31deg)",
          }}
        />
        <img
          src="/polygon1.png"
          alt="Polygon 1"
          style={{
            position: "absolute",
            top: "142.08px",
            left: "1301.43px",
            width: "134px",
            height: "139px",
            transform: "rotate(2.72deg)",
          }}
        />
        <div className="mb-8">
          <img
            src="/Frame 19.svg"
            alt="Mobile SVG"
            className="block sm:hidden w-[20rem] md:w-[35rem] lg:w-[40rem] mt-2 px-4 sm:px-2"
            loading="lazy"
          />
          <img
            src="/Frame 191.svg"
            alt="Additional Mobile SVG"
            className="block sm:hidden w-[30rem] md:w-[35rem] lg:w-[40rem] mt-4 px-4 sm:px-2"
            loading="lazy"
          />
        </div>
        <div
          style={{
            position: "absolute",
            width: "1337px",
            height: "372px",
            left: "50%",
            transform: "translateX(-50%)",
            top: "830px",
            background: "transparent",
            border: "2px solid #000000",
            borderRadius: "62px",
            zIndex: "1",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "30px",
          }}
        >
          <div
            style={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontSize: "24px",
              lineHeight: "40px",
              textAlign: "center",
              color: "#000000",
              width: "100%",
              marginTop: "120px",
            }}
          >
            <span style={{ fontWeight: 600 }}>At Google Developer Group on Campus, GCOEN,</span>
            <br />
            <span style={{ fontWeight: 400 }}>we code, design, and occasionally debug our lives. We're a student community that</span>
            <br />
            <span style={{ fontWeight: 400 }}>learns, builds, and breaks things (on purpose!) while exploring Google technologies.</span>
            <br />
            <span style={{ fontWeight: 400 }}>Workshops, hackathons, and great vibes because who said tech can't be fun?</span>
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="flex md:hidden flex-col bg-white px-4 py-8 min-h-screen">
        <div style={{ textAlign: "center", paddingTop: "20px", paddingBottom: "30px" }}>
          <img
            src="/gdgc.png"
            alt="GDGC Logo"
            style={{
              width: "100px",
              height: "auto",
              margin: "0 auto",
            }}
          />
        </div>

        <h1
          style={{
            fontFamily: "Poppins",
            fontSize: "32px",
            fontWeight: 600,
            textAlign: "center",
            color: "#F9AB00",
            WebkitTextStroke: "1px #000000",
            marginBottom: "15px",
            lineHeight: "1.3",
          }}
        >
          Google Developer Group
        </h1>

        <div
          style={{
            fontFamily: "Poppins",
            fontSize: "16px",
            fontWeight: 400,
            textAlign: "center",
            color: "#000000",
            marginBottom: "20px",
          }}
        >
          GOVERNMENT COLLEGE OF ENGINEERING NAGPUR
        </div>

        <h2
          style={{
            fontFamily: "Poppins",
            fontSize: "32px",
            fontWeight: 600,
            textAlign: "center",
            color: "#F9AB00",
            WebkitTextStroke: "1px #000000",
            marginBottom: "30px",
            lineHeight: "1.3",
          }}
        >
          On Campus
        </h2>

        <img
          src="/main.png"
          alt="Main"
          style={{
            width: "100%",
            maxWidth: "400px",
            height: "auto",
            margin: "0 auto 30px",
          }}
        />

        <div
          style={{
            border: "2px solid #000000",
            borderRadius: "20px",
            padding: "20px",
            marginBottom: "30px",
            background: "transparent",
          }}
        >
          <div
            style={{
              fontFamily: "Poppins",
              fontSize: "14px",
              lineHeight: "1.6",
              textAlign: "center",
              color: "#000000",
            }}
          >
            <span style={{ fontWeight: 600 }}>At Google Developer Group on Campus, GCOEN,</span>
            <br />
            <span style={{ fontWeight: 400 }}>we code, design, and occasionally debug our lives. We're a student community that learns, builds, and breaks things (on purpose!) while exploring Google technologies. Workshops, hackathons, and great vibes because who said tech can't be fun?</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;