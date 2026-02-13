"use client";

const TermsAndConditions = () => {
  return (
    <div className="max-w-4xl mx-auto p-8  rounded-lg shadow-md border border-gray-300">
      <h1 className="text-4xl font-bold text-blue-700 mb-6 text-center">
        Terms & Conditions
      </h1>
      <p className="text-gray-700 text-lg mb-8 text-center">
        Welcome to the <span className="font-semibold">Google Developer Group on Campus (GDGC), GCOEN</span>. 
        By accessing and using our website, you agree to comply with these Terms & Conditions.
      </p>

      <div className="space-y-8">
        {[
          {
            title: "1. Acceptance of Terms",
            content:
              "By using the GDGC GCOEN platform, you agree to these terms. If you do not agree, please refrain from using this platform.",
          },
          {
            title: "2. Purpose of the Platform",
            content:
              "This platform is intended for students and developers to learn, collaborate, and innovate using Google technologies. Any misuse of the platform for unethical activities is strictly prohibited.",
          },
          {
            title: "3. Intellectual Property",
            content:
              "All resources, logos, event materials, and content are the property of GDGC GCOEN or Google Developer Groups. Unauthorized distribution or reproduction is strictly prohibited.",
          },
          {
            title: "4. Community Code of Conduct",
            content:
              "We foster a respectful and inclusive environment. Any form of harassment, discrimination, or hate speech will not be tolerated.",
          },
          {
            title: "5. Modification of Terms",
            content:
              "GDGC GCOEN reserves the right to update these terms at any time. Users will be notified of any changes through official communication channels.",
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

export default TermsAndConditions;
