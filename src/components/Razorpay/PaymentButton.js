"use client";
import { useEventRegistration } from "@/context/RegistrationPaymentContext";
import { HackOnRegConfirmed } from "@/sampledata/HTMLTemplate";
import Script from "next/script";
import React, { useState, useRef } from "react";
import toast from "react-hot-toast";
import { PaymentFailed, PaymentSuccess } from "./PaymentResult";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import HackOnRegInvoiced from "./HackOnRegInvoiced";
import { AddDataToCollection, UpdateCollectionData } from "@/Services/Appwrite";
import {
  CoupansCollection,
  HackOnMembers,
  HackOnTeams,
} from "@/config/appwrite";
import { ArrowRight } from "lucide-react";
import { BtnSpinner } from "../Utility/Loaders";
import CoupansAvail from "./CoupansAvail";
import Link from "next/link";
export const TicketType = () => {
  const { Tickets, setUserRegiSteps } = useEventRegistration();
  return (
    <div className="flex gap-2 flex-col">
      <div className="flex border-b py-2 border-gray-500 mb-2 md:mb-5  gap-5 items-center ">
        <button
          onClick={() => {
            setUserRegiSteps(1);
          }}
          className="p-2 border rounded-full border-[#787878]  px-5"
        >
          Back
        </button>
        <h2 className="font-semibold  text-2xl">Ticket Type</h2>
      </div>
      {Tickets.map((item, index) => {
        return (
          <div key={index} className="border  border-gray-500 p-2 rounded-md">
            <div className="flex items-center justify-between ">
              <p>{item.Tname}</p>
              <button
                onClick={() => {
                  setUserRegiSteps(3);
                }}
                disabled={typeof item.TPrice != "number"}
                className={`disabled:bg-gray-600   bg-[#383838] p-2 rounded-md `}
              >
                {typeof item.TPrice == "number"
                  ? `₹  ${item.TPrice} /Person`
                  : item.TPrice}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export const BillingDetails = () => {
  const {
    TeamsDetails,
    currentPrice,
    setUserRegiSteps,
    currentQRCodeURL,
    generateQRCodeUrl,
  } = useEventRegistration();

  const [couponCode, setCouponCode] = useState("");
  const [currentCoupon, setCurrentCoupon] = useState(null);
  const [isApplied, setisApplied] = useState(false);

  const TeamMembersPrice = TeamsDetails?.members?.length * currentPrice;
  const totalPrice = Math.round(TeamMembersPrice + currentPrice);
  const withTaxPrice = Math.round((3 / 100) * totalPrice);
  const SubTotal = Math.round(withTaxPrice + totalPrice);
  const GrandTotal = Math.round(
    isApplied ? SubTotal - (SubTotal / 100) * currentCoupon?.Offer : SubTotal
  );
  const tax2 = Math.round((SubTotal / 100) * 2);
  const [loading, setloading] = useState(false);
  const [isPaymentDone, setisPaymentDone] = useState("");
  const [paymentID, setpaymentID] = useState("");
  const [arLoading, setarLoading] = useState(false);

  const createOrder = async () => {
    try {
      setloading(true);
      const res = await fetch("/api/razorpay/CreateOrder", {
        method: "POST",
        body: JSON.stringify({ amount: GrandTotal * 100 }),
      });
      const data = await res.json();

      const paymentData = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        order_id: data.id,
        name: "GDGC GCOEN",
        image: "/logo.svg",
        handler: async function (response) {
          // verify payment
          const res = await fetch("/api/razorpay/verifyOrder", {
            method: "POST",
            body: JSON.stringify({
              orderId: response.razorpay_order_id,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpaySignature: response.razorpay_signature,
            }),
          });
          const data = await res.json();
          const updatedEntries = Math.max(0, currentCoupon.NoOfEnteries - 1);
          await UpdateCollectionData(CoupansCollection, currentCoupon.$id, {
            NoOfEnteries: updatedEntries,
          });

          if (data.isOk) {
            setloading(true);
            setpaymentID(response.razorpay_payment_id);
            const resHacON = await AddDataToCollection(HackOnTeams, {
              TeamName: TeamsDetails?.teamName,
              LName: TeamsDetails.leader?.name,
              LEmail: TeamsDetails.leader?.email,
              LCollege: TeamsDetails.leader?.college,
              LYear: TeamsDetails.leader?.year,
              LPhoneNo: TeamsDetails.leader?.phnumber,
              LDepartment: TeamsDetails.leader?.department,
              PaymentID: response.razorpay_payment_id,
              Amount: `${SubTotal - tax2}`,
              Coupons: currentCoupon?.CoupanCode,
            });
            await generateQRCodeUrl(resHacON.$id);
            await AddDataToCollection(HackOnMembers, {
              Name: TeamsDetails.leader?.name,
              PhNumber: TeamsDetails.leader?.phnumber,
              email: TeamsDetails.leader?.email,
              Role: "Leader",
              hackOnTeams: resHacON.$id,
            });
            await TeamsDetails?.members?.map(
              async ({ name, phoneNo, email }) => {
                await AddDataToCollection(HackOnMembers, {
                  Name: name,
                  PhNumber: phoneNo,
                  email: email,
                  Role: "Member",
                  hackOnTeams: resHacON.$id,
                });
              }
            );

            const HTMLDATA = HackOnRegConfirmed(
              TeamsDetails.leader?.name,
              `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
                resHacON.$id
              )}`,
              "Hack on",
              "21st Feb 2025",
              "GCOEN",
              TeamsDetails?.members,
              "Success",
              TeamsDetails.leader,
              response.razorpay_payment_id,
              TeamsDetails?.teamName,
              SubTotal
            );

            const resMail = await fetch("/api/SendEmail", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name: TeamsDetails.leader.name,
                email: TeamsDetails.leader.email,
                message: HTMLDATA,
                subject: "Thank you for Register the Event!",
                attachments: [
                  {
                    filename: "RuleBook.pdf",
                    path: "https://cloud.appwrite.io/v1/storage/buckets/6773765e0004f634a5e5/files/67a3b089001be670273c/view?project=677365e100183b7a1198",
                  },
                ],
              }),
            });
            if (resMail.ok) {
              setisPaymentDone("done");
              setloading(false);
              await resMail.json();
              toast.success("Registration successfully, Check Your Email");
            } else {
              setisPaymentDone("failed");
              setloading(false);
            }
          } else {
            toast.error("Payment failed");
          }
        },
      };
      const payment = new window.Razorpay(paymentData);
      payment.open();
    } catch (err) {
      toast.error(err.message);
    } finally {
      setloading(false);
    }
  };

  const pdfRef = useRef();
  const hideExternalStyles = () => {
    document.querySelectorAll("link[rel='stylesheet']").forEach((link) => {
      if (link.href.includes("cdn") || link.href.includes("external")) {
        link.disabled = true;
      }
    });
  };

  const restoreExternalStyles = () => {
    document.querySelectorAll("link[rel='stylesheet']").forEach((link) => {
      link.disabled = false;
    });
  };

  const downloadPDF = () => {
    try {
      setarLoading(true);
      hideExternalStyles(); // Hide problematic styles
      const input = pdfRef.current;

      html2canvas(input, { scale: 2, useCORS: true, allowTaint: true }).then(
        (canvas) => {
          restoreExternalStyles(); // Restore styles after capturing

          const imgData = canvas.toDataURL("image/png");
          const pdf = new jsPDF("p", "mm", "a4");
          const imgWidth = 180;
          const imgHeight = (canvas.height * imgWidth) / canvas.width;
          const centerX = (210 - imgWidth) / 2;

          pdf.addImage(imgData, "PNG", centerX, 0, imgWidth, imgHeight);
          pdf.save("Registration_Invoice.pdf");
        }
      );
    } catch (error) {
      toast.error(error.message);
    } finally {
      setarLoading(false);
    }
  };

  return (
    <div>
      <Script
        type="text/javascript"
        src="https://checkout.razorpay.com/v1/checkout.js"
      />
      <div className="flex border-b py-2 border-gray-500 mb-2 md:mb-5  gap-5 items-center ">
        <button
          onClick={() => {
            setUserRegiSteps(2);
          }}
          className="p-2 border rounded-full border-[#787878]  px-5"
        >
          Back
        </button>
        <h2 className="font-semibold  text-2xl">Total Payable Fee</h2>
      </div>
      <CoupansAvail
        couponCode={couponCode}
        setCouponCode={setCouponCode}
        currentCoupon={currentCoupon}
        setCurrentCoupon={setCurrentCoupon}
        isApplied={isApplied}
        setisApplied={setisApplied}
      />
      <table className="w-full rounded-md  border border-[#787878] mt-2">
        <thead>
          <tr className=" bg-blue text-white">
            <th className="p-2 border border-[#787878]">Items</th>
            <th className="p-2 border border-[#787878]">Quantity</th>
            <th className="p-2 border border-[#787878]">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-transparent text-white">
            <td className="p-2 border border-[#787878]">Team Leader</td>
            <td className="p-2 border border-[#787878] text-center">1</td>
            <td className="p-2 border border-[#787878] text-center">
              ₹ {currentPrice}{" "}
            </td>
          </tr>
          <tr className="bg-transparent text-white">
            <td className="p-2 border border-[#787878]">Team Members</td>
            <td className="p-2 border text-center border-[#787878]">
              {TeamsDetails?.members?.length}
            </td>
            <td className="p-2 border border-[#787878] text-center">
              ₹ {TeamMembersPrice}
            </td>
          </tr>

          <tr
            aria-colspan={2}
            className=" bg-transparent font-semibold text-white"
          >
            <td className="p-2 ">Sub Total</td>
            <td className="p-2 "></td>
            <td className="p-2 border border-[#787878] text-center">
              ₹ {totalPrice}
            </td>
          </tr>

          <tr
            aria-colspan={2}
            className=" bg-transparent font-semibold text-white"
          >
            <td className="p-2 ">Taxes & Charges (3%)</td>
            <td className="p-2 "></td>
            <td className="p-2 border border-[#787878] text-center ">
              ₹ {withTaxPrice}
            </td>
          </tr>
          <tr
            aria-colspan={2}
            className=" bg-gray-700 font-semibold text-black"
          >
            <td className="p-2 ">Total (Including Taxes)</td>
            <td className="p-2 "></td>
            <td className="p-2 border border-[#787878] text-center">
              ₹ {SubTotal}
            </td>
          </tr>

          {isApplied && (
            <tr
              aria-colspan={2}
              className=" bg-transparent font-semibold text-white"
            >
              <td className="p-2 ">
                Coupon ({couponCode} ({currentCoupon?.Offer}%)){" "}
              </td>
              <td className="p-2 "></td>
              <td className="p-2 border border-[#787878] text-center ">
                ₹ {Math.round((SubTotal / 100) * currentCoupon?.Offer)}
              </td>
            </tr>
          )}

          <tr aria-colspan={2} className=" bg-white font-semibold text-black">
            <td className="p-2 ">Grand Total</td>
            <td className="p-2 "></td>
            <td className="p-2 border border-[#787878] text-center">
              ₹ {GrandTotal}
            </td>
          </tr>
        </tbody>
      </table>
      {isPaymentDone == "done" && (
        <div className=" z-50 md:relative md:mt-5 md:px-0  fixed bottom-0   left-0 w-full">
          <button
            type="submit"
            onClick={downloadPDF}
            className=" bg-blue flex gap-2  items-center justify-center text-black w-full text-center p-3 rounded-t-lg  font-semibold"
          >
            {" "}
            {arLoading ? "Downloading..." : "Download Details"}
            <ArrowRight />
          </button>
        </div>
      )}
      <div className="flex  flex-col gap-2 mt-2 md:mt-5 md:gap-5 ">
        {isPaymentDone == "done" && <PaymentSuccess paymentID={paymentID} />}
        {isPaymentDone == "done" && (
          <HackOnRegInvoiced
            ref={pdfRef}
            name={TeamsDetails.leader?.name}
            qrCode={currentQRCodeURL}
            EventName="Hack on"
            eventDate="21st Feb 2025"
            eventLocation="GCOEN"
            members={TeamsDetails?.members}
            paymentStatus={isPaymentDone == "done" ? "Success" : "Pending"}
            leader={TeamsDetails.leader}
            paymentID={paymentID}
            TeamName={TeamsDetails?.teamName}
            SubTotal={SubTotal}
          />
        )}
      </div>
      <div className="text-sm">
        <p>
          {" "}
          Fill out this form if the money was debited but the registration was
          not confirmed.
        </p>
        <Link
          href="https://forms.gle/LDRhsdfYdb7a6txf8"
          target="_blank"
          className="font-semibold text-blue"
        >
          Click here
        </Link>
      </div>{" "}
      {loading && <PaymentLoading />}{" "}
      {isPaymentDone == "failed" && <PaymentFailed />}
      {isPaymentDone != "done" && (
        <div className=" z-50 md:relative md:mt-5 md:px-0  fixed bottom-0   left-0 w-full">
          <button
            type="submit"
            disabled={loading}
            onClick={createOrder}
            className=" bg-blue flex gap-2  items-center justify-center text-black w-full text-center p-3 rounded-t-lg  font-semibold"
          >
            {" "}
            {loading ? "Waiting..." : "Proceed to Payment"}
            <ArrowRight />
          </button>
        </div>
      )}
    </div>
  );
};

const PaymentLoading = () => {
  return (
    <>
      <div className="p-2 border border-gray-600 rounded-xl grid place-items-center h-32">
        <div className="grid place-items-center gap-2">
          <BtnSpinner />
          <p>Validating Payments</p>
        </div>
      </div>
      <p className="text-sm text-center py-2 text-gray-500">
        Don't Refresh page During Payment
      </p>
    </>
  );
};
