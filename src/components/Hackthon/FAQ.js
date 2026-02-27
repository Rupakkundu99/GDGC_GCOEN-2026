"use client";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqData = {
  general: {
    title: "General",
    questions: [
      {
        question: "1. What is HackOn 2.0?",
        answer:
          "HackOn 2.0 is an 8-hour offline hackathon organized by Google Developer Group (GDG) On Campus – Government College of Engineering, Nagpur. It aims to provide students with a platform to innovate, build real-world solutions, and compete for exciting prizes.",
      },
      
      {
        question: "2. What is the structure of the hackathon?",
        answer: `The hackathon consists of two rounds:
                     Round 1: Online PPT Submission
                    Round 2: 8-Hour Offline Hackathon (Selected Teams Only)`,
      },
      {
        question:
          "3. What is the team size requirement?",
        answer: "Each team must consist of 2 to 4 members.",
      },
      
      {
        question: "4. Is there any registration fee?",
        answer:
          `Round 1 (Online PPT Submission) is completely FREE for all teams.
        Teams selected for Round 2 (Offline Hackathon) will need to pay a nominal participation fee.
        The exact amount will be communicated to shortlisted teams.`,
      },
      
      {
        question: "5. How will teams be shortlisted for Round 2?",
        answer:
          `Teams will be evaluated based on:
           1. Innovation & Creativity
           2. Technical Feasibility
           3. Problem-Solving Approach
           4. Practical Implementation
           5.Real-World Impact`,
      },
      
      {
        question: "6. What will participants receive?",
        answer:
          `All offline participants will receive:
          Participation Certificates, Mentorship Opportunities, Networking Opportunities, Goodies and Refreshments`,
      },
      
      {
        question: "7. Can teams from different colleges participate?",
        answer:
          "Yes, inter-college teams are allowed. (Modify if needed.)",
      },
      
      
      {
        question: "8. Who can we contact for queries?",
        answer:
          `or any queries, participants can contact the event coordinators:
          Shreyash Ambure – +91 87676 07452,`
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

      <div className="flex flex-col gap-4">

        {/* Tabs — horizontal row on all screen sizes */}
        <div className="flex gap-2 md:gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {Object.keys(faqData).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-full text-sm md:text-base transition-all duration-200 border whitespace-nowrap flex-shrink-0 ${
                activeTab === tab
                  ? "bg-[#F9AB00] text-black border-[#F9AB00] font-semibold"
                  : "text-white border-white/40 hover:bg-white/10"
              }`}
            >
              {faqData[tab].title}
            </button>
          ))}
        </div>

        {/* Questions Panel */}
        <div className="border border-white/40 rounded-2xl overflow-hidden">
          {/* Active Tab Header */}
          <div className="bg-[#F9AB00] px-5 md:px-8 py-3 md:py-4">
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
                    <p className="text-white/80 text-sm md:text-base leading-relaxed pl-1 pr-4 whitespace-pre-line">
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
