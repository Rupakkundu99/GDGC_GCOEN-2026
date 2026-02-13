import { BlogsCollection } from "@/config/appwrite";
import { GetSingleDocument } from "@/Services/Appwrite";
import "suneditor/dist/css/suneditor.min.css";
import React from "react";
import NotFoundPage from "@/app/not-found";
import Link from "next/link";
import SocialShareButtons from "@/components/Utility/SocialShareButtons";
import { baseUrl } from "@/config/baseUrl";
import { rethink_sans400 } from "@/Fonts/Rethink";
import BlogImage from "@/components/Blogs/BlogImage";
import Image from "next/image";
import moment from "moment";

export async function generateMetadata({ params }) {
  const BlogID = await params.ID;
  const res = await GetSingleDocument(BlogID, BlogsCollection, []);
  const { Title, Description, Keywords, FeaturedURL } = res;
  return {
    title: Title,
    description: Description,
    keywords: Keywords,
    author: "GDGC GCOEN",
    image: FeaturedURL,
    url: `${baseUrl}Blogs/${BlogID}`,
    twitter: {
      card: "summary_large_image",
      title: Title,
      description: Description,
      author: "GDGC GCOEN",
      keywords: Keywords,
      images: FeaturedURL,
      url: `${baseUrl}Blogs/${BlogID}`,
    },
    openGraph: {
      title: Title,
      description: Description,
      keywords: Keywords,
      author: "GDGC GCOEN",
      image: FeaturedURL,
      url: `${baseUrl}Blogs/${BlogID}`,
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

const BlogDetails = async ({ params }) => {
  const BlogID = (await params).ID;
  try {
    const res = await GetSingleDocument(BlogID, BlogsCollection, []);
    const { Title, Description, BannerURL, Artical, FeaturedURL, $createdAt } =
      res;

    return (
      <div className="flex justify-center flex-col gap-2 mx-auto max-w-[700px] ">
        <h1 className="text-3xl md:text-5xl font-bold">{Title}</h1>
        <p className="text-gray5 text-justify ">{Description}</p>

        <div className="justify-between flex w-full border-t border-b my-5 py-2">
          <div className="flex items-center gap-2 ">
            <div className="border w-10 h-10 rounded-full flex items-center justify-center">
              <Image
                src="/logo.svg"
                alt="Logo"
                className=""
                width={20}
                height={20}
              />
            </div>
            <div>
              <div>
                <h2 className="text-base font-semibold">GDGC, GCOEN</h2>
                <p className=" text-gray-800 text-sm">
                  5 min read -{" "}
                  <span className="font-semibold">
                    {moment($createdAt).format("ll")}
                  </span>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <BlogImage className="" src={FeaturedURL} alt="blog" />


        <div className="-mx-5">
          <div
            dangerouslySetInnerHTML={{ __html: Artical }}
            className={`  ${rethink_sans400.className} text-justify se-wrapper-inner  se-wrapper-wysiwyg sun-editor-editable`}
          />
        </div>
      </div>
    );
  } catch (error) {
    return <NotFoundPage />;
  }
};

export default BlogDetails;
