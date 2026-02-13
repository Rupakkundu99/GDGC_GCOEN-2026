import { UserRegistrationPaymentProvider } from "@/context/RegistrationPaymentContext";
import React from "react";

const Eventlayout = ({ children }) => {
  return (
    <div className="container py-5 px-5 mt-20 md:mt-0  m-auto">
      <UserRegistrationPaymentProvider>
        {children}
      </UserRegistrationPaymentProvider>
    </div>
  );
};

export default Eventlayout;
