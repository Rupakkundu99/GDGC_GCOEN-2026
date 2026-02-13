"use client";
import { createContext, useState, useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const UserRegistrationPaymentContext = createContext();
export const UserRegistrationPaymentProvider = ({ children }) => {
  const Tickets = [
    { Tname: "Early Bird ", TPrice: "Expireed" },
    { Tname: "Regular ", TPrice: 189 },
    { Tname: "Late Bird ", TPrice: "Available Soon ₹199" },
    { Tname: "Last Minute  (Tatkal)", TPrice: "Available Soon ₹249" },
  ];
  const currentPrice = Tickets[1].TPrice;
  const [UserRegiSteps, setUserRegiSteps] = useState(1);
  const [currentQRCodeURL, setcurrentQRCodeURL] = useState("");

  function generateQRCodeUrl(text) {
    const data = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
      text
    )}`;
    return setcurrentQRCodeURL(data);
  }

  // Teams Details
  const [teamName, setTeamName] = useState("");
  const [leader, setLeader] = useState({
    name: "",
    email: "",
    college: "",
    year: "",
    department: "",
    phnumber: "",
  });
  const [members, setMembers] = useState([]);
  const [newMember, setNewMember] = useState({
    name: "",
    email: "",
    phoneNo: "",
  });

  const contextData = {
    teamName,
    setTeamName,
    leader,
    setLeader,
    members,
    setMembers,
    newMember,
    setNewMember,
    Tickets,
    currentPrice,
    // Complete Details
    TeamsDetails: {
      teamName,
      leader,
      members,
    },
    UserRegiSteps,
    setUserRegiSteps,
    // QR Code
    currentQRCodeURL,
    generateQRCodeUrl,
  };
  return (
    <UserRegistrationPaymentContext.Provider value={contextData}>
      {children}
    </UserRegistrationPaymentContext.Provider>
  );
};

export const useEventRegistration = () =>
  useContext(UserRegistrationPaymentContext);
