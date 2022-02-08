import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { HomeReferencesHeading } from "./referencesHeading";
import { HomeReferencesItems } from "./referencesItems";

export const HomeReferencesComponent = () => {
  return (
    <main className="relative py-24 lg:py-40 px-8 w-full flex flex-col items-center">
      <HomeReferencesHeading />
      <HomeReferencesItems />
    </main>
  );
};
