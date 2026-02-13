"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import DefaultBtn from "../Utility/DefaultBtn";

const LandingPage = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col container m-auto mt-4 md:-mt-24 items-center justify-center min-h-screen bg-white px-2 sm:px-4">
      <div className="mb-8">
        <LazyLoadImage
          src="/Frame 4.svg"
          alt="Desktop SVG"
          placeholderSrc="/Frame 4-min.svg"
          effect="blur"
          className="hidden sm:block w-96 h-auto sm:w-[40rem] md:w-[45rem] lg:w-[50rem]"
        />
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
        <div className="mt-10 flex justify-center items-center w-full">
          <DefaultBtn
            func={() => {
              router.push("/ContactUs");
            }}
            name="Event with us"
            disabled="disabled:bg-blue3"
            HoverColor="hover:bg-blue mx-5 focus:ring-blue"
            txtColor="w-full md:w-fit text-black border-2 border-black"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;