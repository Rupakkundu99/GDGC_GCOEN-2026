import React from "react";

const ContactSkeleton = () => {
  return (
    <div className="container mx-auto   md:mt-0">
      <h1 className="text-4xl font-bold bg-gray-300 w-48 h-10 mb-8 rounded animate-pulse"></h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Skeleton for Form */}
        <div className="p-8 border border-gray-300 rounded-lg bg-gray-100 animate-pulse">
          <div className="bg-gray-300 h-6 w-32 rounded mb-6"></div>
          {[...Array(5)].map((_, index) => (
            <div key={index} className="mb-4">
              <div className="h-10 bg-gray-300 rounded"></div>
            </div>
          ))}
          <div className="flex items-center gap-2 mb-4">
            <div className="h-4 w-4 bg-gray-300 rounded"></div>
            <div className="h-4 bg-gray-300 w-80 rounded"></div>
          </div>
          <div className="h-10 bg-gray-300 w-32 rounded"></div>
        </div>

        {/* Skeleton for Social Links */}
        <div>
          <div className="bg-gray-300 h-6 w-32 rounded mb-6"></div>
          <div className="flex space-x-4 mb-6">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="h-10 w-10 bg-gray-300 rounded-full"
              ></div>
            ))}
          </div>
          <div className="bg-gray-300 h-4 w-64 rounded mb-4"></div>
          <div className="bg-gray-300 h-4 w-48 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactSkeleton;
