import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { AboutHeading } from "./About/heading";
import { AboutPeople } from "./About/people";

export const AboutHome = () => {
  return (
    <main className="relative py-24 lg:py-40 w-full flex flex-col items-center">
      <AboutHeading />
      <AboutPeople />
    </main>
  );
};
