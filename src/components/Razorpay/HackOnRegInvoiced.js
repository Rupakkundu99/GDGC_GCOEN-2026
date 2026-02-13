const HackOnRegInvoiced = ({
  name,
  qrCode,
  EventName,
  eventDate,
  eventLocation,
  members,
  paymentStatus,
  leader,
  paymentID,
  TeamName,
  SubTotal,
  ref,
}) => {
  return (
    <div
      ref={ref}
      className="w-full mx-auto bg-white shadow-lg rounded-lg border border-gray-300 overflow-hidden"
    >
      <img
        src="https://cloud.appwrite.io/v1/storage/buckets/6759caf200334d2297e8/files/67713c8800232ee9dd35/view?project=6749e597002403b3c2d4"
        alt="GDG Logo"
        className="w-full"
      />
      <div className="p-6 text-gray-900">
        <div className="flex gap-2 justify-between">
          <div>
            <p className="text-lg font-semibold">Dear {name},</p>
            <p className="text-md mt-2">
              <strong>Date:</strong> {eventDate}
            </p>
            <p className="text-md">
              <strong>Venue:</strong> {eventLocation}
            </p>
            <p className="text-md mt-4">Here are your team details:</p>
            <p className="text-md font-semibold">Team Name: {TeamName}</p>
          </div>
          <div className="flex justify-center mt-6">
            <img src={qrCode} className="w-32 h-32" alt="QR Code" />
          </div>
        </div>

        <table className="w-full border-collapse border mt-4 text-sm">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2 text-left">Name</th>
              <th className="border p-2 text-left">Email</th>
              <th className="border p-2 text-left">Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">{leader.name}</td>
              <td className="border p-2">{leader.email}</td>
              <td className="border p-2">Leader</td>
            </tr>
            {members.map((member, index) => (
              <tr key={index}>
                <td className="border p-2">{member.name}</td>
                <td className="border p-2">{member.email}</td>
                <td className="border p-2">Member</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-md mt-4">
          <strong>Payment Status:</strong> {paymentStatus}
        </p>
        <p className="text-md">
          <strong>Paid:</strong> ₹{SubTotal}
        </p>
        <p className="text-md">
          <strong>Payment ID:</strong> {paymentID}
        </p>
        <p className="text-md">
          <strong>Follow this link to join my WhatsApp group:</strong>
          <br />
          <a
            style={{ color: "blue" }}
            href="https://chat.whatsapp.com/Hd5IZDgZfnX83xETYDD6QR"
            target="_blank"
          >
            https://chat.whatsapp.com/Hd5IZDgZfnX83xETYDD6QR
          </a>{" "}
        </p>
        <p className="text-md mt-4">
          Thank you for joining us! We look forward to welcoming you to the
          event.
        </p>
      </div>
    </div>
  );
};

export default HackOnRegInvoiced;
