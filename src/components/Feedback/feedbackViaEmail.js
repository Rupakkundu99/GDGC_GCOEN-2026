"use client";
import React, { useState } from "react";
import DefaultBtn from "../Utility/DefaultBtn";
import { rethink_sans400, rethink_sans800 } from "@/Fonts/Rethink";
import { thankContact } from "@/sampledata/HTMLTemplate";
import ThankYouPage from "@/components/ContactsUs/ThankYouContact";
import { AddDataToCollection } from "@/Services/Appwrite";
import { FeedbackCollection } from "@/config/appwrite";
import toast from "react-hot-toast";

const ViaEmail = () => {
  const [errorMsg, seterrorMsg] = useState("");
  const [loading, setloading] = useState(false);
  const [formSubmittedSuccess, setformSubmittedSuccess] = useState(false);
  const [formData, setFormData] = useState({
    Name: "",
    College: "",
    Email_ID: "",
    Phone_number: "",
    agree: false,
  });

  if (errorMsg) {
    setTimeout(() => {
      seterrorMsg("");
    }, 3000);
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateForm = () => {
    const { fullName, profession, email, phone, message, agree } = formData;

    if (!fullName.trim()) return "Full Name is required.";
    // if (!profession.trim()) return "Profession is required.";
    if (!email.trim()) return "Email is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return "Please enter a valid email address.";
    if (!phone.trim() || !/^\d+$/.test(phone) || phone.length < 10)
      return "Please enter a valid phone number.";
    if (!message.trim()) return "Message cannot be empty.";
    if (!agree) return "You must agree to the terms before submitting.";

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validateForm();

    if (validationError) {
      seterrorMsg(validationError);
      return;
    }

    try {
      setloading(true);
      const htmlTemp = thankContact(formData.fullName);

      await AddDataToCollection(FeedbackCollection,formData)
        toast.success("Your feedback has been recorded successfully !")
    } catch (error) {
      console.log(error.message);
      
      seterrorMsg("An error occurred. Please try again later.");
    } finally {
      setloading(false);
    }
  };

  return (
    <div className="w-full md:border-r-2 border-black md:pr-10">
      <form
        onSubmit={handleSubmit}
        className="md:mt-5 p-5 flex-col gap-5 flex border-2 rounded-3xl border-black"
      >
        <h4
          className={`text-2xl md:text-[40px] mb-1 ${rethink_sans800.className}`}
        >
          via Email
        </h4>
        {errorMsg && (
          <p className="bg-red2 p-3 text-red6 font-semibold text-center">
            {errorMsg}
          </p>
        )}
        {formSubmittedSuccess && (
          <ThankYouPage setformSubmittedSuccess={setformSubmittedSuccess} />
        )}
        <input
          name="fullName"
          type="text"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full outline-none border font-normal border-gray4 rounded-lg py-3 px-2"
          placeholder="Full Name"
        />
        <input
          name="company"
          type="text"
          value={formData.company}
          onChange={handleChange}
          className="w-full outline-none border font-normal border-gray4 rounded-lg py-3 px-2"
          placeholder="College"
        />
        <div className="flex md:flex-row flex-col gap-5">
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full outline-none border font-normal border-gray4 rounded-lg py-3 px-2"
            placeholder="Email Address"
          />
          <input
            name="phone"
            type="number"
            maxlength="10"
            value={formData.phone}
            onChange={handleChange}
            className="w-full outline-none border font-normal border-gray4 rounded-lg py-3 px-2"
            placeholder="Phone Number"
          />
        </div>
        <input
          name="message"
          type="text"
          value={formData.message}
          onChange={handleChange}
          className="w-full outline-none border font-normal border-gray4 rounded-lg py-3 px-2"
          placeholder="Message"
        />
        <div className="flex gap-5">
          <input
            name="agree"
            type="checkbox"
            className="w-8"
            checked={formData.agree}
            onChange={handleChange}
          />
          <p className={`${rethink_sans400.className} md:text-base  text-xs`}>
            By agreeing to this, you authorize our team to send you important
            messages and notifications via email.
          </p>
        </div>
        <div className="flex justify-end">
          <DefaultBtn
            name="Send"
            loading={loading}
            cuStyle="w-full md:w-fit"
            disabled={!formData.agree ? "disabled:bg-blue3" : ""}
            HoverColor="hover:bg-blue focus:ring-blue "
            txtColor="text-black border-2 border-black"
          />
        </div>
      </form>
    </div>
  );
};

export default ViaEmail;
