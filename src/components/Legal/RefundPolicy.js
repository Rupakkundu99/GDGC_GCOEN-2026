import React from "react";

const RefundPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
        Refund Policy
      </h1>
      <p className="text-gray-700 text-lg mb-8 text-center">
        The Google Developer Group on Campus (GDGC) at GCOEN is committed to transparency in financial transactions. Please read our refund policy carefully.
      </p>

      <div className="space-y-8">
        {/* Section 1 */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            1. Refund Eligibility
          </h2>
          <p className="text-gray-600">
            If your team has made a payment for a competition or hackathon, but the transaction was not successfully processed through Razorpay, the amount will be refunded within 5-6 working days.
          </p>
        </div>

        {/* Section 2 */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            2. Non-Refundable Transactions
          </h2>
          <p className="text-gray-600">
            If your registration is successfully completed and an invoice for the payment has been generated, the refund will not be possible under any circumstances.
          </p>
        </div>

        {/* Section 3 */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            3. Refund Process
          </h2>
          <p className="text-gray-600">
            In case of a failed transaction:
          </p>
          <ul className="list-disc list-inside text-gray-600 mt-2">
            <li>Contact us with your payment details.</li>
            <li>Our team will verify the transaction.</li>
            <li>Refunds will be processed within 5-6 working days.</li>
          </ul>
        </div>

        {/* Section 4 */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            4. Contact for Refunds
          </h2>
          <p className="text-gray-600">
            If you believe you are eligible for a refund, please reach out to us at:
          </p>
          <ul className="list-disc list-inside text-gray-600 mt-2">
            <li>Email: <span className="font-semibold text-gray-800">gdsc.gcoen@gmail.com</span></li>
            <li>Provide details like Transaction ID, Payment Date, and Razorpay Reference Number.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
