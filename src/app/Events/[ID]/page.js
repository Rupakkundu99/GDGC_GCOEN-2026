import { EventsCollection } from "@/config/appwrite";
import { GetSingleDocument } from "@/Services/Appwrite";
import { baseUrl } from "@/config/baseUrl";

import NotFoundPage from "@/app/not-found";
import EventDetailsClient from "./EventDetailsClient"; 

// Server-side metadata generation
export async function generateMetadata({ params }) {
  const EventID = params.ID;
  const res = await GetSingleDocument(EventID, EventsCollection, []);
  const { Title, Description, Topics, FeaturedURL } = res;

  return {
    title: Title,
    description: Description,
    keywords: Topics,
    author: "GDGC GCOEN",
    image: FeaturedURL,
    url: `${baseUrl}Events/${EventID}`,
    twitter: {
      card: "summary_large_image",
      title: Title,
      description: Description,
      author: "GDGC GCOEN",
      keywords: Topics,
      images: FeaturedURL,
      url: `${baseUrl}Events/${EventID}`,
    },
    openGraph: {
      title: Title,
      description: Description,
      keywords: Topics,
      author: "GDGC GCOEN",
      image: FeaturedURL,
      url: `${baseUrl}Events/${EventID}`,
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}


const EventDetails = async ({ params }) => {
  const EventID = params.ID;

  try {
    const res = await GetSingleDocument(EventID, EventsCollection, []);
    return <div className="flex justify-center"><EventDetailsClient eventData={res} EventID={EventID} /></div>; // Pass data to the client-side component
  } catch (error) {
    return <NotFoundPage />;
  }
};

export default EventDetails;
