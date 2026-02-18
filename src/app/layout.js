import RenderAllModal from "@/components/Modal/RenderedAllModal";
import { AOSInit } from "@/components/Utility/aos";
import FooterWrapper from "@/components/Utility/FooterWrapper";
import Navbar from "@/components/Utility/Navbar";
import { AuthProvider } from "@/context/AuthContext";
import { Toaster } from "react-hot-toast";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"
        />
      </head>
      <body suppressHydrationWarning>
        <AuthProvider>
          <AOSInit/>
          <Toaster position="top-center" reverseOrder={false} />
          <RenderAllModal />
          <Navbar />
          <div className=" md:pt-10 text-base md:text-lg ">{children}</div>{" "}
        </AuthProvider>
        <FooterWrapper />
      </body>
    </html>
  );
}
