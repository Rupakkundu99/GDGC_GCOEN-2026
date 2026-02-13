import ProfilePage from "@/components/MyAccount/ProfilePage";
import { UsersCollection } from "@/config/appwrite";
import { GetSingleDocument } from "@/Services/Appwrite";
import React from "react";

export const metadata = {
  title: "Profile",
  description: "Profile page",
};

const Profile = async () => {
  return (
    <div>
      <ProfilePage />
    </div>
  );
};

export default Profile;
