import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { ReferencesHeading } from "./References/heading";
import { ReferencesReferences } from "./References/references";

export const ReferencesHome = () => {
  return (
    <main className="relative py-24 lg:py-40 w-full flex flex-col items-center">
      <ReferencesHeading />
      <ReferencesReferences />
    </main>
  );
};
