"use client";
import { AddDataToCollection, UpdateCollectionData } from "@/Services/Appwrite";
import { HackOnMembers, HackOnTeams } from "@/config/appwrite";
import { useEventRegistration } from "@/context/RegistrationPaymentContext";
import { HackOnRegConfirmed } from "@/sampledata/HTMLTemplate";
import { TextField } from "@mui/material";
import { ArrowRight, Check, Loader2, UserRoundPlus } from "lucide-react";
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

// Step status icons with custom styling
const StepIcon = ({ status }) => {
  if (status === "done")
    return (
      <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-green-500 flex items-center justify-center shrink-0">
        <Check className="w-4 h-4 md:w-5 md:h-5 text-white" strokeWidth={3} />
      </div>
    );
  if (status === "active")
    return (
      <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#468EF5] flex items-center justify-center shrink-0 animate-pulse">
        <Loader2 className="w-4 h-4 md:w-5 md:h-5 text-white animate-spin" />
      </div>
    );
  return (
    <div className="w-7 h-7 md:w-8 md:h-8 rounded-full border-2 border-white/15 bg-white/5 shrink-0" />
  );
};

// Progress overlay component — premium design
const SubmissionProgress = ({ submissionState, onClose }) => {
  const steps = [
    { key: "saving", label: "Saving registration", doneLabel: "Registration saved" },
    { key: "emailing", label: "Sending confirmation email", doneLabel: "Confirmation email sent" },
    { key: "updating", label: "Finalizing", doneLabel: "Finalized" },
  ];

  const getStepStatus = (stepKey) => {
    const order = ["saving", "emailing", "updating", "done"];
    const currentIdx = order.indexOf(submissionState);
    const stepIdx = order.indexOf(stepKey);
    if (stepIdx < currentIdx) return "done";
    if (stepIdx === currentIdx) return "active";
    return "pending";
  };

  const isDone = submissionState === "done";

  return (
    <div className="flex flex-col items-center justify-center gap-5 sm:gap-6 py-8 sm:py-10 md:py-14 px-5 sm:px-8">
      
      {/* Top icon */}
      <div className="relative">
        {isDone && (
          <div className="absolute inset-0 rounded-full bg-green-500/20 animate-ping" style={{ animationDuration: "1.5s", animationIterationCount: "2" }} />
        )}
        <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center transition-all duration-500 ${
          isDone
            ? "bg-gradient-to-br from-green-400 to-green-600 shadow-[0_0_30px_rgba(34,197,94,0.3)]"
            : "bg-gradient-to-br from-[#468EF5] to-[#1a56db]"
        }`}>
          {isDone ? (
            <Check className="w-8 h-8 sm:w-10 sm:h-10 text-white" strokeWidth={3} />
          ) : (
            <svg className="w-8 h-8 sm:w-10 sm:h-10 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.2)" strokeWidth="3" />
              <path d="M12 2a10 10 0 0 1 10 10" stroke="white" strokeWidth="3" strokeLinecap="round" />
            </svg>
          )}
        </div>
      </div>

      {/* Title */}
      <div className="text-center">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-tight">
          {isDone ? "Registration Complete!" : "Submitting Registration"}
        </h2>
        {!isDone && (
          <p className="text-white/40 text-xs sm:text-sm mt-2">Please wait, do not close this window</p>
        )}
      </div>

      {/* Step timeline */}
      <div className="w-full max-w-sm flex flex-col mt-2">
        {steps.map((step, index) => {
          const status = getStepStatus(step.key);
          const isLast = index === steps.length - 1;
          return (
            <div key={step.key} className="flex gap-3 sm:gap-4">
              {/* Icon column + connector */}
              <div className="flex flex-col items-center shrink-0">
                <StepIcon status={status} />
                {!isLast && (
                  <div className={`w-0.5 flex-1 my-1 transition-colors duration-300 ${
                    status === "done" ? "bg-green-500/50" : "bg-white/10"
                  }`} />
                )}
              </div>
              {/* Label */}
              <p className={`text-sm sm:text-base font-medium pt-1 transition-colors duration-300 ${isLast ? "pb-0" : "pb-5 sm:pb-6"} ${
                status === "done" ? "text-white" :
                status === "active" ? "text-white" :
                "text-white/25"
              }`}>
                {status === "done" ? step.doneLabel : step.label}
                {status === "active" && (
                  <span className="text-white/40 tracking-widest animate-pulse">...</span>
                )}
              </p>
            </div>
          );
        })}
      </div>

      {/* Done message + button */}
      {isDone && (
        <div className="flex flex-col items-center gap-4 mt-1">
          <p className="text-white/50 text-xs sm:text-sm text-center max-w-xs leading-relaxed">
            A confirmation email has been sent to your inbox. Check your spam folder if you don't see it.
          </p>
          <button
            onClick={onClose}
            className="bg-gradient-to-r from-[#468EF5] to-[#1a56db] text-white px-10 sm:px-12 py-2.5 sm:py-3 rounded-xl font-semibold text-sm sm:text-base hover:shadow-[0_0_20px_rgba(70,142,245,0.3)] transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Done
          </button>
        </div>
      )}
    </div>
  );
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
  // Tracks submission progress: 'idle' | 'saving' | 'emailing' | 'updating' | 'done' | 'email_failed'
  const [submissionState, setSubmissionState] = useState("idle");

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

    // Store leader data before resetting form
    const submittedLeader = { ...leader };
    const submittedMembers = [...members];
    const submittedTeamName = teamName;
    
    try {
      setLoading(true);
      setSubmissionState("saving");
      
      // 1. Create Team Entry (with EmailStatus: "Pending")
      const resHacON = await AddDataToCollection(HackOnTeams, {
        TeamName: submittedTeamName,
        LName: submittedLeader.name,
        LEmail: submittedLeader.email,
        LCollege: submittedLeader.college,
        LYear: submittedLeader.year,
        LPhoneNo: submittedLeader.phnumber,
        LDepartment: submittedLeader.department,
        PaymentID: "FREE",
        Amount: "0",
        Coupons: "N/A",
        EmailStatus: "Pending",
      });

      // 2. Run QR code generation + Leader + Members creation in PARALLEL
      const memberPromises = submittedMembers.map(({ name, phoneNo, email }) =>
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
          Name: submittedLeader.name,
          PhNumber: submittedLeader.phnumber,
          email: submittedLeader.email,
          Role: "Leader",
          hackOnTeams: resHacON.$id,
        }),
        ...memberPromises,
      ]);

      // Reset form now that data is saved
      setTeamName("");
      setLeader({ name: "", email: "", college: "", year: "", department: "", phnumber: "" });
      setMembers([]);

      // 3. Send Email (blocking — we wait for the result)
      setSubmissionState("emailing");

      const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
        resHacON.$id
      )}`;
      
      const HTMLDATA = HackOnRegConfirmed(
        submittedLeader.name,
        qrCodeUrl,
        "HackOn 2.0",
        "10th March 2026",
        "GCOEN",
        submittedMembers,
        "Confirmed",
        submittedLeader,
        "FREE",
        submittedTeamName,
        "0"
      );

      const emailRes = await fetch("/api/SendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: submittedLeader.name,
          email: submittedLeader.email,
          message: HTMLDATA,
          subject: "Registration Confirmed - HackOn 2.0",
          attachments: [
            {
              filename: "RuleBook.pdf",
              path: "https://cloud.appwrite.io/v1/storage/buckets/6773765e0004f634a5e5/files/67a3b089001be670273c/view?project=677365e100183b7a1198",
            },
          ],
        }),
      });

      if (emailRes.ok) {
        // 4. Email sent — update EmailStatus to "Sent"
        setSubmissionState("updating");
        try {
          await UpdateCollectionData(HackOnTeams, resHacON.$id, {
            EmailStatus: "Sent",
          });
        } catch (updateErr) {
          console.warn("EmailStatus update failed:", updateErr.message);
        }
      } else {
        // Email failed, but registration is saved — that's what matters
        console.warn("Email sending failed, but registration is saved in Appwrite.");
      }
      // Registration is saved → always show done
      setSubmissionState("done");
    } catch (error) {
      console.error(error);
      if (submissionState === "emailing" || submissionState === "updating") {
        // Registration was saved, email/update failed — still show done
        setSubmissionState("done");
      } else {
        // Registration itself failed — this is the only real error
        toast.error(error.message || "Something went wrong!");
        setSubmissionState("idle");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col gap-5 md:w-[100%] pb-4">
      {submissionState !== "idle" ? (
        <SubmissionProgress submissionState={submissionState} onClose={() => {
          setSubmissionState("idle");
          if (onClose) onClose();
        }} />
      ) : (
      <>
      <h2 className="font-semibold text-2xl text-white">Team Details</h2>
      <form onSubmit={handleSubmit} onKeyDown={(e) => {
        if (e.key === "Enter" && e.target.tagName !== "BUTTON") {
          e.preventDefault();
          // Move focus to the next input
          const inputs = e.currentTarget.querySelectorAll("input");
          const currentIdx = Array.from(inputs).indexOf(e.target);
          if (currentIdx >= 0 && currentIdx < inputs.length - 1) {
            inputs[currentIdx + 1].focus();
          }
        }
      }} className="flex-col flex gap-3">
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
      </>
      )}
    </div>
  );
};

export default TeamDetailsHackOn;
