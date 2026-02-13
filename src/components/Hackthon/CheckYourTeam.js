"use client";

import { HackOnMembers, HackOnTeams } from "@/config/appwrite";
import { GetSingleDocument, ListCollectionData } from "@/Services/Appwrite";
import { Query } from "appwrite";
import { Mail, Phone, GraduationCap, Users, User } from "lucide-react";

import React, { useState } from "react";

const CheckYourTeam = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [currentTeam, setCurrentTeam] = useState(null);
  const [loading, setLoading] = useState(false);
  const [teamMembers, setteamMembers] = useState([]);
  const [viewTicket, setviewTicket] = useState(false);
  const getTeamData = async (e) => {
    e.preventDefault();
    setError(""); // Clear any existing error
    setCurrentTeam(null); // Clear previous team data
    setteamMembers([]);
    setLoading(true);

    try {
      const res = await ListCollectionData(HackOnTeams, [
        Query.equal("LEmail", email),
      ]);

      if (res.documents.length === 0) {
        return setError("Team Not Found");
      }

      const members = await ListCollectionData(HackOnMembers, [
        Query.equal("hackOnTeams", res.documents[0].$id),
      ]);

      setteamMembers(members.documents);
      setCurrentTeam(res.documents[0]);
    } catch (err) {
      setError(err.message || "An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" flex flex-col gap-2 md:gap-5">
      <p className="font-semibold text-lg py-2 md:text-xl">
        Check Your Team Details
      </p>
      <form className="flex gap-2" onSubmit={getTeamData}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border w-full p-2 rounded-md"
          placeholder="Enter leader email"
          required
        />
        <button
          type="submit"
          className="bg-blue font-semibold p-2 px-5 rounded-md"
          disabled={loading}
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </form>
      {!loading && viewTicket && (
        <HackthonTicket currentTeam={currentTeam} teamMembers={teamMembers} />
      )}
      {loading && <TeamProfileSkeleton />}
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {!loading && !currentTeam && (
        <img
          className="w-64  md:mt-[10%] mt-[35%] m-auto"
          src="https://img.freepik.com/premium-photo/3d-business-teamwork-concept-project-management-financial-report-strategy_43969-20377.jpg"
        />
      )}

      {currentTeam && (
        <TeamProfileCard
          setviewTicket={setviewTicket}
          viewTicket={viewTicket}
          team={currentTeam}
        />
      )}
      {teamMembers.length > 0 && (
        <TeamMembersDetails teamMembers={teamMembers} />
      )}
    </div>
  );
};

export default CheckYourTeam;

const TeamProfileCard = ({ team, setviewTicket, viewTicket }) => {
  return (
    <div className="w-full flex flex-col bg-white rounded-2xl border border-gray-300 p-5 text-gray-800">
      <h2 className="text-2xl font-bold mb-4 flex items-center ">
        <Users className="mr-2 text-blue-500" /> {team?.TeamName}
      </h2>
      <div className="space-y-2">
        <div className="flex items-center font-normal">
          <User className="mr-2 text-green-500" /> {team?.LName}
        </div>
        <div className="flex items-center font-normal">
          <Mail className="mr-2 text-red-500" /> {team?.LEmail}
        </div>
        <div className="flex items-center font-normal">
          <GraduationCap className="mr-2 text-purple-500" /> {team?.LCollege} |{" "}
          {team?.LYear} Year
        </div>
        <div className="flex items-center font-normal">
          <Phone className="mr-2 text-yellow-500" /> {team?.LPhoneNo}
        </div>
        <div className="flex items-center font-normal">
          <GraduationCap className="mr-2 text-indigo-500" /> {team?.LDepartment}
        </div>
        <button
          onClick={() => {
            viewTicket ? setviewTicket(false) : setviewTicket(true);
          }}
          className="border rounded-md p-2 text-sm px-5"
        >
          {viewTicket ? "Close Ticket" : "View Ticket"}
        </button>
      </div>
    </div>
  );
};

const TeamMembersDetails = ({ teamMembers }) => {
  return (
    <div className="mt-6 overflow-x-auto">
      <table className="text-xs md:text-sm w-full border border-gray-300 rounded-lg shadow-lg">
        <thead className="bg-blue text-white uppercase text-sm tracking-wide sticky top-0">
          <tr>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Phone Number</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Role</th>
          </tr>
        </thead>
        <tbody>
          {teamMembers.map((member, index) => (
            <tr
              key={member.$id}
              className={`text-center ${
                index % 2 === 0 ? "bg-gray-100" : "bg-white"
              } hover:bg-blue-100 transition`}
            >
              <td className="border border-gray-300 px-4 py-3 font-medium">
                {member.Name}
              </td>
              <td className="border border-gray-300 px-4 py-3">
                {member.PhNumber}
              </td>
              <td className="border border-gray-300 px-4 py-3">
                {member.email}
              </td>
              <td className="border border-gray-300 px-4 py-3">
                {member.Role}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const TeamProfileSkeleton = () => {
  return (
    <>
      <div className="animate-pulse w-full flex flex-col bg-white rounded-2xl border border-gray-300 p-5 text-gray-800">
        <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
          <div className="h-4 bg-gray-300 rounded w-2/3"></div>
          <div className="h-4 bg-gray-300 rounded w-1/3"></div>
          <div className="h-4 bg-gray-300 rounded w-1/4"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        </div>
      </div>
      <div className="mt-6 overflow-x-auto">
        <table className="text-xs md:text-sm w-full border border-gray-300 rounded-lg shadow-lg">
          <thead className="bg-blue text-white uppercase text-sm tracking-wide">
            <tr>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Phone Number</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Role</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4].map((index) => (
              <tr
                key={index}
                className={`text-center ${
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                }`}
              >
                <td className="border border-gray-300 px-4 py-3">
                  <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto"></div>
                </td>
                <td className="border border-gray-300 px-4 py-3">
                  <div className="h-4 bg-gray-300 rounded w-2/3 mx-auto"></div>
                </td>
                <td className="border border-gray-300 px-4 py-3">
                  <div className="h-4 bg-gray-300 rounded w-1/2 mx-auto"></div>
                </td>
                <td className="border border-gray-300 px-4 py-3">
                  <div className="h-4 bg-gray-300 rounded w-1/3 mx-auto"></div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export function HackthonTicket({ currentTeam, teamMembers }) {
  return (
    <div className=" flex flex-col gap-2 items-center justify-center ">
      <div className="bg-white rounded-2xl border border-gray-300  p-4 w-full md:max-w-sm">
        <div className="flex-col flex gap-2 text-center my-4">
          <span className="text-gray-500">Members {teamMembers.length}</span>
          <div className="">
            <div className="w-32 h-32 bg-gray-300 flex items-center justify-center mx-auto rounded-lg">
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
                  currentTeam?.$id
                )}`}
              />
            </div>
            <div className="text-sm mt-5  text-gray-400">
              Ticket No: {currentTeam?.$id}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl  border border-gray-300 p-4 w-full md:max-w-sm flex items-center justify-between">
        <div className="flex items-center justify-center gap-2">
          <div>
            <span className="font-semibold">{currentTeam?.TeamName}</span>
            <span className="block text-sm text-green-500">
              ● {currentTeam?.LName}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
