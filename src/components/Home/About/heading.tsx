import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export const AboutHeading = () => {
  return (
    <div className="flex flex-col items-center lg:w-[71rem] px-8 mb-14">
      <h2 className="tracking-[4px] text-xl font-bebas text-getbold-pink mb-6">
        O nas
      </h2>
      <h3 className="text-3xl lg:text-5xl lg:leading-normal font-medium mb-12 text-center">
        Po długim czasie pracy w agencjach <br /> marketingowych,{" "}
        <span className="font-bold text-getbold-pink relative whitespace-pre">
          <StaticImage
            src="../../../images/about-underline.svg"
            alt="underline"
            className="absolute -bottom-2 left-4"
          />
          stawiamy na siebie.
        </span>
      </h3>
    </div>
  );
};
