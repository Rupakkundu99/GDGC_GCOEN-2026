"use client"
// import ThankYouPage from "@/components/ContactsUs/ThankYouContact";
import FeedbackViaEmail from "@/components/Feedback/feedbackViaEmail";
import ViaSocial from "@/components/ContactsUs/ViaSocial";
import { Rethink_Sans } from "next/font/google";
// import Footer from "../Utility/Footer";
import React from "react";

export const metadata = {
    title: "Feedback Form",
    description: "Feedback form page",
};

const rethink_sans = Rethink_Sans({
    weight: "800",
    subsets: ["latin", "latin-ext"],
});

const feedback = () => {
    return (
        <>
            <div className="container mx-auto pb-9 px-5 mt-20 md:mt-0  pt- flex-col flex md:gap-5 left-0 w-full  bg-white">
                <h2
                    className={`text-3xl md:text-[64px] md:pt-5  ${rethink_sans.className}  `}
                >
                    Feedback collection
                </h2>

                <div className={`mt-5 flex  gap-5  md:flex-row flex-col  `}>
                    <FeedbackViaEmail />
                    <ViaSocial />
                </div>
                    {/* <Footer/> */}
            </div>
        </>
    );
};

export default feedback;
