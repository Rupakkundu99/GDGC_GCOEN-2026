"use client";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

const Signin = ({ setisLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { loginUser } = useAuth();
  const [loading, setloading] = useState(false);

  if (error) {
    setTimeout(() => {
      setError("");
    }, 3000);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setloading(true);
      if (!email || !password) {
        setError("Both fields are required.");
        return;
      }
      setError("");
      await loginUser(email, password);
      setError("Logged in successfully");
    } catch (error) {
      setError(error.message);
    } finally {
      setloading(false);
    }
  };

  return (
    <div className="flex justify-center items-center  ">
      <form onSubmit={handleSubmit} className="bg-white  w-full md:max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>
        {error && (
          <div className="p-2 bg-red1 text-center font-semibold text-red5 text-sm mb-4">
            {error}
          </div>
        )}

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray7 font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full border border-gray-500 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            className="w-full border border-gray-500 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue text-white py-2 rounded hover:bg-darkBlue transition"
        >
          {loading ? "loading..." : " Sign In"}
        </button>

        <div className="text-xs text-center my-2 text-gray5 md:text-base">
          {" "}
          If you don't have an account, please
          <button
            type="button"
            className="text-blue ml-2 font-semibold"
            onClick={() => {
              setisLogin(false);
            }}
          >
             Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signin;
