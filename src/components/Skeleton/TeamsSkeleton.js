import React from "react";

const TeamsSkeleton = () => {
  return (
    <div className="container mx-auto p-5 mt-20 md:mt-0">
      <div className="mb-16">
        <h2 className="text-[32px] font-bold mb-8 bg-gray-300 h-8 w-56 rounded animate-pulse"></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="rounded-[20px] border-[4px] border-gray-200 p-5 bg-gray-100 animate-pulse"
            >
              <div className="flex items-center gap-4">
                <div className="h-[48px] w-[48px] rounded-full bg-gray-300"></div>
                <div>
                  <div className="h-4 bg-gray-300 w-24 mb-2 rounded"></div>
                  <div className="h-3 bg-gray-200 w-16 rounded"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {[...Array(4)].map((_, index) => (
        <SkeletonTeamCard key={index} />
      ))}
    </div>
  );
};

export default TeamsSkeleton;

const SkeletonTeamCard = () => {
  return (
    <div className="mb-16">
      <h2 className="text-[32px] font-bold mb-8 bg-gray-300 h-8 w-56 rounded animate-pulse"></h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="rounded-[20px] border-[4px] border-gray-200 p-5 bg-gray-100 animate-pulse"
          >
            <div className="flex items-center gap-4">
              <div className="h-[48px] w-[48px] rounded-full bg-gray-300"></div>
              <div>
                <div className="h-4 bg-gray-300 w-24 mb-2 rounded"></div>
                <div className="h-3 bg-gray-200 w-16 rounded"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};