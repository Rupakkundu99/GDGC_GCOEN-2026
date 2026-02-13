"use client";
import React, { useState, useCallback } from "react";
import DefaultBtnRegister from "../Utility/DefaultBtnRegister";
import { EventRegistrationID } from "@/config/appwrite";
import { AddDataToCollection } from "@/Services/Appwrite";
import { generateEventThankYouHTML } from "@/sampledata/HTMLTemplate";
import toast from "react-hot-toast";
import moment from "moment";

const EventRegistration = ({ EventData }) => {
  const { id, Title, StartDate, BannerURL, location } = EventData;

  const [formData, setFormData] = useState({
    gender: "",
    UserName: "",
    email: "",
    phoneNo: "",
    CollegeName: "",
    YearOFStudy: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [ticketData, setTicketData] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (!formData.UserName || !formData.email || !formData.phoneNo) {
        setMessage("Please fill all required fields!");
        return;
      }

      try {
        setLoading(true);
        setMessage("");

        const ress = await AddDataToCollection(EventRegistrationID, {
          ...formData,
          EventName: Title,
          events: id,
        });

        const qrCodeURL = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
          ress.$id
        )}`;

        const htmlTemp = generateEventThankYouHTML(
          Title,
          formData.UserName,
          moment(StartDate).format("ll"),
          location,
          BannerURL,
          qrCodeURL
        );

        await fetch("/api/SendEmail", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.UserName,
            email: formData.email,
            message: htmlTemp,
            subject: "Thank you for Registering for the Event!",
          }),
        });

        setTicketData(htmlTemp);
        toast.success(
          "Registration Successful! Check your email for the QR Code."
        );
        
      } catch (error) {
        setMessage(error.message || "Something went wrong, please try again.");
      } finally {
        setLoading(false);
      }
    },
    [formData, Title, id, StartDate, location, BannerURL]
  );

  return (
    <div>
      <h2 className="text-2xl font-bold pb-5">Register for {Title}</h2>

      {ticketData ? (
        <div dangerouslySetInnerHTML={{ __html: ticketData }} />
      ) : (
        <form className="flex flex-col gap-2" onSubmit={handleFormSubmit}>
          <img
            src={BannerURL}
            alt="Event Banner"
            className="w-full h-40 object-cover border-2 rounded-md"
          />

          {message && (
            <div className="bg-red-100 p-2 w-full text-center rounded-md font-semibold">
              {message}
            </div>
          )}

          <div className="flex gap-2">
            <select
              name="gender"
              className="border border-gray-300 rounded-lg py-3 px-2 w-1/4"
              onChange={handleChange}
              value={formData.gender}
              required
            >
              <option value="">--Select--</option>
              <option value="Female">Miss</option>
              <option value="Male">Mr</option>
            </select>
            <input
              name="UserName"
              type="text"
              className="border border-gray-300 rounded-lg py-3 px-2 w-full"
              placeholder="Full Name"
              onChange={handleChange}
              value={formData.UserName}
              required
            />
          </div>

          <input
            name="email"
            type="email"
            className="border border-gray-300 rounded-lg py-3 px-2"
            placeholder="Email"
            onChange={handleChange}
            value={formData.email}
            required
          />
          <input
            name="phoneNo"
            type="tel"
            className="border border-gray-300 rounded-lg py-3 px-2"
            placeholder="Phone Number"
            onChange={handleChange}
            value={formData.phoneNo}
            required
          />

          <input
            name="CollegeName"
            type="text"
            className="border border-gray-300 rounded-lg py-3 px-2"
            placeholder="College Name"
            onChange={handleChange}
            value={formData.CollegeName}
          />

          <select
            name="YearOFStudy"
            className="border border-gray-300 rounded-lg py-3 px-2"
            onChange={handleChange}
            value={formData.YearOFStudy}
          >
            <option value="">--Select Year--</option>
            <option value="first">1st year</option>
            <option value="second">2nd year</option>
            <option value="third">3rd year</option>
            <option value="fourth">4th year</option>
          </select>

          <DefaultBtnRegister
            func={handleFormSubmit}
            name="Register Now"
            loading={loading}
            disabled={loading}
            HoverColor="hover:bg-blue focus:ring-blue"
            txtColor="text-sm w-full text-black border-2 border-black"
            size="small"
          />
        </form>
      )}
    </div>
  );
};

export default EventRegistration;
