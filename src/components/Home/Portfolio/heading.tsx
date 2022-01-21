import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export const PortfolioHeading = () => {
  return (
    <div className="flex flex-col items-center w-[71rem] mb-14">
      <h2 className="tracking-[4px] text-xl font-bebas text-getbold-pink mb-6">
        Portfolio
      </h2>
      <h3 className="text-5xl leading-normal font-medium mb-12 text-center">
        Po długim czasie pracy w agencjach <br /> mam tyle i tyle{" "}
        <span className="font-bold text-getbold-pink">projektów!</span>
      </h3>
      <StaticImage
        src="../../../images/portfolio-underline.svg"
        alt="underline"
        className="absolute mt-[11.5rem] ml-[23rem]"
      />
    </div>
  );
};
