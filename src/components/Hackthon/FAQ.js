"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqData = {
  general: {
    title: "General",
    questions: [
      {
        question: "What is Hack-on?",
        answer:
          "Hack-On is a coding competition where participants collaborate to build innovative projects using technology within a set timeframe.",
      },
      {
        question: "Will participants be provided with refreshments?",
        answer:
          "As mentioned in the brochure, snack boxes and refreshments will be provided. Additionally, food stalls will be available for participants to purchase items on their own.",
      },
      {
        question: "Is the use of AI and supportive tools permitted?",
        answer: "Yes, the use of AI is permitted.",
      },
      {
        question:
          "In case of a technical failure during the event, whom should we contact?",
        answer: "The technical team of volunteers will provide support.",
      },
      {
        question: "What will be the problem statement for the hackathon?",
        answer: "It will be revealed at the commencement of the hackathon.",
      },
      {
        question: "Will the hackathon be fun?",
        answer:
          "Yes, it will be a once-in-a-lifetime experience, helping you connect with a community of fellow developers.",
      },
      {
        question: "What are the prerequisites for the hackathon?",
        answer:
          "No prerequisites are required. Being proficient and self-sufficient in programming will suffice.",
      },
    ],
  },
  registration: {
    title: "Registration",
    questions: [
      {
        question: "How do I register for GDGC GCOEN events?",
        answer:
          "You can register through our official website or event page, where registration links are provided.",
      },
      {
        question: "Who can register for the events?",
        answer:
          "Our events are primarily for students and developers, but anyone interested in Google technologies is welcome.",
      },
      {
        question: "Do you offer refunds?",
        answer:
          "If your team has registered but the transaction was not successfully processed through Razorpay, the amount will be refunded within 5-6 working days. However, if the payment was successful, no refund will be issued.",
      },
      {
        question: "How will I receive event updates after registration?",
        answer:
          "Updates will be shared via email, WhatsApp groups, or our official communication channels.",
      },
      {
        question:
          "If we have trouble with registration or team modifications, whom should we contact?",
        answer:
          "You can contact the event coordinator for assistance. Contact Ayush Nafdey: 9689838637.",
      },
    ],
  },
  community: {
    title: "Community",
    questions: [
      {
        question: "What is GDGC GCOEN?",
        answer:
          "GDGC GCOEN (Google Developer Group on Campus) is a student-led community that fosters learning, collaboration, and innovation using Google technologies.",
      },
      {
        question: "What kind of events does GDGC GCOEN organize?",
        answer:
          "We host workshops, hackathons, study jams, speaker sessions, and networking events focused on Google technologies.",
      },
      {
        question: "Are the events free to attend?",
        answer:
          "Most of our events are free, but some specialized workshops may have a minimal registration fee.",
      },
      {
        question: "Where can I find updates on upcoming events?",
        answer:
          "You can find event updates on our website, social media pages, and official WhatsApp/Telegram groups.",
      },
      {
        question: "Can I collaborate with GDGC GCOEN as a speaker or mentor?",
        answer:
          "Yes! If you are interested in speaking or mentoring, reach out to us via our contact page.",
      },
    ],
  },
  tc: {
    title: "Terms and Conditions",
    questions: [
      {
        question: "Terms and Conditions",
        answer:
          "By using the GDGC GCOEN platform, you agree to abide by these terms and conditions. This platform is designed to foster learning, collaboration, and innovation among students and developers using Google technologies. Any misuse of the platform for unethical or unauthorized activities is strictly prohibited. All resources, including logos, event materials, and content, are the intellectual property of GDGC GCOEN or Google Developer Groups. Unauthorized distribution, reproduction, or modification of these materials is strictly prohibited. We are committed to maintaining a respectful and inclusive environment, where any form of harassment, discrimination, or hate speech will not be tolerated. GDGC GCOEN reserves the right to modify these terms at any time. Users will be informed of any changes through official communication channels. By continuing to use the platform, you acknowledge and accept any updated terms. If you do not agree with these conditions, please refrain from using the platform.",
      },
    ],
  },
};

const FAQ = () => {
  const [activeTab, setActiveTab] = useState("general");
  const [expandedQuestions, setExpandedQuestions] = useState({});

  const toggleQuestion = (questionId) => {
    setExpandedQuestions((prev) => ({
      ...prev,
      [questionId]: !prev[questionId],
    }));
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6 mb-14 mt-10">
      <h1 className="font-medium text-white  text-3xl md:py-5 mb-2 md:text-5xl">
        FAQ
      </h1>

      <div className="flex flex-col md:flex-row gap-5">
        {/* Tabs */}
        <div className="md:w-1/4">
          <div className="flex flex-row sm:flex-col gap-6 overflow-x-auto sm:overflow-hidden scrollbar-hide">
            {Object.keys(faqData).map((tab) => (
              <div>
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-full text-left transition-colors border-solid border-white border-2 ${
                    activeTab === tab
                      ? "bg-yellow-1 text-black"
                      : " text-white hover:bg-gray-700"
                  } whitespace-nowrap`}
                >
                  {faqData[tab].title}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Questions */}
        <div className="md:w-3/4 border-solid border-white border-2 rounded-lg">
          <div className="bg-yellow-1 px-8 py-7  mb-6 rounded-t-md">
            <h2 className="text-3xl  text-black flex justify-between items-center">
              {faqData[activeTab].title}
            </h2>
          </div>

          <div className="space-y-2 px-5 ">
            {faqData[activeTab].questions.map((item, index) => {
              const questionId = `${activeTab}-${index}`;
              return (
                <div
                  key={questionId}
                  className="border-b border-white last:border-0"
                >
                  <button
                    onClick={() => toggleQuestion(questionId)}
                    className="w-full flex justify-between items-center py-4 text-left text-white transition-colors"
                  >
                    <span className="text-lg font-medium">{item.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-200 ${
                        expandedQuestions[questionId] ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-200 ${
                      expandedQuestions[questionId]
                        ? "max-h-96 pb-4"
                        : "max-h-0"
                    }`}
                  >
                    <p className="text-white px-4">{item.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
