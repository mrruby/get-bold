import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export const BlogHeading = () => {
  return (
    <div className="flex flex-col items-center lg:w-[71rem] px-8 mb-14">
      <h2 className="tracking-[4px] text-xl font-bebas text-getbold-pink mb-6">
        Blog
      </h2>
      <h3 className="text-3xl lg:text-5xl lg:leading-normal font-medium mb-12 text-center">
        Poczytaj o tym, na czym znamy <br /> się{" "}
        <span className="font-bold text-getbold-pink relative">
          <StaticImage
            src="../../../images/blog-underline.svg"
            alt="circle"
            className="absolute -z-10 -bottom-2 left-1"
          />
          najlepiej.
        </span>
      </h3>
    </div>
  );
};
