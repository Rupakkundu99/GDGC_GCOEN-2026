import CheckYourTeam from "@/components/Hackthon/CheckYourTeam";
import React from "react";

export const metadata = {
  title: "Hack-On | Check Your Team",
  description: "Check your team Details",
};

const CheckTeams = () => {
  return (
    <div className="container min-h-screen mx-auto  px-5 pb-5 pt-20 md:py-5">
      <CheckYourTeam />
    </div>
  );
};

export default CheckTeams;
