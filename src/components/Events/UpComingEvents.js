// import { EventsCollection } from "@/config/appwrite";
// import { ListCollectionData } from "@/Services/Appwrite";
// import { Query } from "appwrite";
// import React from "react";
// import EventCard from "./EventCard";
// import { rethink_sans800 } from "@/Fonts/Rethink";

// const UpComingEvents = async ({ Eventype, EventPage }) => {
//   const resEveUpcoming = await ListCollectionData(EventsCollection, [
//     Query.orderDesc("$createdAt"),
//     Query.equal("isPublished", true),
//     Query.equal("Event", Eventype),
//   ]);
//   if (resEveUpcoming?.documents.length === 0) {
//     return <div>No {EventPage}</div>;
//   }
//   return (
//     <div className="flex flex-col gap-3 md:gap-5" >
//       <div>
//         <p className={`${rethink_sans800.className} text-2xl md:text-4xl  font-semibold`} >{EventPage}</p>
//       </div>
//       <div className="grid gap-5 md:grid-cols-4 grid-cols-1">
//         {resEveUpcoming?.documents.map((event, index) => {
//           return (
//             <EventCard
//               key={index}
//               id={event?.$id}
//               Title={event?.Title}
//               Description={event?.Description}
//               Keywords={event?.Topics}
//               FeaturedURL={event?.FeaturedURL}
//               BannerURL={event?.BannerURL}
//               Artical={event?.Artical}
//               isPublished={event?.isPublished}
//               StartDate={event?.StartDate}
//               location={event?.location}
//               EndDate={event?.EndDate}
//             />
//           );
//         })}{" "}
//       </div>{" "}
//     </div>
//   );
// };

// export default UpComingEvents;
// export const dynamic = "force-dynamic";
// export const revalidate = 0;

import { EventsCollection } from "@/config/appwrite";
import { ListCollectionData } from "@/Services/Appwrite";
import { Query } from "appwrite";
import { rethink_sans800 } from "@/Fonts/Rethink";
import UpcomingEventsClient from "./UpcomingEventsClient"; // Import the Client Component

const UpcomingEvents = async ({ Eventype, EventPage }) => {
  const resEveUpcoming = await ListCollectionData(EventsCollection, [
    Query.orderDesc("$createdAt"),
    Query.equal("isPublished", true),
    Query.equal("Event", Eventype),
  ]);

  if (resEveUpcoming?.documents.length === 0) {
    return <div className="text-center text-gray-400 text-2xl py-20" >oh no, new events are yet to be announced</div>;
  }

  return (
    <div className="flex flex-col gap-3 md:gap-5">
      <UpcomingEventsClient events={resEveUpcoming.documents} />
    </div>
  );
};

export default UpcomingEvents;
export const dynamic = "force-dynamic";
export const revalidate = 0;
