"use client";
import { AddDataToCollection, GetSingleDocument } from "@/Services/Appwrite";
import {
    AppwriteDatabase,
    GDGCDatabase,
    ID,
    UserAccount,
    UsersCollection,
} from "@/config/appwrite";
import { welcomeUser } from "@/sampledata/HTMLTemplate";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  // Modal State
  const [authModalOpen, setauthModalOpen] = useState(false);
const [isRatingOpen, setisRatingOpen] = useState(false)

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [userLoading, setuserLoading] = useState(false);
  const [isLogin, setisLogin] = useState(false);
  const router = useRouter();
  useEffect(() => {
    checkUserStatus();
  }, []);

  const checkUserStatus = async () => {
    try {
      setuserLoading(true);
      const accountDetails = await UserAccount.get();
      const UserCollectionData = await GetSingleDocument(
        accountDetails.$id,
        UsersCollection
      );

      setisLogin(true);
      return setUser(UserCollectionData);
    } catch (error) {
      // Expected for guest users — no active session
      setUser(null);
    } finally {
      setLoading(false);
      setuserLoading(false);
    }
  };

  const loginUser = async (email, password) => {
    try {
      await UserAccount.createEmailPasswordSession(email, password);
      setauthModalOpen(false);
      return checkUserStatus();
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const RegisterUser = async (email, password, name, gender, phoneNo) => {
    try {
      const userID = ID.unique();
      const documentData = {
        name,
        email,
        gender,
        phoneNo,
      };

      const res = await AddDataToCollection(
        UsersCollection,
        documentData,
        userID
      );
      console.log(res);
      await UserAccount.create(userID, email, password, name);
      const htmlTemp = welcomeUser(name);
      await fetch("/api/SendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: htmlTemp,
          subject: `Welcome to GDG on Campus, ${name}! 🎉`,
        }),
      });
      await loginUser(email, password);
      return res;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const updateUserDetails = async (userID, updatedData) => {
    try {
      const response = await AppwriteDatabase.updateDocument(
        GDGCDatabase,
        UsersCollection,
        userID,
        updatedData
      );
      setUser(response);
      toast.success("User details updated successfully!");
      return response;
    } catch (error) {
      return toast.error(error.message);
    }
  };

  const logoutUser = async () => {
    try {
      await UserAccount.deleteSession("current");
      toast.success("Logged out successfully");
      checkUserStatus();
      setisLogin(false);
    } catch (error) {
      toast.error("Logout failed. Please try again.");
    }
  };

  const contextData = {
    user,
    loading,
    loginUser,
    logoutUser,
    isLogin,
    RegisterUser,
    updateUserDetails,
    authModalOpen,
    setauthModalOpen,
    userLoading,
    isRatingOpen, setisRatingOpen
  };

  return (
    <AuthContext.Provider value={contextData}>
      {/* {loading ? <FullScreenSpinner />:children} */}
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
