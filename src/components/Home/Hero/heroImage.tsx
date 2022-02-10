import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Parallax } from "react-scroll-parallax";

export const HomeHeroImage = () => {
  return (
    <Parallax
      speed={40}
      className="w-full lg:w-3/5 flex items-center justify-center"
    >
      <StaticImage
        src="../../../images/hero.png"
        alt="Hero"
        className="w-full h-auto"
      />
    </Parallax>
  );
};
