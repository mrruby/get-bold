import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export const PortfolioHeading = () => {
  return (
    <div className="flex flex-col items-center lg:w-[71rem] px-8 mb-14">
      <h2 className="tracking-[4px] text-xl font-bebas text-getbold-pink mb-6">
        Portfolio
      </h2>
      <h3 className="text-3xl lg:text-5xl lg:leading-normal font-medium mb-12 text-center">
        Po długim czasie pracy w agencjach <br /> mam tyle i tyle{" "}
        <span className="font-bold text-getbold-pink relative">
          projektów!{" "}
          <StaticImage
            src="../../../images/portfolio-underline.svg"
            alt="underline"
            className="absolute -z-10 -bottom-2 left-0"
          />
        </span>
      </h3>
    </div>
  );
};
