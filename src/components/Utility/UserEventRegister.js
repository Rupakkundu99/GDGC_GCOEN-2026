"use client";
import React, { useState } from "react";
import DefaultBtnRegister from "./DefaultBtnRegister";
import moment from "moment";
import UserEventRegistrationModal from "../Modal/UserEventRegistrationModal";

const UserEventRegister = ({ startDate, BannerURL, EventData }) => {
  const [isModalOpen, setisModalOpen] = useState(false);
  return (
    <div className="border-t z-10 bg-white p-5 w-full left-0 rounded-t-md border-gray-300 fixed bottom-0">
      <div className="container flex gap-2 flex-col md:flex-row justify-between items-center m-auto">
        <DefaultBtnRegister
          func={() => {
            setisModalOpen(true);
          }}
          name="Register Now"
          disabled="disabled:bg-blue3"
          HoverColor="hover:bg-blue focus:ring-blue"
          txtColor="text-sm w-full md:w-auto text-black border-2 border-black"
          size="small"
        />
      </div>
      <UserEventRegistrationModal
        EventData={EventData}
        BannerURL={BannerURL}
        state={isModalOpen}
        setState={setisModalOpen}
      />
    </div>
  );
};

export default UserEventRegister;
