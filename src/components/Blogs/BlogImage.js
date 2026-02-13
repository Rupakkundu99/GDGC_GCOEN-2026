"use client";

import React, { useState } from "react";
import Image from "next/image";

const BlogImage = ({ src, alt }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div>
    <div className="relative max-w-[680px]  md:h-64 h-40">
      {isLoading && (
        <Image
          src="/banner_template.png" 
          alt="loading"
          layout="fill"
          className="object-cover rounded-md"
        />
      )}
      {/* <Image
        src={src}
        alt={alt}
        layout="fill"
        className={`object-cover rounded-md ${isLoading ? "hidden" : "block"}`}
        onLoadingComplete={() => setIsLoading(false)} 
      /> */}
      <Image
        src={src}
        alt={alt}
        layout="fill"
        className="object-cover rounded-md"
        onLoadingComplete={() => setIsLoading(false)}
      />
    </div>
    </div>
  );
};

export default BlogImage;
