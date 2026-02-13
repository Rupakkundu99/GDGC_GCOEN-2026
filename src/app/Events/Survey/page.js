"use client";
import { useState } from "react";
import { Mail, Phone, User, GraduationCap, Calendar, Send } from "lucide-react";
import DefaultBtnRegister from "@/components/Utility/DefaultBtnRegister";
import toast from "react-hot-toast";
import { AddDataToCollection } from "@/Services/Appwrite";
import { KananSurveyCollection } from "@/config/appwrite";

export default function ExamPreparationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    college: "",
    year: "",
    preparingExam: "",
    examTypes: [],
    coaching: "",
    studyAbroad: "",
    preferredCountries: [],
    studyReason: [],
  });
  const [loading, setLoading] = useState(false);
  const [showOtherExam, setShowOtherExam] = useState(false);
  const [showOtherCountry, setShowOtherCountry] = useState(false);
  const [showOtherReason, setShowOtherReason] = useState(false);

  // Temporary state for 'Other' fields
  const [otherExamType, setOtherExamType] = useState("");
  const [otherCountry, setOtherCountry] = useState("");
  const [otherReason, setOtherReason] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => {
      if (type === "checkbox") {
        let updatedValues = checked
          ? [...prev[name], value]
          : prev[name].filter((v) => v !== value);

        if (name === "examTypes" && value === "Other")
          setShowOtherExam(checked);
        if (name === "preferredCountries" && value === "Other")
          setShowOtherCountry(checked);
        if (name === "studyReason" && value === "Other")
          setShowOtherReason(checked);

        return { ...prev, [name]: updatedValues };
      }

      return { ...prev, [name]: value };
    });
  };

  // Updates the main state when user finishes typing in "Other" fields
  const handleOtherBlur = (field, value) => {
    if (value.trim() !== "") {
      setFormData((prev) => {
        let updatedField = prev[field].filter((v) => v !== "Other");
        updatedField.push(value);
        return { ...prev, [field]: updatedField };
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {

      await AddDataToCollection(KananSurveyCollection, formData);
      toast.success("Form submitted successfully");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        college: "",
        year: "",
        preparingExam: "",
        examTypes: [],
        coaching: "",
        studyAbroad: "",
        preferredCountries: [],
        studyReason: "",
      });
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="container">
      <h2 className="text-3xl font-semibold mb-10 text-gray-800">
      Crack the Code: A Tech-Driven Approach to B-School Entrance
      </h2>
      <div className="grid grid-cols-1 gap-4">
        <div className="relative">
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            className="w-full p-3 pl-10 border rounded-md focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
            required
          />
        </div>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-3 pl-10 border rounded-md focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
            required
          />
        </div>
        <div className="relative">
          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            className="w-full p-3 pl-10 border rounded-md focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
            required
          />
        </div>
        <div className="relative">
          <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            name="college"
            placeholder="College"
            className="w-full p-3 pl-10 border rounded-md focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
            required
          />
        </div>
        <div className="relative">
          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            name="year"
            placeholder="Year"
            className="w-full p-3 pl-10 border rounded-md focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="mt-4">
        <label className="block font-semibold mb-2">
          Are you preparing for competitive exams?
        </label>
        <select
          name="preparingExam"
          className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
          onChange={handleChange}
          required
        >
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>

      {/* Competitive Exams */}
      <div className="mt-4">
        <label className="block font-semibold mb-2">
          Which exams are you preparing for?
        </label>
        <div className="grid grid-cols-2 gap-2">
          {["CAT", "GMAT", "GRE/IELTS/TOEFL", "GATE", "Other"].map((exam) => (
            <label
              key={exam}
              className="flex items-center gap-2 bg-gray-50 p-2 rounded-md cursor-pointer hover:bg-gray-100"
            >
              <input
                type="checkbox"
                name="examTypes"
                value={exam}
                onChange={handleChange}
              />{" "}
              {exam}
            </label>
          ))}
        </div>
        {showOtherExam && (
          <input
            type="text"
            placeholder="Specify Other Exam"
            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 mt-2"
            value={otherExamType}
            onChange={(e) => setOtherExamType(e.target.value)}
            onBlur={() => handleOtherBlur("examTypes", otherExamType)}
          />
        )}
      </div>

      <div className="mt-4">
        <label className="block font-semibold mb-2">
          Are you attending coaching classes?
        </label>
        <select
          name="coaching"
          className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
          onChange={handleChange}
          required
        >
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>

      <div className="mt-4">
        <label className="block font-semibold mb-2">
          Planning to study abroad?
        </label>
        <select
          name="studyAbroad"
          className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
          onChange={handleChange}
          required
        >
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>

      {/* Preferred Countries */}
      <div className="mt-4">
        <label className="block font-semibold mb-2">Preferred countries</label>
        <div className="grid grid-cols-2 gap-2">
          {[
            "USA",
            "UK",
            "Australia",
            "Canada",
            "Germany",
            "France",
            "Japan",
            "Other",
          ].map((country) => (
            <label
              key={country}
              className="flex items-center gap-2 bg-gray-50 p-2 rounded-md cursor-pointer hover:bg-gray-100"
            >
              <input
                type="checkbox"
                name="preferredCountries"
                value={country}
                onChange={handleChange}
              />{" "}
              {country}
            </label>
          ))}
        </div>
        {showOtherCountry && (
          <input
            type="text"
            placeholder="Specify Other Country"
            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 mt-2"
            value={otherCountry}
            onChange={(e) => setOtherCountry(e.target.value)}
            onBlur={() => handleOtherBlur("preferredCountries", otherCountry)}
          />
        )}
      </div>

      {/* Study Abroad Reasons */}
      <div className="mt-4">
        <label className="block font-semibold mb-2">
          Primary reason for studying abroad
        </label>
        {[
          "Better academic opportunities",
          "Exposure to diverse cultures",
          "Career prospects",
          "Other",
        ].map((reason) => (
          <label
            key={reason}
            className="flex items-center gap-2 bg-gray-50 p-2 rounded-md cursor-pointer hover:bg-gray-100"
          >
            <input
              type="checkbox"
              name="studyReason"
              value={reason}
              onChange={handleChange}
            />{" "}
            {reason}
          </label>
        ))}
        {showOtherReason && (
          <input
            type="text"
            placeholder="Specify Other Reason"
            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 mt-2"
            value={otherReason}
            onChange={(e) => setOtherReason(e.target.value)}
            onBlur={() => handleOtherBlur("studyReason", otherReason)}
          />
        )}
      </div>

      <DefaultBtnRegister
        loading={loading}
        name="Submit"
        cuStyle="w-full bg-blue border border-black mt-5"
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg mt-6 font-semibold hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
      >
        {loading ? (
          "Submitting..."
        ) : (
          <>
            <Send className="w-5 h-5" /> Submit
          </>
        )}
      </button>
    </form>
  );
}
