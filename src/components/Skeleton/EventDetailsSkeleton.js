import React from "react";

const EventDetailsSkeleton = () => {
  return (
    <div className="flex flex-col gap-5 animate-pulse">
      <div className="w-full md:h-96 h-40 bg-gray-200 rounded-md"></div>
      <div className="bg-blue1 p-5 h-6 rounded-md"></div>
      <div className="h-8 bg-gray-200 rounded-md"></div>
      <div className="font-semibold  flex gap-2 items-center h-6 bg-gray-200 rounded-md"></div>
      <div className="h-20 md:h-32 bg-gray-200 rounded-md"></div>
      <div className="h-10 bg-gray-200 rounded-md"></div>
    </div>
  );
};

export default EventDetailsSkeleton;
