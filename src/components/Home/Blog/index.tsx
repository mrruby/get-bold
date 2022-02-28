import React from "react";
import { HomeBlogHeading } from "./blogHeading";
import { HomeBlogPosts } from "./blogPosts";

const HomeBlogComponent = () => {
  return (
    <main
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-out"
      data-aos-delay="200"
      className="relative py-24 lg:py-40 px-8 w-full flex flex-col items-center"
    >
      <HomeBlogHeading />
      <HomeBlogPosts />
    </main>
  );
};

export default HomeBlogComponent;
