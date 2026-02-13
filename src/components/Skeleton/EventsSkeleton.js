import React from "react";
import MultiCardSkeleton, { SkeletonCard } from "./MultiCardSkeleton";

const EventsSkeleton = () => {
  return (
    <div className="flex flex-col gap-3 md:gap-5">
      <div className="flex justify-between items-center">
        <div className="h-10 animate-pulse bg-gray-200 rounded w-[40%] md:w-[15%] mb-2"></div>
        <div className="flex gap-5">
          <div className="md:w-16 w-10 h-10 md:h-16 bg-gray-200 rounded-full animate-pulse" />
          <div className="md:w-16 w-10 h-10 md:h-16 bg-gray-200 rounded-full animate-pulse" />
        </div>
      </div>{" "}
      <div className="grid gap-5 md:grid-cols-4 grid-cols-1">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
      <div className="flex justify-between items-center">
        <div className="h-10 animate-pulse bg-gray-200 rounded w-[40%] md:w-[15%] mb-2"></div>
        <div className="flex gap-5">
          <div className="md:w-16 w-10 h-10 md:h-16 bg-gray-200 rounded-full animate-pulse" />
          <div className="md:w-16 w-10 h-10 md:h-16 bg-gray-200 rounded-full animate-pulse" />
        </div>
      </div>{" "}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 ">
        <PastEventCard />
        <PastEventCard />
        <PastEventCard />
        <PastEventCard />
      </div>
    </div>
  );
};

export default EventsSkeleton;

const PastEventCard = () => {
  return (
    <div className="animate-pulse flex flex-col gap-2 border-solid border-2 border-gray rounded-2xl">
      <div className="secondChild m-2 flex-grow overflow-hidden">
        <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-1/4 mb-2 flex gap-2 items-center">
          <div className="bg-gray-200 rounded-full h-2 w-2 mr-2"></div>
          <span className="h-2 bg-gray-200 rounded w-1/2"></span>
        </div>
        <div className="h-10 bg-gray-200 rounded w-full overflow-hidden"></div>
      </div>

      <div className="lastChild flex justify-between p-2 flex-none">
        <div className="h-8 bg-gray-200 rounded w-32 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2 flex gap-2 items-center">
          <div className="bg-gray-200 rounded-full h-2 w-2 mr-2"></div>
          <span className="h-2 bg-gray-200 rounded w-1/2"></span>
        </div>
      </div>
    </div>
  );
};
