import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { OffertBoxes } from "./Offert/boxes";
import { OffertContact } from "./Offert/contact";
import { OffertHeading } from "./Offert/heading";

export const OffertHome = () => {
  return (
    <main className="relative py-40 w-full flex flex-col items-center">
      <OffertHeading />
      <OffertBoxes />
      <OffertContact />
      <StaticImage
        src="../../images/offert-gray-triangle.svg"
        alt="triangle"
        className="absolute -left-40 top-[32rem]"
      />
    </main>
  );
};
