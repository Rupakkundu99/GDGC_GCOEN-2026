import React from "react";
import Navbar from "./Navbar";

export const FullScreenSpinner = () => {
  return (
    <>
    <div className="fixed inset-0 flex items-center justify-center bg-white  z-50">
      {/* <Navbar/> */}
      <div className=" h-10 w-10  border-4 border-t-transparent border-blue rounded-full animate-spin"></div>
    </div></>
  );
};

export const IconBtnSpinner = () => {
  return (
    <div className=" h-3 w-3  border border-t-transparent border-blue rounded-full animate-spin"></div>
  );
};

export const BtnSpinner = ({color}) => {
  return (
    <div className={` h-5 w-5  border border-t-transparent border-${color} rounded-full animate-spin`}></div>
  );
};