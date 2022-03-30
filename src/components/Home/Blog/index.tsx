import React from "react";
import { HomeBlogHeading } from "./blogHeading";
import { HomeBlogPosts } from "./blogPosts";

const HomeBlogComponent = () => {
  return (
    <main className="relative py-24 lg:py-24 px-8 w-full flex flex-col items-center">
      <HomeBlogHeading />
      <HomeBlogPosts />
    </main>
  );
};

export default HomeBlogComponent;
