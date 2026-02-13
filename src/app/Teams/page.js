"use client";

import {
  rethink_sans400,
  rethink_sans600,
  rethink_sans800,
} from "@/Fonts/Rethink";
import { teamData } from "@/sampledata/Teams";
import React from "react";

const TeamSection = () => {
  return (
    <div className="container flex-col flex gap-10 mx-auto  p-5  mt-20 md:mt-0">
      <div className="" data-aos="fade-up">
        <h2
          className={`text-[32px] font-bold mb-8 ${rethink_sans800.className} `}
        >
          Campus Organiser
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4   gap-y-16 gap-x-10 mx-auto ">
          <div className="flex flex-col min-w-[18rem] border-[3px] border-black ] rounded-[15px]  ">
            <div>
              <img
                className=" rounded-t-[12px] w-full  h-[22rem]  sm:h-[20rem]"
                src={teamData.campusOrganizer.pfp}
              />
            </div>
            <div>
              <p
                className={`${rethink_sans600.className} text-black  text-lg font-medium pl-3 pt-2`}
              >
                {teamData.campusOrganizer.name}
              </p>
            </div>
            <div className="p-2">
              <div
                className="px-2 py-1 rounded-[20px] inline-block max-w-full border-[2px] border-black"
                style={{
                  background:
                    "linear-gradient(to right, #ECB80F, #CBB51C, #A8B12B, #7EAC3E, #709750, #9F8245, #C66F47, #F9574C, #BB6587, #8B74B8, #697CE0, #607FE9)",
                }}
              >
                <p
                  className={`${rethink_sans600.className} text-black  text-base font-medium`}
                >
                  {teamData.campusOrganizer.post}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <TeamsCard TeamName="Design team" teamData={teamData?.designTeam} />
        <TeamsCard TeamName="Development Team" teamData={teamData?.devTeam} />
        <TeamsCard
          TeamName="Marketing & PR Team"
          teamData={teamData?.MarketingTeam}
        />
        <TeamsCard
          TeamName="Media Production Team"
          teamData={teamData?.MediaTeam}
        />
        <TeamsCard
          TeamName="Operations Team"
          teamData={teamData?.OperationTeam}
        />
        <TeamsCard
          TeamName="Social Media Team"
          teamData={teamData?.SocialTeam}
        />
      </div>
    </div>
  );
};

export default TeamSection;

const TeamsCard = ({ TeamName, teamData }) => {
  return (
    <div className="" data-aos="fade-up flex   ">
      <h2
        className={`text-[32px] font-bold mb-8 ${rethink_sans800.className} `}
      >
        {TeamName}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5  mx-auto mb-16">
        {teamData?.map((member, index) => (
          <div
            key={index}
            className="flex flex-col border-[3px] border-black min-w-[10rem] rounded-[15px]  "
          >
            <div>
              <img className=" rounded-t-[12px] h-[175px] sm:h-[280px] w-full " src={member.pfp} />
            </div>
            <div>
              <p
                className={`${rethink_sans600.className} text-black  text-sm sm:text-lg font-medium pl-3 pt-2`}
              >
                {member.name}
              </p>
            </div>
            <div className="p-2">
              <div
                className="px-2 py-1 rounded-[20px] inline-block max-w-full border-[2px] border-black"
                style={{
                  backgroundColor: member.post
                    ?.toLowerCase()
                    .includes("associate")
                    ? "#2280FE"
                    : "#9749FF",
                }}
              >
                <p
                  className={`${rethink_sans600.className} text-black  text-[11px] sm:text-[15px] font-medium`}
                >
                  {member.post}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
