import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { HomeReferencesHeading } from "./referencesHeading";
import { HomeReferencesItems } from "./referencesItems";

const HomeReferencesComponent = () => {
  return (
    <main
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-out"
      data-aos-delay="200"
      className="relative py-24 lg:py-40 px-8 w-full flex flex-col items-center"
    >
      <HomeReferencesHeading />
      <HomeReferencesItems />
    </main>
  );
};

export default HomeReferencesComponent;
