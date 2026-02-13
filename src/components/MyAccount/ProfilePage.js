"use client";
import { useAuth } from "@/context/AuthContext";
import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Signin from "../Auth/Signin";
import Authentication from "../Auth/Authentication";
import ThankYouPage from "../ContactsUs/ThankYouContact";
import { thankContact, welcomeUser } from "@/sampledata/HTMLTemplate";

function ProfilePage() {
  const { user, updateUserDetails, userLoading } = useAuth();
  const [loading, setloading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    collegeName: "",
    branch: "",
    year: "",
    DOB: "",
    gender: "",
  });

  // Update formData when user data is available
  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        email: user.email || "",
        collegeName: user.collegeName || "",
        branch: user.branch || "",
        year: user.year || "",
        DOB: user.DOB ? new Date(user.DOB).toISOString().split("T")[0] : "", // ISO format for <input type="date">
        gender: user.gender || "",
      });
    }
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setloading(true);
      await updateUserDetails(user.$id, formData);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setloading(false);
    }
  };

  return (
    <div className=" mx-auto mt-16 md:mt-0 ">
      {userLoading && "User Details Fetching..."}
      {!userLoading && !user && (
        <div>
          <Authentication />
        </div>
      )}
      {!userLoading && user && (
        <form onSubmit={handleSubmit} className=" rounded-lg">
          <h2 className="text-2xl font-bold  mb-6">Profile</h2>

          <div className="flex gap-5">
            <div className="mb-4 w-fit ">
              <label className="block text-sm font-medium text-gray-700">
                Gender
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="outline-none border p-2 rounded-md mt-2 w-full"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="mb-4 w-full ">
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Name"
                className="outline-none border p-2 rounded-md mt-2 w-full"
              />
            </div>
          </div>

          <div className="flex gap-5">
            <div className="mb-4 w-full ">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                disabled
                className=" disabled:bg-gray-100 outline-none border p-2 rounded-md mt-2 w-full"
              />
            </div>

            <div className="mb-4 w-full ">
              <label className="block text-sm font-medium text-gray-700">
                Date of Birth
              </label>
              <input
                type="date"
                name="DOB"
                value={formData.DOB}
                onChange={handleInputChange}
                className="outline-none border p-2 rounded-md mt-2 w-full"
              />
            </div>
          </div>

          <div className="mb-4 w-full ">
            <label className="block text-sm font-medium text-gray-700">
              College Name
            </label>
            <input
              type="text"
              name="collegeName"
              value={formData.collegeName}
              onChange={handleInputChange}
              placeholder="College Name"
              className="outline-none border p-2 rounded-md mt-2 w-full"
            />
          </div>
          <div className="flex gap-5">
            <div className="mb-4 w-full ">
              <label className="block text-sm font-medium text-gray-700">
                Branch
              </label>
              <input
                type="text"
                name="branch"
                value={formData.branch}
                onChange={handleInputChange}
                placeholder="Branch"
                className="outline-none border p-2 rounded-md mt-2 w-full"
              />
            </div>

            <div className="mb-4 w-full ">
              <label className="block text-sm font-medium text-gray-700">
                Year
              </label>
              <select
                name="year"
                value={formData.year}
                onChange={handleInputChange}
                placeholder="Year"
                className="outline-none border p-2 rounded-md mt-2 w-full"
              >
                <option value="null">----SELECT----</option>
                <option value="1st Year">1st Year</option>
                <option value="2nd Year">2nd Year</option>
                <option value="3rd Year">3rd Year</option>
                <option value="4th Year">4th Year</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            {loading ? "Saving..." : "Save Changes"}
          </button>
        </form>
      )}
    </div>
  );
}

export default ProfilePage;
