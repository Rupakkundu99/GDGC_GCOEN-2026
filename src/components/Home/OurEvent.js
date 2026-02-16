import React from "react";
import Image from "next/image";
import { rethink_sans800 } from "@/Fonts/Rethink";

const OurEvent = () => {
  return (
    <div className={`${rethink_sans800.className} aos-init`} data-aos="fade-up">
      <div className=" container m-auto flex flex-col  px-5 ">
        {/* <div className=" mx-5 md:mx-10 flex flex-col p-{64px} "> */}
        <p className="sm:text-xxl  text-l font-extrabold">Our Events</p>
        <div className="flex gap-5 md:gap-10  w-full mt-10 flex-col md:flex-row    items-center">
          <div className="justify-  w-full flex-col   flex h-full gap-5 md:gap-10">
            <Image
              src="/EventPhoto1.svg"
              width={910}
              height={360}
              placeholder="blur"
              blurDataURL="/OurEventLeft.svg" // Small or blurred version of the image
              alt="EventPhoto1"
              data-aos="fade-up"
              className="grid w-full sm:col-start-1 sm:row-start-1 aos-init"
            ></Image>

            <Image
              src="/EventPhoto3.svg"
              width={910}
              height={274}
              placeholder="blur"
              blurDataURL="/OurEventLeft.svg" // Small or blurred version of the image
              alt="EventPhoto3"
              className="grid w-full  sm:row-start-2"
            ></Image>
          </div>

          <div className="w-full md:w-[72%]">
            <Image
              src="/EventPhoto2.svg"
              width={650}
              height={672}
              placeholder="blur"
              data-aos="fade-up"
              blurDataURL="/EventBig.svg" // Small or blurred version of the image
              alt="EventPhoto2"
              className="aos-init"
            />
          </div>
        </div>
      </div>

      <Image
        src="/OurEvents2.svg"
        width={1899.98}
        data-aos="fade-right"
        height={111.69}
        alt="Element 2"
        layout="responsive"
        className="w-full aos-init"
      />
    </div>
  );
};

export default OurEvent;
