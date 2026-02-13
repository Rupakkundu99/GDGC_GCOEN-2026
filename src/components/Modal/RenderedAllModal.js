"use client";
import React, { useState, useEffect } from "react";
import AuthenticationModal from "./AuthenticationModal";
import { useAuth } from "@/context/AuthContext";
import HackOnModal from "./HackOnModal";
import { usePathname } from "next/navigation";

const RenderAllModal = () => {
  const { authModalOpen, setauthModalOpen } = useAuth();
  const [HackOn, setHackOn] = useState(false);
  const pathnames = usePathname();

  useEffect(() => {
    if (
      pathnames !== "/hackon" &&
      pathnames !== "/Events/Payment/HackOn" &&
      pathnames !== "/hackon/CheckYourTeam" &&
      pathnames !== "/hackon/Timer" &&
      pathnames !== "/hackon/ProblemStatement"
      &&
      pathnames !== "/hackon/Winners"
    ) {
      const timeout = setTimeout(() => {
        setHackOn(true);
      }, 10000);

      return () => clearTimeout(timeout); // Cleanup to prevent memory leaks
    }
  }, [pathnames]); // Runs whenever `pathnames` changes

  return (
    <>
      <AuthenticationModal state={authModalOpen} setState={setauthModalOpen} />
      {/* <HackOnModal state={HackOn} setState={setHackOn} /> */}
    </>
  );
};

export default RenderAllModal;
