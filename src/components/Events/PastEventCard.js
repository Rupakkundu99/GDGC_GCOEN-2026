"use client";
import { rethink_sans400 } from "@/Fonts/Rethink";
import moment from "moment";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import DefaultBtnRegister from "../Utility/DefaultBtnRegister";

const PastEventCard = ({
  Title,
  Description,
  StartDate,
  location,
  id,
  Topics,
  Reports,
}) => {
  const router = useRouter();
console.log(StartDate);

  return (
    <div
    data-aos="fade-up"

      className={`${rethink_sans400.className} min-w-[350px] p-2 flex flex-col gap-3 border-solid  border-2 border-black rounded-2xl`}
    >
      <div className="secondChild flex-grow overflow-hidden">
        <h2 className="text-lg font-semibold">{Title}</h2>
        <p className="text-sm text-gray-400">{Topics}</p>
        <p className="text-sm break-words mt-2 grow overflow-hidden">
          {Description?.length > 80
            ? `${Description.substring(0, 80)}...`
            : Description}
        </p>
      </div>

      <div className="lastChild flex justify-between items-center w-full gap-10 ">
        <DefaultBtnRegister
          func={() => {
            const link = document.createElement("a");
            link.href = Reports;
            link.download = `${Title}.pdf`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            URL.revokeObjectURL(Reports);
          }}
          name="Download Report"
          disabled="disabled:bg-blue3"
          HoverColor="hover:bg-blue px-3 "
          txtColor="text-sm  text-black border-2 border-black"
        />
        <div className="text-sm flex gap-2 items-center">
          <i className="uil uil-calendar-alt" />
          <p>{moment(StartDate).format("DD-MM-YYYY")}</p>
        </div>
      </div>
    </div>
  );
};

export default PastEventCard;
