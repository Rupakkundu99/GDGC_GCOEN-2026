"use client";
import { rethink_sans400 } from "@/Fonts/Rethink";
import moment from "moment";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import DefaultBtnRegister from "../Utility/DefaultBtnRegister";

const EventCard = ({
  Title,
  Description,
  FeaturedURL,
  StartDate,
  location,
  id,
}) => {
  const router = useRouter();
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div 
    onClick={() => {
      router.push(`/Events/${id}`);
    }}
      data-aos="fade-up"
      className={`${rethink_sans400.className}  w-full md:w-[350px] min-w-[300px]   justify-between flex flex-col gap-2 border-solid border-2 border-black rounded-2xl`}
    >
      <div className=" w-full h-52 relative overflow-hidden flex-none">
        {!isImageLoaded && (
          <Image
            src="/dummy.jpg" // dummy image
            alt="placeholder"
            width={200}
            height={220}
            className="w-full h-full object-cover rounded-2xl absolute top-0 left-0"
          />
        )}
        <Image
          src={FeaturedURL}
          loading="lazy"
          width={200}
          height={220}
          alt="blog"
          className={`w-full h-full  object-cover rounded-2xl ${
            isImageLoaded ? "opacity-100" : "opacity-0"
          } transition-opacity duration-300`}
          onLoad={() => setIsImageLoaded(true)}
        />
      </div>

      <div className="secondChild m-2 flex-grow overflow-hidden">
        <div className="text-sm flex gap-2 items-center">
          <i className="uil uil-location-point" />
          <p className="text-gray-400">{location}</p>
        </div>
        <h2 className="text-lg font-semibold">{Title}</h2>
        <p className="text-sm break-words mt-2 grow overflow-hidden">
          {Description?.length > 100
            ? `${Description.substring(0, 100)}...`
            : Description}
        </p>
      </div>

      <div className="lastChild flex  gap-16 justify-between p-2 flex-none">
        <DefaultBtnRegister
          func={() => {
            router.push("/Events/" + id);
          }}
          name="Register"
          disabled="disabled:bg-blue3"
          HoverColor="hover:bg-blue focus:ring-blue"
          txtColor="text-sm w-auto text-black border-2 border-black"
          size="small"
        />
        <div className="text-sm flex gap-2 items-center">
          <i className="uil uil-calendar-alt" />
          <p>{moment(StartDate).format("DD-MM-YYYY")}</p>
        </div>
      </div>
    </div>
    
  );
};

export default EventCard;
