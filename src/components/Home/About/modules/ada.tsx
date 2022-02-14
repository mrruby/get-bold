import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export const AboutAda = () => {
  return (
    <div className="relative">
      <img
        src="../../../../about-light.png"
        alt=""
        className="absolute -top-10 left-16 z-30 w-[100px] h-auto"
      />
      <img
        src="../../../../about-note.svg"
        alt=""
        className="absolute top-36 -left-32 z-30 w-[200px] h-auto"
      />

      <div className="w-4/5 md:w-[24rem] lg:h-[24rem] pt-1 pb-2 px-2 lg:p-0 bg-image-about-ada flex items-start justify-center">
        <StaticImage
          src="../../../../images/about-ada.png"
          alt="ada"
          className="md:w-[23rem] h-auto lg:mt-1"
        />
      </div>
    </div>
  );
};
