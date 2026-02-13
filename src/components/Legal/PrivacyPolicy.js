"use client";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-8  rounded-lg shadow-md border border-gray-300">
      <h1 className="text-4xl font-bold text-blue-700 mb-6 text-center">
        Privacy Policy
      </h1>
      <p className="text-gray-700 text-lg mb-8 text-center">
        At <span className="font-semibold">Google Developer Group on Campus (GDGC), GCOEN</span>, 
        we value your privacy and are committed to protecting your personal data.
      </p>

      <div className="space-y-8">
        {[
          {
            title: "1. Data Collection",
            content:
              "We collect information such as name, email, and platform interactions to enhance your experience and facilitate event participation.",
          },
          {
            title: "2. How We Use Your Information",
            content:
              "We use your data to improve our platform, organize events, and keep you updated about GDGC activities. Your information will never be sold to third parties.",
          },
          {
            title: "3. Security Measures",
            content:
              "We implement security best practices, including data encryption and secure access, to safeguard your personal information.",
          },
          {
            title: "4. Third-Party Services",
            content:
              "We may integrate third-party tools like Google Analytics to improve our services. These services adhere to their own privacy policies.",
          },
          {
            title: "5. Your Rights",
            content:
              "You have the right to access, update, or request deletion of your personal data. Contact us for any data-related concerns.",
          },
          {
            title: "6. Updates to Privacy Policy",
            content:
              "GDGC GCOEN may update this policy periodically. Any changes will be communicated via official channels.",
          },
        ].map((section, index) => (
          <div key={index} className="border-b pb-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              {section.title}
            </h2>
            <p className="text-gray-600">{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
