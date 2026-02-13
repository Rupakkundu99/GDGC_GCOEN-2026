"use client";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { useState } from "react";

const Signup = ({ setisLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [branch, setBranch] = useState("");
  const [year, setYear] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNo, setphoneNo] = useState("");
  const [Msg, setMsg] = useState(null);
  const [loading, setloading] = useState(false);
  const { RegisterUser } = useAuth();

  if (Msg) {
    setTimeout(() => {
      setMsg("");
    }, 3000);
  }

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      setloading(true);
      await RegisterUser(email, password, name, gender, phoneNo);
      setMsg("Register successful");
    } catch (err) {
      setMsg(err.message);
    } finally {
      setloading(false);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <form onSubmit={handleSignup} className="bg-white  w-full md:max-w-sm">
        <h1 className="text-2xl font-bold text-center mb-6">Signup</h1>
        {Msg && (
          <div className="p-2 bg-red1 text-center font-semibold text-red5 text-sm mb-4">
            {Msg}
          </div>
        )}

        <div className="mb-4 flex space-x-2">
          <div className="w-1/3">
            <label
              htmlFor="gender"
              className="block text-gray7 font-medium mb-2"
            >
              Gender
            </label>
            <select
              id="gender"
              className="w-full border border-gray3 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="w-2/3">
            <label htmlFor="name" className="block text-gray7 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray3 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray7 font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full border border-gray3 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray7 font-medium mb-2">
            Phone No
          </label>
          <input
            type="number"
            id="phone"
            className="w-full border border-gray3 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue"
            value={phoneNo}
            onChange={(e) => setphoneNo(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray7 font-medium mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full border border-gray3 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue text-white py-2 rounded hover:bg-darkBlue transition"
        >
          {loading ? "Loading..." : "Signup"}
        </button>

        <div className="text-sm text-center my-2 text-gray5 md:text-base">
          If you already have an account, please{" "}
          <button
          type="button"

            className="text-blue font-semibold"
            onClick={() => {
              setisLogin(true);
            }}
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
