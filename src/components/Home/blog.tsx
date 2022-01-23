import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { BlogHeading } from "./Blog/heading";
import { BlogPosts } from "./Blog/posts";

export const BlogHome = () => {
  return (
    <main className="relative py-40 w-full flex flex-col items-center">
      <BlogHeading />
      <BlogPosts />
    </main>
  );
};
