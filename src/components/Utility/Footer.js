"use client";
import DefaultBtn from "./DefaultBtn";
import { rethink_sans800 } from "@/Fonts/Rethink";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";


 const SocialLink = ({ icon, link, label, showLabel }) => (
  <a
    href={link}
    target="_blank"
    className="flex items-center space-x-4"

  >
    <img src={icon} alt={`${label} icon`} className="w-6 h-6 sm:w-8 sm:h-8" />
    {showLabel && (
      <span className="text-white text-sm md:text-base lg:text-lg">
        {label}
      </span>
    )}
  </a>
);

const Footer = () => {
  const router = useRouter();

  // Navigate to ContactUs on mobile view
  const handleContactUs = () => {
    if (window.innerWidth <= 768) {
      router.push("/ContactUs");
    }
  };

  return (
    <footer className="bg-footer_bg">
      <div className="container m-auto">
        <div
          className={`flex flex-col md:flex-row ${rethink_sans800} px-5  py-8 md:py-16`}
        >
          {/* Social Links Section for Desktop */}
          <div className="md:block max-sm:hidden sm:hidden space-y-6 flex-1">
            {socialLinks.map(({ icon, link, label }, index) => (
              <SocialLink
                key={index}
                icon={icon}
                link={link}
                label={label}
                showLabel={true}
              />
            ))}
          </div>

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

          {/* Social Links Section for Mobile */}
          <div 
              rel="noopener noreferrer"
              data-aos="fade-right"
          className="lg:hidden flex flex-row gap-x-3 justify-center mt-8">
            {socialLinks.map(({ icon, link, label }, index) => (
              <SocialLink
                key={index}
                icon={icon}
                link={link}
                label={label}
                showLabel={false}
              />
            ))}
          </div>
        </div>

        {/* Contact Us Button for Mobile */}
        <button
          onClick={handleContactUs}
          className="block sm:hidden bg-footer_bg w-full py-1 pb-2 text-white font-bold text-center"
        >
          Contact Us
        </button>

        {/* Footer Logo */}
        <div className="flex justify-center py-6 md:py-10 px-10">
          <img
            src="/gdgc-footer.svg"
            alt="GDGC Footer Logo"
            className="sm:w-32 sm:px-1 lg:w-full md:w-full"
          />
        </div>
        {/* tc/pp */}
        <div className="flex justify-center items-center gap-6 pb-6">
  <Link href="/Legals/terms-and-conditions" className="text-white text-sm hover:underline">
    Terms and Conditions
  </Link>
  <div className="h-4 w-px bg-white"></div> {/* Vertical line separator */}
  <Link href="/Legals/privacy-policy" className="text-white text-sm hover:underline">
    Privacy Policy
  </Link>
  <div className="h-4 w-px bg-white"></div> {/* Vertical line separator */}
  <Link href="/Legals/Refund-policy" className="text-white text-sm hover:underline">
    Refund Policy
  </Link>
</div>


      </div>
    </footer>
  );
};

export default Footer;

const socialLinks = [
  {
    icon: "/instagram.svg",
    link: "https://www.instagram.com/gdgcgcoen/",
    label: "Follow us on Instagram",
  },
  {
    icon: "/whatsapp.svg",
    link: "https://chat.whatsapp.com/Ge1u3fw4eOzEOIiUG6z6aJ",
    label: "Join our WhatsApp Group",
  },
  {
    icon: "/linkedin.svg",
    link: "https://www.linkedin.com/company/gdgoncampus-gcoen/",
    label: "Connect on LinkedIn",
  },
  {
    icon: "/x.svg",
    link: "https://x.com/GDGCGcoen",
    label: "Follow us on X (Twitter)",
  },
  {
    icon: "/youtube.svg",
    link: "http://www.youtube.com/@gdscgcoen3822",
    label: "Subscribe to our YouTube Channel",
  },
];
