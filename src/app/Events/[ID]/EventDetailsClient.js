"use client";

import { useState } from "react";
import moment from "moment";
import SocialShareButtons from "@/components/Utility/SocialShareButtons";
import DefaultBtnRegister from "@/components/Utility/DefaultBtnRegister";
import { baseUrl } from "@/config/baseUrl";
import "suneditor/dist/css/suneditor.min.css";
import EventRegistration from "@/components/Events/EventRegistration";
import { Calendar, Cross, CrossIcon, Map, MapPin, Pin, X } from "lucide-react";

const EventDetailsClient = ({ eventData, EventID }) => {
  const { Title, Description, BannerURL, Artical, StartDate, location } =
    eventData;

  const [isLoaded, setIsLoaded] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex justify-center container md:flex-row flex-col gap-5">
      <div>
        <div className="relative w-full">
          {/* <img
            src="/banner_template.png"
            alt="placeholder"
            className={`w-full border md:h-64 h-40 object-cover rounded-md transition-opacity duration-500 ${
              isLoaded ? "opacity-0" : "opacity-100"
            }`}
          /> */}
          <img
            src={BannerURL}
            alt="event"
            className={` border top-0 left-0 w-full md:h-64 h-40 object-cover rounded-md transition-opacity duration-500 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setIsLoaded(true)}
          />
        </div>

        <h1 className="text-2xl md:text-3xl font-bold">{Title}</h1>

        <p className="text-gray-500 text-justify">{Description}</p>

        <SocialShareButtons
          url={`${baseUrl}Events/${EventID}`}
          title={Title}
          key="BLOG"
        />

        <div className="-mx-5">
          <div
            dangerouslySetInnerHTML={{ __html: Artical }}
            className="text-justify se-wrapper-inner se-wrapper-wysiwyg sun-editor-editable"
          />
        </div>
      </div>
      <div className="w-full border p-5 rounded-md h-fit sticky top-32 md:w-1/2">
        <div className="flex flex-col  gap-2">
          <p className="font-semibold flex gap-5 items-center">
            <MapPin className="text-blue" /> {location}
          </p>
          <p className="font-semibold flex gap-5 items-center">
            <Calendar className="text-blue" /> {moment(StartDate).format("ll")}
          </p>
        </div>
        <DefaultBtnRegister
          func={() => setIsModalOpen(true)}
          cuStyle="w-full mt-5 border border-black bg-blue"
          name="Register Now"
        />
      </div>

      {/* Full-Screen Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-full h-full p-5 md:w-1/2 md:h-auto rounded-md shadow-lg relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute bg-white border top-4 right-4 text-xl font-bold text-gray-600 hover:text-gray-800"
            >
              <X/>
            </button>
          <EventRegistration EventData={eventData} />
          </div>
        </div>
      )}
    </div>
  );
};

export default EventDetailsClient;
