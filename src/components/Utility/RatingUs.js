"use client";
import { Rating } from "@mui/material";
import React, { useState } from "react";
import DefaultBtn from "./DefaultBtn";

const RatingUs = () => {
  const [value, setvalue] = useState("");
  console.log(value);

  return (
    <div className="flex-col flex gap-2">
      <h2 className="font-semibold">Rate Us Now</h2>
      <form className="flex flex-col gap-2 md:flex-row">
        <input
          type="text"
          placeholder="Name"
          className="border rounded-md p-2"
        />
        <input
          type="email"
          placeholder="Email"
          className="border rounded-md p-2"
        />
      </form>
      <textarea
        placeholder="Any suggestion"
        className="border rounded-md p-2"
      />
      <Rating
        className="py-2"
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setvalue(newValue);
        }}
      />
      <button className="bg-blue p-2  font-semibold rounded-md">
        Rate Now
      </button>
    </div>
  );
};

export default RatingUs;
