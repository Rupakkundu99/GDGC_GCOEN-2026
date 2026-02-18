"use client";
import { rethink_sans400 } from "@/Fonts/Rethink";
import { AddDataToCollection } from "@/Services/Appwrite";
import { ContactCollection } from "@/config/appwrite";
import { thankContact } from "@/sampledata/HTMLTemplate";
import { useState } from "react";
import DefaultBtn from "../Utility/DefaultBtn";
import ThankYouPage from "./ThankYouContact";



const ViaEmail = () => {
  const [errorMsg, seterrorMsg] = useState("");
  const [loading, setloading] = useState(false);
  const [formSubmittedSuccess, setformSubmittedSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    profession: "",
    company: "",
    email: "",
    phone: "",
    message: "",
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
    if (!profession.trim()) return "Profession is required.";
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

      await AddDataToCollection(ContactCollection,formData)

      const response = await fetch("/api/SendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          message: htmlTemp,
          subject: "Thank you for reaching out!",
        }),
      });

      if (response.ok) {
        await response.json();
        setformSubmittedSuccess(true);
      } else {
        seterrorMsg("Failed to submit the form. Please try again.");
      }
    } catch (error) {
      console.log(error);
      
      seterrorMsg("An error occurred. Please try again later.");
    } finally {
      setloading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">

      <form
        onSubmit={handleSubmit}
        className="md:mt-5 p-5 flex-col gap-5 flex border-2 rounded-3xl border-black"
      >
        <h4
          className={`text-2xl md:text-3xl font-bold mb-1 font-normal ${rethink_sans400.className}`}
          style={{ color: '#FCCE48' }}
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
          className="w-full outline-none border-2 font-normal border-black rounded-lg py-3 px-2"
          placeholder="Full Name"
        />
        <input
          name="profession"
          type="text"
          value={formData.profession}
          onChange={handleChange}
          className="w-full outline-none border-2 font-normal border-black rounded-lg py-3 px-2"
          placeholder="Profession"
        />
        <input
          name="company"
          type="text"
          value={formData.company}
          onChange={handleChange}
          className="w-full outline-none border-2 font-normal border-black rounded-lg py-3 px-2"
          placeholder="Company / Organisation"
        />
        <div className="flex md:flex-row flex-col gap-5">
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full outline-none border-2 font-normal border-black rounded-lg py-3 px-2"
            placeholder="Email Address"
          />
          <input
            name="phone"
            type="text"
            value={formData.phone}
            onChange={handleChange}
            className="w-full outline-none border-2 font-normal border-black rounded-lg py-3 px-2"
            placeholder="Phone Number"
          />
        </div>
        <input
          name="message"
          type="text"
          value={formData.message}
          onChange={handleChange}
          className="w-full outline-none border-2 font-normal border-black rounded-lg py-3 px-2"
          placeholder="Description"
        />
        <div className="flex gap-5 items-center">
          <input
            name="agree"
            type="checkbox"
            className="w-5 h-5 rounded border-black text-blue-600 focus:ring-blue-500 accent-blue-600"
            checked={formData.agree}
            onChange={handleChange}
          />
          <p className={`${rethink_sans400.className} md:text-base text-xs`}>
            By agreeing to this, you authorize our team to send you important
            messages and notifications via email.
          </p>
        </div>
        <div className="flex justify-end">
          <DefaultBtn
            name="Reach Out"
            loading={loading}
            cuStyle="w-full md:min-w-[200px] md:w-fit md:px-8"
            disabled={!formData.agree ? "disabled:bg-blue3" : ""}
            HoverColor="hover:bg-yellow-100 hover:shadow-[4px_4px_0_0_#f59e0b,5px_5px_0_0_black] focus:ring-amber-400"
            txtColor="text-black border-2 border-black"
          />
        </div>
      </form>
    </div>
  );
};

export default ViaEmail;
