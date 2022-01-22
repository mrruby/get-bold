import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export const ReferencesHeading = () => {
  return (
    <div className="flex flex-col items-center w-[71rem] mb-14">
      <h2 className="tracking-[4px] text-xl font-bebas text-getbold-pink mb-6">
        Referencje
      </h2>
      <h3 className="text-5xl leading-normal font-medium mb-12 text-center">
        Co mówią o nas <span className="font-bold">klienci?</span>
      </h3>
      <StaticImage
        src="../../../images/references-underline.svg"
        alt="underline"
        className="absolute mt-[7rem] ml-[24rem]"
      />
    </div>
  );
};
