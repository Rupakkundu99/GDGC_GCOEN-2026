import FAQ from "@/components/Hackthon/FAQ.js";
import FollowForUpdates from "@/components/Hackthon/FollowForUpdates";
import HackOnInfo from "@/components/Hackthon/HackOnInfo";
import HackOnPrizes from "@/components/Hackthon/HackOnPrizes";
import JoinCommunity from "@/components/Hackthon/JoinCommunity";
import LandingPageHackOn from "@/components/Hackthon/LandingPageHackOn";
import WhyParticipant from "@/components/Hackthon/WhyParticipant";
import FooterHackON from "@/components/Utility/FooterHackON";

export const metadata = {
  title: "HackOn | 8 Hr Hackathon",
  description: "🚀 Hack-On 2025: Unleash Your Tech Potential! ",
  image: "/HackOnLogoBlue.svg",
  keywords: "HackOn,Hackathon,club,college,gcoen,nagpur,Nagpur",
};

const Hackon = () => {
  return (
    <div className="fixed  top-0  flex-col  flex md:gap-5 left-0 w-full  overflow-y-auto overflow-x-hidden h-screen z-50 bg-black ">
      <LandingPageHackOn />
      <HackOnInfo />
      {/* <HackOnPrizes /> */}
      
      <HackOnPrizes/>
      <WhyParticipant />
      <JoinCommunity />
      <FollowForUpdates />
      
      {/* <HackOnPartners /> */}
      <FAQ />
      {/* <Image src="/HackOnStrip.svg" width={20} height={30} className="w-full" /> */}
      <FooterHackON />{" "}
    </div>
  );
};

export default Hackon;
