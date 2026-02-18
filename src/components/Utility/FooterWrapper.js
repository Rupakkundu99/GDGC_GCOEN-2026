"use client";
import { usePathname } from "next/navigation";
import Footer from "./Footer";

const FooterWrapper = () => {
  const pathname = usePathname();

  // Don't render global footer on home page
  if (pathname === "/") {
    return null;
  }

  return <Footer />;
};

export default FooterWrapper;
