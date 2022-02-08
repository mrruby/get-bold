import React from "react";
import { HomeBlogHeading } from "./blogHeading";
import { HomeBlogPosts } from "./blogPosts";

export const HomeBlogComponent = () => {
  return (
    <main className="relative py-24 lg:py-40 px-8 w-full flex flex-col items-center">
      <HomeBlogHeading />
      <HomeBlogPosts />
    </main>
  );
};
