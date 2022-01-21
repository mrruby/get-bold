import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export const AboutHeading = () => {
  return (
    <div className="flex flex-col items-center w-[71rem] mb-14">
      <h2 className="tracking-[4px] text-xl font-bebas text-getbold-pink mb-6">
        O nas
      </h2>
      <h3 className="text-5xl leading-normal font-medium mb-12 text-center">
        Po długim czasie pracy w agencjach <br /> marketingowych,
        <span className="font-bold text-getbold-pink">
          {" "}
          stawiamy na siebie.
        </span>
      </h3>
      <StaticImage
        src="../../../images/about-underline.svg"
        alt="underline"
        className="absolute mt-[12rem] ml-[27rem]"
      />
    </div>
  );
};
