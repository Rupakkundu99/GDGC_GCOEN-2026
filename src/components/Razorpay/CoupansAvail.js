"use client";
import { useState } from "react";
import { TextField } from "@mui/material";
import { Query } from "appwrite";
import { ListCollectionData, UpdateCollectionData } from "@/Services/Appwrite";
import { CoupansCollection } from "@/config/appwrite";

const CouponsAvail = ({
  couponCode,
  setCouponCode,
  currentCoupon,
  setCurrentCoupon,
  isApplied,
  setisApplied,
}) => {
  const [message, setMessage] = useState("");
  const [isCheck, setIsCheck] = useState(false);
  const [loading, setLoading] = useState(false);
  const [codeDescription, setCodeDescription] = useState("");

  const showMessage = (msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(""), 4000);
  };

  const verifyCoupon = async (e) => {
    e.preventDefault();
    if (!couponCode.trim()) {
      showMessage("Please enter a coupon code");
      return;
    }

    setLoading(true);
    try {
      const response = await ListCollectionData(CoupansCollection, [
        Query.equal("CoupanCode", couponCode),
      ]);

      if (response.documents.length === 0) {
        showMessage("Invalid Coupon Code!");
        return;
      }

      const coupon = response.documents[0];

      if (coupon.NoOfEnteries <= 0) {
        showMessage("This coupon is no longer valid.");
        return;
      }

      setCurrentCoupon(coupon);
      setIsCheck(true);
      setCodeDescription(coupon.Description);
      showMessage("Coupon code verified successfully!");
    } catch (error) {
      showMessage("Error verifying coupon");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const applyCoupon = async (e) => {
    e.preventDefault();
    if (!currentCoupon) {
      showMessage("No coupon available to apply");
      return;
    }

    setLoading(true);
    try {
      setisApplied(true);
      showMessage("Coupon applied successfully!");
    } catch (error) {
      showMessage("Error applying coupon");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border rounded-md flex flex-col gap-2 border-[#787878] p-2 md:p-5">
      <h2 className="font-semibold">Have a coupon?</h2>
      <form className="flex flex-col gap-2">
        <TextField
          label="Coupon Code"
          value={couponCode}
          disabled={isApplied}
          onChange={(e) => setCouponCode(e.target.value)}
          className="disabled:bg-blue1 bg-[#383838] w-full text-white border border-[#787878]"
          id="outlined-size-small"
          size="small"
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
        />
        {message && (
          <p className="text-sm text-white bg-gray-800 rounded-md">{message}</p>
        )}
        {codeDescription && (
          <p className="text-sm text-white rounded-md">{codeDescription}</p>
        )}
        <div className="flex gap-2">
          {!isCheck ? (
            <button
              onClick={verifyCoupon}
              type="button"
              className="bg-blue p-2  px-5 text-black w-full font-semibold rounded-md"
              disabled={loading}
            >
              {loading ? "Checking..." : "Check"}
            </button>
          ) : (
            <button
              onClick={applyCoupon}
              disabled={isApplied}
              type="button"
              className=" disabled:bg-blue-50 bg-blue p-2 px-5 text-black w-full font-semibold rounded-md"
            >
              {loading ? "Applying..." : isApplied ? "Applied" : "Apply"}
            </button>
          )}
          <button
            type="button"
            onClick={() => {
              setCouponCode("");
              setCurrentCoupon(null);
              setisApplied(false);
              setIsCheck(false)
            }}
            // disabled={!currentCoupon}
            className="border disabled:bg-gray-500 px-5 border-gray-600 py-2 rounded-md"
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default CouponsAvail;
