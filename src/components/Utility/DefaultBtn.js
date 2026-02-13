import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { BtnSpinner } from "./Loaders";
const DefaultBtn = ({
  func,
  name,
  cuStyle,
  loading,
  txtColor,
  HoverColor,
  disabled,
}) => {
  return (
    <button
      type="submit"
      disabled={loading}
      onClick={func}
      className={` ${cuStyle} ${txtColor} flex items-center justify-center ${HoverColor} ${disabled} group   px-5 py-2 text-base font-semibold rounded-full shadow-md 
    transition-all duration-300 ease-in-out flex items-center focus:outline-none focus:ring-2 focus:ring-offset-2 
    `}
    >
      {loading ? "Loading..." : name}
      <span className="inline-block transform transition-transform duration-300 group-hover:-rotate-45">
        <ArrowForwardIcon />
      </span>
    </button>
  );
};

export default DefaultBtn;
