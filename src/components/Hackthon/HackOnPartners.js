import React from "react";

const HackOnPartners = () => {
  return (
    <>
    <div className="w-full flex flex-col gap-5 p-5">
      <h3 className="font-medium text-white text-3xl md:py-5 md:text-5xl text-center">
        Title Sponsor
      </h3>

   
      <div className="flex justify-center items-center gap-x-20 gap-y-10 flex-wrap">
        <img src="/sponsor/TitleSponsor.jpg" alt="Kanan.Co" className="w-2/3 h-20 md:w-auto max-w-[150px] md:max-w-[200px]" />
        
        {/* <img src="/sponsor/vikalp.png" alt="Sponsor 3" className="w-2/3 h-24 md:w-auto max-w-[150px] md:max-w-[200px]" /> */}
      </div>
    </div>
    <div className="w-full flex flex-col gap-5 p-5">
      <h3 className="font-medium text-white text-3xl md:py-5 md:text-5xl text-center">
        Co-Powered By
      </h3>

   
      <div className="flex justify-center items-center gap-x-20 gap-y-10 flex-wrap">
        <img src="/sponsor/codon.png" alt="Codon" className="w-2/3 h-20 md:w-auto max-w-[150px] md:max-w-[200px]" />
        
        <img src="/sponsor/vikalp.png" alt="Vikalp" className="w-2/3 h-24 md:w-auto max-w-[150px] md:max-w-[200px]" />
      </div>
    </div>
    <div className="w-full flex flex-col gap-5 p-5">
      <h3 className="font-medium text-white text-3xl md:py-5 md:text-5xl text-center">
        Mentored By
      </h3>

    
      <div className="flex justify-center items-center gap-x-20 gap-y-10 flex-wrap">
        
        <img src="/sponsor/learner.png" alt="Learner_Den" className="w-1/4 md:w-auto max-w-[150px] md:max-w-[200px]" />
       
      </div>
    </div>
    <div className="w-full flex flex-col gap-5 p-5">
      <h3 className="font-medium text-white text-3xl md:py-5 md:text-5xl text-center">
        Network Partner
      </h3>

    
      <div className="flex justify-center items-center gap-x-20 gap-y-10 flex-wrap">
        
        <img src="/sponsor/bsnl.png" alt="Learner_Den" className="w-1/4 md:w-auto max-w-[150px] md:max-w-[200px]" />
       
      </div>
    </div>
    </>
    
  );
};

export default HackOnPartners;
