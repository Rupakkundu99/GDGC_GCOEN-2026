"use client";

import { useRouter } from "next/navigation";
import React from "react";

const BlogsCard = ({ id, PublishedDate }) => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push(`/Blogs/${id}`);
  };

  const formattedDate = new Date(PublishedDate).toLocaleDateString(
    "en-GB",
    {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }
  );

  return (
    <div
      onClick={handleRedirect}
      className="flex flex-col justify-between 
      h-[260px] sm:h-[300px] md:h-[360px]"
    >
      {/* Empty Top Section */}
      <div className="flex-1 border-b border-black bg-transparent"></div>

      {/* Bottom Section */}
      <div className="flex items-center justify-between 
      px-3 py-3 md:px-4 md:py-4">

        {/* Read More Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleRedirect();
          }}
          className="border border-black rounded-full 
          px-3 py-1 text-xs md:text-sm
          transition
          hover:bg-black hover:text-white
          active:bg-black active:text-white"
        >
          Read more →
        </button>

        {/* Date */}
        <span className="text-xs md:text-sm">
          {formattedDate}
        </span>

      </div>
    </div>
  );
};

export default BlogsCard;

