"use client";
import React, { useState } from "react";
import Signin from "./Signin";
import Signup from "./Signup";

const Authentication = () => {
  const [isLogin, setisLogin] = useState(true);

  return (
    <div>
      {isLogin ? (
        <Signin setisLogin={setisLogin} />
      ) : (
        <Signup setisLogin={setisLogin} />
      )}
    </div>
  );
};

export default Authentication;
