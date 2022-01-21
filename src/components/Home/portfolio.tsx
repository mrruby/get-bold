import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { PortfolioBlog } from "./Portfolio/blog";
import { PortfolioButton } from "./Portfolio/button";
import { PortfolioHeading } from "./Portfolio/heading";

export const PortfolioHome = () => {
  return (
    <main className="relative py-40 w-full flex flex-col items-center">
      <StaticImage
        src="../../images/portfolio-triangle.svg"
        alt=""
        className="absolute -right-20 top-2"
      />

      <StaticImage
        src="../../images/portfolio-blue-hex.svg"
        alt=""
        className="absolute -left-[19rem] top-[36rem]"
      />

      <StaticImage
        src="../../images/portfolio-red-circle.svg"
        alt=""
        className="absolute -right-[10rem] -bottom-2"
      />

      <PortfolioHeading />
      <PortfolioBlog />
      <PortfolioButton />
    </main>
  );
};
