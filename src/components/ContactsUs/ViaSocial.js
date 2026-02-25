import { rethink_sans400, rethink_sans800 } from "@/Fonts/Rethink";
import Link from "next/link";

const SocialLinks = [
  {
    text: "Instagram",
    Icon: "uil-instagram",
    link: "https://www.instagram.com/gdgcgcoen/",
  },
  {
    text: "Whatsapp",
    Icon: "uil-whatsapp",
    link: "https://chat.whatsapp.com/DTW7i4taVZ0GPs8KZgYmGu?mode=gi_t",
  },
  {
    text: "Linkedin",
    Icon: "uil-linkedin",
    link: "https://www.linkedin.com/company/gdgoncampus-gcoen/",
  },
  {
    text: "x.com",
    Icon: "uil-x",
    link: "https://x.com/GDGCGcoen",
  },
  {
    text: "Youtube",
    Icon: "uil-youtube",
    link: "http://www.youtube.com/@gdscgcoen3822",
  },
];

const ViaSocial = () => {
  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col gap-5 pt-0 pb-5 self-stretch md:mt-5">
      <div className="border-2 rounded-3xl border-black p-4 sm:p-6 flex flex-col justify-between">
        <h4
          className={`text-2xl md:text-3xl mb-1 mt-2 font-normal ${rethink_sans400.className}`}
          style={{ color: '#F9AB00' }}
        >
          via Socials
        </h4>
        
        {/* FIX: Changed to flex-wrap so buttons naturally flow to the next line if space gets tight */}
        <div className="flex flex-wrap justify-center mt-5 gap-2 md:gap-3 content-center">
          {SocialLinks.map(({ text, Icon, link }, index) => (
            <SocialButton key={index} icon={Icon} link={link} label={text} />
          ))}
        </div>
        
        <p
          className={`text-3xl md:text-4xl font-bold pt-6 pb-5 mb-1 text-center ${rethink_sans800.className}`}
        >
          or
        </p>
        
        {/* FIX: Adjusted text scaling so the email doesn't stretch the box */}
        <div className="text-center text-lg sm:text-xl md:text-3xl mb-6 pb-2">
          <span className="block sm:inline mb-1 sm:mb-0">Email us at: </span>
          <Link className="text-lg sm:text-2xl md:text-3xl font-semibold break-words hover:text-[#F9AB00] transition-colors" href="mailto:gdsc.gcoen@gmail.com">
            gdsc.gcoen@gmail.com
          </Link>
        </div>
      </div>
      
      <div
        className="relative z-10 bg-white border border-black 
        rounded-[18px] md:rounded-3xl px-5 py-4 md:px-8 md:py-6 shadow-sm w-full 
        cursor-pointer transition-all duration-300 ease-in-out
        hover:bg-[rgba(255,249,221,1)] hover:-translate-y-1 hover:shadow-md
        flex flex-col gap-1 md:gap-2" 
      >
        {/* FIX: Added leading-snug and structured the gap in the parent div */}
        <p className="text-xl sm:text-2xl md:text-3xl font-medium leading-snug">
          Google Developer Group
        </p>
        <p className="text-xl sm:text-2xl md:text-3xl font-medium leading-snug">
          On Campus • GCOEN
        </p>
      </div>
    </div>
  );
};

export default ViaSocial;

const SocialButton = ({ icon, link, label }) => {
  const isLightIcon = label === "Instagram" || label === "Whatsapp";
  return (
    <Link
      href={link}
      target="_blank"
      className={`group flex-[1_1_30%] min-w-[110px] max-w-[180px] text-xs sm:text-sm md:text-lg text-black ${rethink_sans400.className} flex items-center justify-center border border-black rounded-full px-3 py-2 md:px-4 md:py-2.5 gap-1.5 md:gap-2 bg-white hover:border-yellow-500 hover:text-yellow-500 transition-colors whitespace-nowrap`}
    >
      <i className={`uil ${icon} text-base md:text-xl text-black group-hover:text-yellow-500 transition-colors flex-shrink-0 ${isLightIcon ? "font-light" : ""}`} />
      <span>{label}</span>
    </Link>
  );
};