"use client";
import React from "react";
import { toast } from "react-hot-toast";
import { useEventRegistration } from "@/context/RegistrationPaymentContext";
import { TextField } from "@mui/material";
import { ArrowRight, UserRoundPlus } from "lucide-react";
const TeamDetailsHackOn = () => {
  const {
    teamName,
    setTeamName,
    leader,
    setLeader,
    members,
    setMembers,
    newMember,
    setNewMember,
    setUserRegiSteps,
  } = useEventRegistration();

  // Function to add a team member
  const addMember = (e) => {
    e.preventDefault();
    if (members.length >= 3) {
      toast.error("You can add a maximum of 3 members!");
      return;
    }
    if (newMember.phoneNo.length != 10) {
      return toast.error("Phone No must be 10 digit!");
    }
    if (!newMember.name || !newMember.email || !newMember.phoneNo) {
      toast.error("Please fill in all member details!");
      return;
    }
    setMembers([...members, newMember]);
    setNewMember({ name: "", email: "", phoneNo: "" });
    toast.success("Member added successfully!");
  };
  // Function to delete a member
  const deleteMember = (index) => {
    setMembers((prevMembers) => prevMembers.filter((_, i) => i !== index));
    toast.success("Member removed!");
  };

  // Function to send form data
  const handleSubmit = (e) => {
    e.preventDefault();
    if (leader.phnumber.length != 10) {
      return toast.error("Phone No must be 10 digit!");
    }
    if (
      !teamName ||
      !leader.name ||
      !leader.email ||
      !leader.phnumber ||
      !leader.college ||
      !leader.department ||
      !leader.college
    ) {
      toast.error("Fill all the fields!");
      return;
    }
    if (members.length < 1) {
      toast.error("You must add at least 1 team members!");
      return;
    }
    setUserRegiSteps(2);
  };

  return (
    <div className="w-full flex flex-col gap-5 md:w-[100%]">
      <h2 className="font-semibold  text-2xl">Team Details</h2>
      <form onSubmit={handleSubmit} className="flex-col flex gap-3">
        <TextField
          label="Team Name"
          className="bg-[#383838] text-white border border-[#787878] "
          id="outlined-size-small"
          required={true}
          size="small"
          sx={{
            input: { color: "white" }, // Text color
            label: { color: "#787878" }, // Label color
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#787878" }, // Default border color
              "&:hover fieldset": { borderColor: "#468EF5" }, // Border color on hover
              "&.Mui-focused fieldset": { borderColor: "white" }, // Border color on focus
            },
            "& .MuiInputLabel-root.Mui-focused": { color: "white" }, // Label color on focus
          }}
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
        />
        <div className="flex-col flex gap-3">
          <h2 className="font-semibold  text-2xl">Leader Details</h2>
          <TextField
            label="Full Name"
            required={true}
            className="bg-[#383838] text-white border border-[#787878] "
            id="outlined-size-small"
            size="small"
            sx={{
              input: { color: "white" }, // Text color
              label: { color: "#787878" }, // Label color
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#787878" }, // Default border color
                "&:hover fieldset": { borderColor: "#468EF5" }, // Border color on hover
                "&.Mui-focused fieldset": { borderColor: "white" }, // Border color on focus
              },
              "& .MuiInputLabel-root.Mui-focused": { color: "white" }, // Label color on focus
            }}
            value={leader.name}
            onChange={(e) => setLeader({ ...leader, name: e.target.value })}
          />

          <TextField
            required={true}
            label="Email"
            className="bg-[#383838] text-white border border-[#787878] "
            id="outlined-size-small"
            type="email"
            size="small"
            sx={{
              input: { color: "white" }, // Text color
              label: { color: "#787878" }, // Label color
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#787878" }, // Default border color
                "&:hover fieldset": { borderColor: "#468EF5" }, // Border color on hover
                "&.Mui-focused fieldset": { borderColor: "white" }, // Border color on focus
              },
              "& .MuiInputLabel-root.Mui-focused": { color: "white" }, // Label color on focus
            }}
            value={leader.email}
            onChange={(e) => setLeader({ ...leader, email: e.target.value })}
          />

          <TextField
            label="College Name"
            className="bg-[#383838] text-white border border-[#787878] "
            id="outlined-size-small"
            size="small"
            required={true}
            sx={{
              input: { color: "white" }, // Text color
              label: { color: "#787878" }, // Label color
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#787878" }, // Default border color
                "&:hover fieldset": { borderColor: "#468EF5" }, // Border color on hover
                "&.Mui-focused fieldset": { borderColor: "white" }, // Border color on focus
              },
              "& .MuiInputLabel-root.Mui-focused": { color: "white" }, // Label color on focus
            }}
            value={leader.college}
            onChange={(e) => setLeader({ ...leader, college: e.target.value })}
          />

          <TextField
            label="Year"
            required={true}
            type="number"
            className="bg-[#383838] text-white border border-[#787878] "
            id="outlined-size-small"
            size="small"
            inputProps={{ min: 1 }}
            sx={{
              input: { color: "white" },
              label: { color: "#787878" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#787878" },
                "&:hover fieldset": { borderColor: "#468EF5" },
                "&.Mui-focused fieldset": { borderColor: "white" },
              },
              "& .MuiInputLabel-root.Mui-focused": { color: "white" },
            }}
            value={leader.year}
            onChange={(e) => {
              const value = e.target.value;
              if (/^\d*$/.test(value) && parseInt(value) >= 1) {
                setLeader({ ...leader, year: value });
              }
            }}
          />

          <TextField
            label="Phone Number"
            required={true}
            type="text" // Change type to text to prevent negative values
            className="bg-[#383838] text-white border border-[#787878] "
            id="outlined-size-small"
            size="small"
            inputProps={{ maxLength: 10 }} // Limit input to 10 digits
            sx={{
              input: { color: "white" },
              label: { color: "#787878" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#787878" },
                "&:hover fieldset": { borderColor: "#468EF5" },
                "&.Mui-focused fieldset": { borderColor: "white" },
              },
              "& .MuiInputLabel-root.Mui-focused": { color: "white" },
            }}
            value={leader.phnumber}
            onChange={(e) => {
              const value = e.target.value;
              if (/^\d*$/.test(value) && value.length <= 10) {
                setLeader({ ...leader, phnumber: value });
              }
            }}
          />

          <TextField
            label="Department"
            className="bg-[#383838] text-white border border-[#787878] "
            id="outlined-size-small"
            size="small"
            required={true}
            sx={{
              input: { color: "white" }, // Text color
              label: { color: "#787878" }, // Label color
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#787878" }, // Default border color
                "&:hover fieldset": { borderColor: "#468EF5" }, // Border color on hover
                "&.Mui-focused fieldset": { borderColor: "white" }, // Border color on focus
              },
              "& .MuiInputLabel-root.Mui-focused": { color: "white" }, // Label color on focus
            }}
            value={leader.department}
            onChange={(e) =>
              setLeader({ ...leader, department: e.target.value })
            }
          />
        </div>
        <div className="flex-col border border-[#787878] p-2 md:p-3 rounded-md flex gap-3">
          <h2 className="font-semibold  text-2xl">Team Members Details</h2>
          <div className="flex rounded-md  flex-col gap-3">
            <TextField
              label="Full Name"
              className="bg-[#383838] text-white border border-[#787878] "
              id="outlined-size-small"
              size="small"
              sx={{
                input: { color: "white" }, // Text color
                label: { color: "#787878" }, // Label color
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#787878" }, // Default border color
                  "&:hover fieldset": { borderColor: "#468EF5" }, // Border color on hover
                  "&.Mui-focused fieldset": { borderColor: "white" }, // Border color on focus
                },
                "& .MuiInputLabel-root.Mui-focused": { color: "white" }, // Label color on focus
              }}
              value={newMember.name}
              onChange={(e) =>
                setNewMember({ ...newMember, name: e.target.value })
              }
            />

            <TextField
              label="Phone Number"
              type="text" // Change type to text to prevent negative values
              className="bg-[#383838] text-white border border-[#787878] "
              id="outlined-size-small"
              size="small"
              inputProps={{ maxLength: 10 }} // Limit input to 10 digits
              sx={{
                input: { color: "white" },
                label: { color: "#787878" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#787878" },
                  "&:hover fieldset": { borderColor: "#468EF5" },
                  "&.Mui-focused fieldset": { borderColor: "white" },
                },
                "& .MuiInputLabel-root.Mui-focused": { color: "white" },
              }}
              value={newMember.phoneNo}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d*$/.test(value) && value.length <= 10) {
                  setNewMember({ ...newMember, phoneNo: e.target.value });
                }
              }}
            />

            <TextField
              label="Email"
              type="email"
              className="bg-[#383838] text-white border border-[#787878] "
              id="outlined-size-small"
              size="small"
              sx={{
                input: { color: "white" }, // Text color
                label: { color: "#787878" }, // Label color
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#787878" }, // Default border color
                  "&:hover fieldset": { borderColor: "#468EF5" }, // Border color on hover
                  "&.Mui-focused fieldset": { borderColor: "white" }, // Border color on focus
                },
                "& .MuiInputLabel-root.Mui-focused": { color: "white" }, // Label color on focus
              }}
              value={newMember.email}
              onChange={(e) =>
                setNewMember({ ...newMember, email: e.target.value })
              }
            />
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => {
                  setNewMember({
                    name: "",
                    email: "",
                    phoneNo: "",
                  });
                }}
                className="p-2 border-[#787878] text-red-400 border bg-transparent rounded-md "
              >
                Clear
              </button>
              <button
                onClick={addMember}
                className="p-2  flex gap-3 items-center justify-center w-full text-black bg-white rounded-md "
              >
                <UserRoundPlus />
                Add Member
              </button>
            </div>
          </div>
        </div>
        {members.length > 0 && (
          <div className="overflow-scroll">
            <table className="w-full mt-2 border rounded-xl  border-[#787878]">
              <thead className="">
                <tr className=" rounded-xl border text-white">
                  <th className="p-2 border-[#787878] border bg-blue">Name</th>
                  <th className="p-2 border-[#787878] border bg-blue">
                    Phone No
                  </th>
                  <th className="p-2 border-[#787878] border bg-blue">Email</th>
                  <th className="p-2 border-[#787878] border bg-blue">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {members.map((member, index) => (
                  <tr key={index} className=" text-white">
                    <td className="p-2 border-[#787878] border bg-transparent">
                      {member.name}
                    </td>
                    <td className="p-2 border-[#787878] border bg-transparent">
                      {member.phoneNo}
                    </td>
                    <td className="p-2 border-[#787878] border bg-transparent">
                      {member.email}
                    </td>
                    <td className="p-2 border-[#787878] border bg-transparent text-center">
                      <button
                        onClick={() => deleteMember(index)}
                        className="text-red-500"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <div className=" z-50 md:relative md:mt-5 md:px-0  fixed bottom-0   left-0 w-full">
          <button
            type="submit"
            className=" bg-blue flex gap-2  items-center justify-center text-black w-full text-center p-3 rounded-t-lg  font-semibold"
          >
            Proceed to Next
            <ArrowRight />
          </button>
        </div>
      </form>
    </div>
  );
};

export default TeamDetailsHackOn;
