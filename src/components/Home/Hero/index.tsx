import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { HomeHeroHeading } from "./heroHeading";
import { HomeHeroImage } from "./heroImage";

const HomeHeroComponent = () => {
  return (
    <main className="flex flex-col lg:flex-row flex-grow px-8 py-8 lg:items-center min-h-full">
      <HomeHeroHeading />
      <HomeHeroImage />
    </main>
  );
};

export default HomeHeroComponent;
