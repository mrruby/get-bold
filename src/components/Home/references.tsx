import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { ReferencesHeading } from "./References/heading";
import { ReferencesReferences } from "./References/references";

export const ReferencesHome = () => {
  return (
    <main className="relative py-40 w-full flex flex-col items-center">
      <StaticImage
        src="../../images/references-blue-chat.svg"
        alt=""
        className="absolute right-0 top-20"
      />

      <ReferencesHeading />
      <ReferencesReferences />
    </main>
  );
};
