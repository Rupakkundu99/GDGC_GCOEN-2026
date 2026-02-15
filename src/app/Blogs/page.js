import { BlogsCollection } from "@/config/appwrite";
import { rethink_sans800 } from "@/Fonts/Rethink";
import { ListCollectionData } from "@/Services/Appwrite";
import { Query } from "appwrite";
import React from "react";
import Image from "next/image";
import BlogsCard from "@/components/Blogs/BlogsCard";

export const metadata = {
  title: "Blogs",
  description: "This is the blogs page.",
  keywords:
    "Blogs, Blog, Blog Details, gdgc, GDGC, GDG, Nagpur, gcoen, GCOEN, gcoe nagpur, GCOE Nagpur, GCOEN Nagpur, gcoen nagpur, GCOE, google, Google",
  authors: [{ name: "GDGC GCOEN" }],
};

const BlogPage = async () => {
  try {
    const res = await ListCollectionData(BlogsCollection, [
      Query.equal("isPublished", true),
      Query.orderDesc("$createdAt"),
    ]);

    if (!res?.documents || res.documents.length === 0) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          No Blogs Found
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-white px-6 md:px-12 py-16">

        {/* Heading */}
        <div className="mb-12">
          <p
            className={`${rethink_sans800.className} text-3xl md:text-4xl font-semibold`}
          >
            Blogs
          </p>
        </div>

        {/* Blog Grid */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
  {res.documents.map((blogs) => (
    <div
      key={blogs.$id}
      className="relative rounded-3xl border border-black overflow-hidden 
      bg-white shadow-sm cursor-pointer
      transition-all duration-300 ease-in-out
      
      hover:bg-[rgba(255,249,221,1)] 
      hover:-translate-y-1 hover:shadow-md
      
      active:bg-[rgba(255,249,221,1)]
      active:scale-[0.98]"
    >
      {/* Curved Yellow Top Line */}
      <div className="absolute top-0 left-0 w-full h-[6px] bg-yellow-400 rounded-t-3xl z-10"></div>

      <BlogsCard
        id={blogs.$id}
        PublishedDate={blogs.$createdAt}
      />
    </div>
  ))}
</div>


        {/* Footer */}
        <div className="mt-20 bg-[#F5EFD7] border border-black rounded-3xl p-8 
        flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Social Links */}
          <div className="flex flex-wrap gap-4">

            <a href="https://www.instagram.com/gdgcgcoen/" target="_blank"
              className="border border-black rounded-full px-4 py-1 text-sm bg-white 
              hover:bg-[rgba(255,249,221,1)] 
              active:bg-[rgba(255,249,221,1)] transition">
              Instagram
            </a>

            <a href="https://chat.whatsapp.com/Ge1u3fw4eOzEOIiUG6z6aJ" target="_blank"
              className="border border-black rounded-full px-4 py-1 text-sm bg-white 
              hover:bg-[rgba(255,249,221,1)] 
              active:bg-[rgba(255,249,221,1)] transition">
              Whatsapp
            </a>

            <a href="https://www.linkedin.com/company/gdgoncampus-gcoen/" target="_blank"
              className="border border-black rounded-full px-4 py-1 text-sm bg-white 
              hover:bg-[rgba(255,249,221,1)] 
              active:bg-[rgba(255,249,221,1)] transition">
              LinkedIn
            </a>

            <a href="https://x.com/GDGCGcoen" target="_blank"
              className="border border-black rounded-full px-4 py-1 text-sm bg-white 
              hover:bg-[rgba(255,249,221,1)] 
              active:bg-[rgba(255,249,221,1)] transition">
              X.com
            </a>

            <a href="https://www.youtube.com/@gdscgcoen3822" target="_blank"
              className="border border-black rounded-full px-4 py-1 text-sm bg-white 
              hover:bg-[rgba(255,249,221,1)] 
              active:bg-[rgba(255,249,221,1)] transition">
              Youtube
            </a>

          </div>

          {/* Center Logo */}
          <div className="flex items-center justify-center">
            <Image
              src="/logo.svg"
              alt="GDG Logo"
              width={60}
              height={60}
              className="object-contain"
            />
          </div>

          {/* Info Box */}
          <div
            className="bg-white border border-black rounded-xl px-6 py-4 shadow-sm 
            cursor-pointer transition-all duration-300 ease-in-out
            hover:bg-[rgba(255,249,221,1)]
            hover:-translate-y-1 hover:shadow-md
            active:bg-[rgba(255,249,221,1)]
            active:scale-[0.98]"
          >
            <p className="font-semibold">
              Google Developer Group
            </p>
            <p className="text-sm mt-1">
              On Campus • GCOEN
            </p>
          </div>

        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        {error.message}
      </div>
    );
  }
};

export default BlogPage;
export const dynamic = "force-dynamic";
export const revalidate = 0;
