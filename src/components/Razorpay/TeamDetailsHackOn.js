"use client";
import { AddDataToCollection } from "@/Services/Appwrite";
import { HackOnMembers, HackOnTeams } from "@/config/appwrite";
import { useEventRegistration } from "@/context/RegistrationPaymentContext";
import { HackOnRegConfirmed } from "@/sampledata/HTMLTemplate";
import { TextField } from "@mui/material";
import { ArrowRight, Loader2, UserRoundPlus } from "lucide-react";
import { useState } from "react";
import { toast } from "react-hot-toast";

// Shared MUI sx for dark-themed TextFields with autofill fix
const darkFieldSx = {
  input: { color: "white" },
  label: { color: "#787878" },
  "& .MuiOutlinedInput-root": {
    "& fieldset": { borderColor: "#787878" },
    "&:hover fieldset": { borderColor: "#468EF5" },
    "&.Mui-focused fieldset": { borderColor: "white" },
  },
  "& .MuiInputLabel-root.Mui-focused": { color: "white" },
  "& input:-webkit-autofill": {
    WebkitBoxShadow: "0 0 0 1000px #383838 inset !important",
    WebkitTextFillColor: "white !important",
    caretColor: "white !important",
  },
};

const TeamDetailsHackOn = ({ onClose }) => {
  const {
    teamName,
    setTeamName,
    leader,
    setLeader,
    members,
    setMembers,
    newMember,
    setNewMember,
    generateQRCodeUrl,
  } = useEventRegistration();

  const [loading, setLoading] = useState(false);

  // Function to add a team member
  const addMember = (e) => {
    e.preventDefault();
    if (members.length >= 3) {
      toast.error("You can add a maximum of 3 members (Total 4 including Leader)!");
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
  const handleSubmit = async (e) => {
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
      !leader.year
    ) {
      toast.error("Fill all the fields!");
      return;
    }
    // Validation: 1-4 members total. Leader is 1. So members can be 0-3.
    // The previous validation was members.length < 1 (requiring at least 2 people).
    // User requested "1-4 members", so 1 person team is valid.
    
    try {
      setLoading(true);
      
      // 1. Create Team Entry
      const resHacON = await AddDataToCollection(HackOnTeams, {
        TeamName: teamName,
        LName: leader.name,
        LEmail: leader.email,
        LCollege: leader.college,
        LYear: leader.year,
        LPhoneNo: leader.phnumber,
        LDepartment: leader.department,
        PaymentID: "FREE",
        Amount: "0",
        Coupons: "N/A",
      });

      // 2. Run QR code generation + Leader + Members creation in PARALLEL
      const memberPromises = members.map(({ name, phoneNo, email }) =>
        AddDataToCollection(HackOnMembers, {
          Name: name,
          PhNumber: phoneNo,
          email: email,
          Role: "Member",
          hackOnTeams: resHacON.$id,
        })
      );

      await Promise.all([
        generateQRCodeUrl(resHacON.$id),
        AddDataToCollection(HackOnMembers, {
          Name: leader.name,
          PhNumber: leader.phnumber,
          email: leader.email,
          Role: "Leader",
          hackOnTeams: resHacON.$id,
        }),
        ...memberPromises,
      ]);

      // 3. Generate Email HTML
      const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
        resHacON.$id
      )}`;
      
      const HTMLDATA = HackOnRegConfirmed(
        leader.name,
        qrCodeUrl,
        "HackOn 2.0",
        "10th March 2026",
        "GCOEN",
        members,
        "Confirmed",
        leader,
        "FREE",
        teamName,
        "0"
      );

      // 4. Show success immediately, send email in background
      toast.success("Registration successful! Confirmation email is on its way.");
      setTeamName("");
      setLeader({
          name: "",
          email: "",
          college: "",
          year: "",
          department: "",
          phnumber: "",
      });
      setMembers([]);
      if (onClose) onClose();

      // Fire email in background (non-blocking)
      fetch("/api/SendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: leader.name,
          email: leader.email,
          message: HTMLDATA,
          subject: "Registration Confirmed - HackOn 2.0",
          attachments: [
            {
                filename: "RuleBook.pdf",
                path: "https://cloud.appwrite.io/v1/storage/buckets/6773765e0004f634a5e5/files/67a3b089001be670273c/view?project=677365e100183b7a1198",
            },
          ],
        }),
      }).catch(() => {
        // Email failed silently — registration was already saved
        console.warn("Email sending failed, but registration is saved.");
      });
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col gap-5 md:w-[100%] pb-4">
      <h2 className="font-semibold text-2xl text-white">Team Details</h2>
      <form onSubmit={handleSubmit} className="flex-col flex gap-3">
        <TextField
          label="Team Name"
          className="bg-[#383838] text-white border border-[#787878] "
          id="outlined-size-small"
          required={true}
          size="small"
          sx={darkFieldSx}
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
        />
        <div className="flex-col flex gap-3">
          <h2 className="font-semibold text-2xl text-white">Leader Details</h2>
          <TextField
            label="Full Name"
            required={true}
            className="bg-[#383838] text-white border border-[#787878] "
            id="outlined-size-small"
            size="small"
            sx={darkFieldSx}
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
            sx={darkFieldSx}
            value={leader.email}
            onChange={(e) => setLeader({ ...leader, email: e.target.value })}
          />

          <TextField
            label="College Name"
            className="bg-[#383838] text-white border border-[#787878] "
            id="outlined-size-small"
            size="small"
            required={true}
            sx={darkFieldSx}
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
            sx={darkFieldSx}
            value={leader.department}
            onChange={(e) =>
              setLeader({ ...leader, department: e.target.value })
            }
          />
        </div>
        <div className="flex-col border border-[#787878] p-2 md:p-3 rounded-md flex gap-3">
          <h2 className="font-semibold text-2xl text-white">Team Members Details</h2>
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
                type="button"
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
          <div className="overflow-auto">
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
                        type="button"
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
        <div className="mt-5 w-full">
          <button
            type="submit"
            disabled={loading}
            className="bg-blue flex gap-2 items-center justify-center text-black w-full text-center p-3 rounded-lg font-semibold disabled:bg-gray-500 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? (
                <>
                    <Loader2 className="animate-spin" /> Submitting...
                </>
            ) : (
                <>
                    Submit Registration <ArrowRight />
                </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default TeamDetailsHackOn;
