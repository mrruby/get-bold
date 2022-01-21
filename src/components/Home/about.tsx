import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { AboutHeading } from "./About/heading";
import { AboutPeople } from "./About/people";

export const AboutHome = () => {
  return (
    <main className="relative py-40 w-full flex flex-col items-center">
      <StaticImage
        src="../../images/about-yellow-square.svg"
        alt=""
        className="absolute -left-[4rem] -top-2"
      />

      <AboutHeading />
      <AboutPeople />
    </main>
  );
};
