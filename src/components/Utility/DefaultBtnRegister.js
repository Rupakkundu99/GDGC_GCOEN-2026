import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { BtnSpinner } from "./Loaders";
const DefaultBtnRegister = ({
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
      className={` ${cuStyle} ${txtColor}  justify-center ${HoverColor} ${disabled} group   px-4 py-2 text-lg font-semibold rounded-full shadow-md 
    transition-all duration-300 ease-in-out flex items-center  focus:outline-none 
    `}
    >
      <p className="w-fit" >{loading ? "Loading..." : name}</p>{" "}
      <span className="inline-block transform transition-transform duration-300 group-hover:-rotate-45">
        <ArrowForwardIcon />
      </span>
    </button>
  );
};

export default DefaultBtnRegister;
