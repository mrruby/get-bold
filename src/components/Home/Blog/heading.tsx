import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export const BlogHeading = () => {
  return (
    <div className="flex flex-col items-center w-[71rem] mb-14">
      <h2 className="tracking-[4px] text-xl font-bebas text-getbold-pink mb-6">
        Blog
      </h2>
      <h3 className="text-5xl leading-normal font-medium mb-12 text-center">
        Poczytaj o tym, na czym znamy <br /> się
        <span className="font-bold text-getbold-pink"> najlepiej.</span>
      </h3>

      <StaticImage
        src="../../../images/blog-underline.svg"
        alt="underline"
        className="absolute mt-[12rem] ml-[5rem]"
      />
    </div>
  );
};
