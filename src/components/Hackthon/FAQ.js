"use client";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

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
    title: "Terms & Conditions",
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
    <div className="w-full max-w-6xl mx-auto px-4 md:px-6 mb-14 mt-10">
      {/* Section Heading */}
      <h1 className="font-bold text-white text-2xl md:text-5xl mb-6 md:mb-8">
        FAQ
      </h1>

      <div className="flex flex-col md:flex-row gap-4 md:gap-6">

        {/* Tabs — horizontal scroll on mobile, vertical column on desktop */}
        <div className="md:w-1/4 flex-shrink-0">
          <div className="flex md:flex-col gap-2 md:gap-3 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
            {Object.keys(faqData).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-sm md:text-base text-left transition-all duration-200 border border-white/60 whitespace-nowrap flex-shrink-0 ${
                  activeTab === tab
                    ? "bg-[#F9AB00] text-black border-[#F9AB00] font-semibold"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {faqData[tab].title}
              </button>
            ))}
          </div>
        </div>

        {/* Questions Panel */}
        <div className="flex-1 border border-white/40 rounded-2xl overflow-hidden">
          {/* Active Tab Header */}
          <div className="bg-[#F9AB00] px-5 md:px-8 py-4 md:py-6">
            <h2 className="text-lg md:text-2xl font-bold text-black">
              {faqData[activeTab].title}
            </h2>
          </div>

          {/* Accordion Items */}
          <div className="px-4 md:px-6 py-2">
            {faqData[activeTab].questions.map((item, index) => {
              const questionId = `${activeTab}-${index}`;
              const isOpen = expandedQuestions[questionId];

              return (
                <div
                  key={questionId}
                  className="border-b border-white/20 last:border-0"
                >
                  <button
                    onClick={() => toggleQuestion(questionId)}
                    className="w-full flex justify-between items-center gap-3 py-4 text-left text-white group"
                  >
                    <span className="text-sm md:text-lg font-medium leading-snug">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 flex-shrink-0 text-white/70 group-hover:text-[#F9AB00] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-[500px] pb-4" : "max-h-0"
                    }`}
                  >
                    <p className="text-white/80 text-sm md:text-base leading-relaxed pl-1 pr-4">
                      {item.answer}
                    </p>
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
