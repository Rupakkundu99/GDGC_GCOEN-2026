"use client";
import DefaultBtn from "./DefaultBtn";
import { rethink_sans800 } from "@/Fonts/Rethink";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const Footer = () => {
  const router = useRouter();

  return (
    <footer className="bg-footer_bg">
      <div className="container m-auto">
        <div
          className={`flex flex-col md:flex-row ${rethink_sans800} px-5  py-8 md:py-16`}
        >
          {/* Call-to-Action Section */}
          <div className="text-white flex flex-col items-center md:items-end font-bold text-2xl sm:text-3xl md:text-4xl leading-snug gap-y-4 mt-8 md:mt-0">
            <p>Excited? Why wait! </p>
            <p>Let's host together</p>
            <DefaultBtn
              func={() => {
                router.push("/ContactUs");
              }}
              name="Event with us"
              HoverColor="hover:bg-gray3 text-black"
              txtColor="text-black bg-white border-2 border-black"
            />
          </div>
        </div>

        {/* Frame 124 - Bottom Box */}
        <div className="flex justify-center py-8 px-5">
          <div className="border-2 border-black rounded-[62px] bg-white relative" style={{ width: "1540px", height: "221px", maxWidth: "95vw", display: "flex", alignItems: "center" }}>
            
            {/* Left Section - Vector and Social Icons */}
            <div style={{ position: "absolute", left: "29px", display: "flex", flexDirection: "column", gap: "20px", alignItems: "flex-start" }}>
              {/* Vector - Top */}
              <img src="/vector26.png" alt="Vector" style={{ width: "60px", height: "60px" }} />

              {/* Frame 45 - Social Icons in 2 rows */}
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {/* Row 1 - Instagram, Whatsapp, LinkedIn */}
                <div style={{ display: "flex", gap: "12px" }}>
                  <a href="https://www.instagram.com/gdgcgcoen/" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center" }}>
                    <img src="/blackinsta.png" alt="Instagram" style={{ width: "28px", height: "28px", cursor: "pointer" }} />
                  </a>
                  <a href="https://chat.whatsapp.com/Ge1u3fw4eOzEOIiUG6z6aJ" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center" }}>
                    <img src="/blackwhatsapp.png" alt="WhatsApp" style={{ width: "28px", height: "28px", cursor: "pointer" }} />
                  </a>
                  <a href="https://www.linkedin.com/company/gdgoncampus-gcoen/" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center" }}>
                    <img src="/blacklinkedin.png" alt="LinkedIn" style={{ width: "28px", height: "28px", cursor: "pointer" }} />
                  </a>
                </div>
                
                {/* Row 2 - X.com and YouTube */}
                <div style={{ display: "flex", gap: "12px" }}>
                  <a href="https://x.com/GDGCGcoen" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center" }}>
                    <img src="/blackX.png" alt="X" style={{ width: "28px", height: "28px", cursor: "pointer" }} />
                  </a>
                  <a href="https://www.youtube.com/c/gdscgcoen3822" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center" }}>
                    <img src="/blackyoutube.png" alt="YouTube" style={{ width: "28px", height: "28px", cursor: "pointer" }} />
                  </a>
                </div>
              </div>
            </div>
            </div>

            {/* Right Section - GDGC Box */}
            <div style={{ position: "absolute", right: "29px", border: "2px solid #000", borderRadius: "20px", padding: "12px 24px", backgroundColor: "#fff", display: "flex", alignItems: "center", gap: "16px" }}>
              <img src="/vector26.png" alt="GDGC" style={{ width: "40px", height: "40px" }} />
              <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                <p style={{ margin: "0", fontSize: "18px", fontWeight: "500", lineHeight: "1.2" }}>Google Developer Group</p>
                <p style={{ margin: "0", fontSize: "14px", fontWeight: "400", lineHeight: "1.2" }}>On Campus - GCOEN</p>
              </div>
            </div>

          </div>
        </div>

        {/* Footer Logo */}
        <div className="flex justify-center py-6 md:py-10 px-10">
          <img
            src="/gdgc-footer.svg"
            alt="GDGC Footer Logo"
            className="sm:w-32 sm:px-1 lg:w-full md:w-full"
          />
        </div>
        {/* Terms, Privacy, Refund Links */}
        <div className="flex justify-center items-center gap-6 pb-6">
          <Link href="/Legals/terms-and-conditions" className="text-white text-sm hover:underline">
            Terms and Conditions
          </Link>
          <div className="h-4 w-px bg-white"></div>
          <Link href="/Legals/privacy-policy" className="text-white text-sm hover:underline">
            Privacy Policy
          </Link>
          <div className="h-4 w-px bg-white"></div>
          <Link href="/Legals/Refund-policy" className="text-white text-sm hover:underline">
            Refund Policy
          </Link>
        </div>


      </div>
    </footer>
  );
};


export default Footer;
