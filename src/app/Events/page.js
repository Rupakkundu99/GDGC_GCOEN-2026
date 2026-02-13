import PastEvents from "@/components/Events/PastEvents";
import UpComingEvents from "@/components/Events/UpComingEvents";
import { rethink_sans800 } from "@/Fonts/Rethink";
import React from "react";

export const metadata = {
  title: "Events",
  description: "Events page",
};

const EventPage = async () => {
  return (
    <div className="flex flex-col gap-10">
      <div>
        <p
          className={`${rethink_sans800.className} text-3xl md:text-4xl font-semibold`}
        >
          Upcoming Events
        </p>
      </div>
      <UpComingEvents EventPage="Upcoming Events" Eventype="upcoming" />
      <div>
        <p
          className={`${rethink_sans800.className} text-3xl md:text-4xl font-semibold`}
        >
          Pasts Events
        </p>
      </div>
      <PastEvents EventPage="Past Events" Eventype="past" />
    </div>
  );
};

export default EventPage;

export const dynamic = "force-dynamic";
export const revalidate = 0;
