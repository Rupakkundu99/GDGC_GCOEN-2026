import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Utility/Navbar";
import { AuthProvider } from "@/context/AuthContext";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Utility/Footer";
import RenderAllModal from "@/components/Modal/RenderedAllModal";
import { AOSInit } from "@/components/Utility/aos";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"
        />
      </head>
      <body>
        <AuthProvider>
          <AOSInit/>
          <Toaster position="top-center" reverseOrder={false} />
          <RenderAllModal />
          <Navbar />
          <div className=" md:pt-32 text-base md:text-lg ">{children}</div>{" "}
        </AuthProvider>
        <Footer />
      </body>
    </html>
  );
}
