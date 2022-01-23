import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export const ReferencesHeading = () => {
  return (
    <div className="flex flex-col items-center lg:w-[71rem] px-8 mb-14">
      <h2 className="tracking-[4px] text-xl font-bebas text-getbold-pink mb-6">
        Referencje
      </h2>
      <h3 className="text-3xl lg:text-5xl lg:leading-normal font-medium mb-12 text-center">
        Co mówią o nas{" "}
        <span className="font-bold relative">
          <StaticImage
            src="../../../images/references-underline.svg"
            alt="underline"
            className="absolute -z-10 bottom-0 left-0"
          />
          klienci?
        </span>
      </h3>
    </div>
  );
};
