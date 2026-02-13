"use client";
import React, { useState } from "react";
import { BillingDetails, TicketType } from "./PaymentButton";
import Image from "next/image";
import TeamDetailsHackOn from "./TeamDetailsHackOn";
import { useEventRegistration } from "@/context/RegistrationPaymentContext";

const UserRegistration = () => {
  const { UserRegiSteps } = useEventRegistration();
  return (
    <div className="fixed top-0 pb-28  gap-5 bg-[#282828] overflow-y-scroll overflow-scroll left-0 h-screen  md:p-5 p-2 text-white z-50 w-full">
      <Image
        src="/HackOnLogoBlue.svg"
        width={50}
        className="pb-5 w-52 md:w-96"
        height={30}
        alt="logo"
      />
      <div className="max-w-[600px] flex flex-col  m-auto">
        <div className="font-semibold py-2" >Note: Prefer using a phone to register.</div>
        {UserRegiSteps == 1 && <TeamDetailsHackOn />}
        {UserRegiSteps == 2 && <TicketType />}
        {UserRegiSteps == 3 && <BillingDetails />}
      </div>
    </div>
  );
};

export default UserRegistration;
