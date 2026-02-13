"use client";
import React from "react";
import { CheckCircle, ArrowRight } from "lucide-react";
import { XCircle, ArrowLeft } from "lucide-react";
import { useEventRegistration } from "@/context/RegistrationPaymentContext";
import { useRouter } from "next/navigation";

export const PaymentSuccess = ({ paymentID }) => {
  const router = useRouter();
  return (
    <div className="bg-[#383838]  h-fit mt-2 md:mt-0 p-8 rounded-2xl shadow-lg text-center">
      <CheckCircle className="text-green-400 w-16 h-16 mx-auto" />
      <h2 className="text-2xl font-bold mt-4">Payment Successful!</h2>
      <p className="text-gray-400 mt-2">
        Thank you for Enrolling. Your transaction was successful.
      </p>
      <button
        onClick={() => router.push("/")}
        className=" rounded-md p-2 mt-6 bg-blue hover:bg-blue4 text-white flex items-center justify-center gap-2 w-full"
      >
        Go to Home <ArrowRight className="w-5 h-5" />
      </button>
      <button
        onClick={() =>
          router.push("https://chat.whatsapp.com/Hd5IZDgZfnX83xETYDD6QR")
        }
        className=" rounded-md p-2 mt-6 bg-green-500 hover:bg-green-600 text-white flex items-center justify-center gap-2 w-full"
      >
        Join Whatsapp Group <ArrowRight className="w-5 h-5" />
      </button>
      <p className="py-2 text-sm font-semibold">Payment ID : {paymentID}</p>
    </div>
  );
};

export const PaymentFailed = () => {
  const { setUserRegiSteps } = useEventRegistration();
  return (
    <div className="flex items-center justify-center my-5 bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg text-center w-full">
        <XCircle className="text-red-500 w-16 h-16 mx-auto" />
        <h2 className="text-2xl font-bold mt-4">Payment Failed</h2>
        <p className="text-gray-400 mt-2">
          Something went wrong with your transaction. Please try again.
        </p>
        <button
          onClick={() => {
            setUserRegiSteps(3);
          }}
          className="mt-6 p-2 rounded-md bg-red-500 hover:bg-red-600 text-white flex items-center justify-center gap-2 w-full"
        >
          Try Again <ArrowLeft className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
