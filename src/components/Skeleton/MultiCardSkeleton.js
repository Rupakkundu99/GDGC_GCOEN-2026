import React from "react";

const MultiCardSkeleton = () => {
  return (
    <div className="grid gap-5 md:grid-cols-4 grid-cols-1">
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </div>
  );
};

export default MultiCardSkeleton;

export const SkeletonCard = () => {
  return (
    <div className="flex flex-col gap-2 border-solid border-2 border-gray rounded-2xl animate-pulse">
      <div className="w-full h-52 relative overflow-hidden flex-none bg-gray-200"></div>
      <div className="m-2 flex-grow overflow-hidden">
        <div className="text-sm flex gap-2 items-center h-4 bg-gray-200 mt-1"></div>
        <div className="text-lg font-semibold h-4 bg-gray-200 w-3/4 mt-2"></div>
        <div className="text-sm break-words mt-2 grow overflow-hidden h-4 bg-gray-200 w-full "></div>
        <div className="text-sm break-words mt-2 grow overflow-hidden h-4 bg-gray-200 w-2/3 "></div>
      </div>
      <div className="flex justify-between p-2 flex-none">
        <div className="h-10 w-24 bg-gray-200 rounded"></div>
        <div className="text-sm flex gap-2 items-center h-4 bg-gray-200 w-1/2"></div>
      </div>
    </div>
  );
};
