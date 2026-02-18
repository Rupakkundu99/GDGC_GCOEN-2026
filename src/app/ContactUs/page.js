// import ThankYouPage from "@/components/ContactsUs/ThankYouContact";
import ViaEmail from "@/components/ContactsUs/ViaEmail";
import ViaSocial from "@/components/ContactsUs/ViaSocial";
import { rethink_sans800 } from "@/Fonts/Rethink";

export const metadata = {
  title: "Contact Us",
  description: "Contact us page",
};

const ContactUs = () => {
  return (
    <div className="relative md:mt-0 py-10">
      <div className="md:gap-10 gap-5 max-w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 gap-5">
            <div className="w-full max-w-2xl mx-auto">
              <p
                className={`text-3xl md:text-4xl font-bold mb-1  ${rethink_sans800.className}`}
              >
                Contact us
              </p>
            </div>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1  md:grid-cols-2 md:gap-10 gap-5 md:items-stretch">
        <ViaEmail />
        <ViaSocial />
      </div>

      <div className="flex items-center mt-4">
        <img src="/Group 47.png" alt="" width={96} height={96} className="flex-shrink-0" />
        <img src="/Arrow 4.png" alt="" width={300} height={30} className="flex-shrink-0 -ml-1" />
      </div>
    </div>
  );
};

export default ContactUs;
