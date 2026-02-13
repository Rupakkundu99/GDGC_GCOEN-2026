import BlogsCard from "@/components/Blogs/BlogsCard";
import { BlogsCollection } from "@/config/appwrite";
import { rethink_sans800 } from "@/Fonts/Rethink";
import { ListCollectionData } from "@/Services/Appwrite";
import { Description } from "@mui/icons-material";
import { Query } from "appwrite";
import React from "react";

export const metadata = {
  title: "Blogs",
  description: "This is the blogs page.",
  keywords: "Blogs, Blog, Blog Details, gdgc, GDGC, GDG, Nagpur, gcoen, GCOEN, gcoe nagpur, GCOE Nagpur, GCOEN Nagpur, gcoen nagpur, GCOE, google, Google",
  image: [],
  author: 'GDGC GCOEN',
}

const BlogPage = async () => {
  try {
    const res = await ListCollectionData(BlogsCollection, [
      Query.equal("isPublished", true),
      Query.orderDesc("$createdAt"),
    ]);
    if (res?.documents.length === 0) {
      return <div>No Blogs Found</div>;
    }
    return (
      <div className="flex-col flex gap-5" >
        <div>
          <p
            className={`${rethink_sans800.className} text-3xl md:text-4xl font-semibold`}
          >
            Blogs
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-4 grid-cols-1">
          {res?.documents.map((blogs, index) => {
            return (
              <BlogsCard
                key={index}
                id={blogs?.$id}
                Title={blogs?.Title}
                PublishedDate={blogs.$createdAt}
                Description={blogs?.Description}
                Category={blogs?.Category}
                Keywords={blogs?.Keywords}
                FeaturedURL={blogs?.FeaturedURL}
              />
            );
          })}
        </div>
      </div>
    );
  } catch (error) {
    return <div>{error.message}</div>;
  }
};
export default BlogPage;
export const dynamic = "force-dynamic";
export const revalidate = 0;
