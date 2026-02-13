import React from "react";
import LandingPage from "@/components/Home/LandingPage";
import OurEvent from "@/components/Home/OurEvent";
import Aim from "@/components/Home/Aim";
import Footer from "@/components/Utility/Footer";

export const metadata = {
  title: 'Home',
  description: 'This is the official website of GDGC GCOEN',
  image:"/GDGCPoster.png",
  keywords: 'gdgc, GDGC, gcoen, GCOEN, google, developer, group, club, college, gcoen, nagpur, Nagpur',
}

const HomePage = () => {
  return (
    <div>
      <LandingPage />
      <Aim />
      <OurEvent />
    </div>
  );
};

export default HomePage;
