import ActionBtn from "@/components/Utility/ActionBtn";
import { rethink_sans800 } from "@/Fonts/Rethink";

export const metadata = {
  title: 'Home',
  description: 'This is the official website of GDGC GCOEN',
  image: "/GDGCPoster.png",
  keywords: 'gdgc, GDGC, gcoen, GCOEN, google, developer, group, club, college, gcoen, nagpur, Nagpur',
}

const HomePage = () => {
  const imageHoverStyles = "transition-all duration-300 ease-out hover:-translate-y-1 hover:-translate-x-1 hover:border-2 hover:border-[#ffd427] hover:shadow-[4px_4px_0px_0px_#ffd427]";

  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-white flex flex-col">
      <div 
        className="relative w-full bg-[#ffd427] flex-grow"
        style={{
          backgroundImage: `
            linear-gradient(to right, black 2px, transparent 2px),
            linear-gradient(to bottom, black 2px, transparent 2px)
          `,
          backgroundSize: '60px 60px',
          backgroundPosition: 'center top'
        }}
      >
        <div className="absolute inset-0 bg-[#ffd427] opacity-70 pointer-events-none"></div>

        {/* S-Curve Divider */}
        <div className="absolute top-0 left-0 w-full h-[80px] md:h-[120px] overflow-hidden leading-[0] z-20 -mt-[1px]">
          <svg viewBox="0 0 1200 120" className="w-full h-full block" preserveAspectRatio="none">
            <path d="M0,60 Q300,120 600,60 T1200,60 V0 H0 Z" fill="white" />
            <path d="M0,60 Q300,120 600,60 T1200,60" fill="none" stroke="black" strokeWidth="4" />
          </svg>
        </div>

        {/* --- MAIN CONTENT AREA --- */}
        <div className="w-full px-4 md:px-8 relative z-30 pt-32 md:pt-40 pb-0.5 flex flex-col items-center">

          {/* OUR EVENTS CARD */}
          <div className="w-full max-w-[1400px] mb-12 md:mb-20">
            <div className="bg-white border-4 border-black rounded-[30px] md:rounded-[50px] overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-2xl relative">
              
              {/* 1. THIN GRAY TOP BAR */}
              <div className="bg-gray-100 py-10 md:py-16 border-b-[3px] border-black relative">
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                   <div className="w-10 h-10 md:w-14 md:h-14 bg-[#ffd427] rounded-full border-4 border-black"></div>
                 </div>
              </div>

              {/* 2. WHITE CONTENT REGION */}
              <div className="bg-white p-6 md:p-12">
                <h2 className={`text-3xl md:text-5xl font-bold ${rethink_sans800.className} text-left mb-8 md:mb-12`}>
                  Our Events
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 md:mb-8">
                  <div className="md:row-span-2 h-[250px] md:h-full">
                    <img 
                      src="/EventPhoto1.svg" 
                      alt="Event 1" 
                      className={`w-full h-full object-cover rounded-2xl border-2 border-black md:border-transparent ${imageHoverStyles}`} 
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="h-[180px] md:h-auto">
                      <img src="/EventPhoto2.svg" alt="Event 2" className={`w-full h-full object-cover rounded-2xl border-2 border-black md:border-transparent ${imageHoverStyles}`} />
                    </div>
                    <div className="h-[180px] md:h-auto">
                      <img src="/EventPhoto3.svg" alt="Event 3" className={`w-full h-full object-cover rounded-2xl border-2 border-black md:border-transparent ${imageHoverStyles}`} />
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center scale-90 md:scale-100">
                  <ActionBtn text="Event with us" href="/Events" />
                </div>
              </div>
            </div>
          </div>

          {/* SPACER BETWEEN SECTIONS */}
          <div className="h-10 md:h-20"></div>

          {/* FEEDBACK/CTA CARD (Optimized for Mobile Height) */}
          <div className="w-full max-w-[1200px] mb-20 relative px-2 md:px-4 flex justify-center">
            <div className="relative w-full shadow-[8px_8px_0_0_rgba(0,0,0,1)] md:shadow-[10px_10px_0_0_rgba(0,0,0,1)] rounded-[40px] md:rounded-[60px] overflow-hidden bg-[#e5e5e5] border-4 border-black">

              <div className="pt-8 pb-16 md:pt-16 md:pb-32 text-center px-6 relative z-0">
                <h2 className={`text-2xl md:text-5xl font-bold ${rethink_sans800.className}`}>
                  Excited?
                </h2>
                <p className="text-lg md:text-xl mt-2 md:mt-4 font-medium text-gray-800">
                  why wait ! Join Hack On 2.0 now!
                </p>
              </div>

              {/* Yellow Layer (Reduced height on mobile) */}
              <div className="absolute left-0 right-0 h-16 md:h-32 -mt-12 md:-mt-24 z-10">
                <div className="w-full h-full bg-[#ffd427] rounded-t-[30px] md:rounded-t-[50px] border-t-4 border-black"></div>
              </div>

              {/* White Layer (Tighter on mobile) */}
              <div className="relative bg-white -mt-[40px] md:-mt-[86px] pt-8 pb-8 md:pt-16 md:pb-16 rounded-t-[30px] md:rounded-t-[50px] border-t-4 border-black z-20 px-6 text-center">
                 <div className="flex justify-center scale-90 md:scale-100">
                   <ActionBtn text="Register Now" href="/ContactUs" />
                 </div>
              </div>

            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default HomePage;