import { EventsCollection } from "@/config/appwrite";
import { ListCollectionData } from "@/Services/Appwrite";
import { Query } from "appwrite";
import { rethink_sans800 } from "@/Fonts/Rethink";
import PastEventsClient from "./PastEventsClient"; // Import the Client Component

const PastEvents = async ({ Eventype, EventPage }) => {
  const resEveUpcoming = await ListCollectionData(EventsCollection, [
    Query.orderDesc("StartDate"),
    Query.equal("isPublished", true),
    Query.equal("Event", Eventype),
  ]);

  if (resEveUpcoming?.documents.length === 0) {
    return <div>No {EventPage}</div>;
  }

  return (
    <div className="flex flex-col gap-3 md:gap-5">
      <PastEventsClient events={resEveUpcoming.documents} />
    </div>
  );
};

export default PastEvents;
export const dynamic = "force-dynamic";
export const revalidate = 0;
