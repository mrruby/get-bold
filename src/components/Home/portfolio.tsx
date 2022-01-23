import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { PortfolioPortfolio } from "./Portfolio/portfolio";
import { PortfolioButton } from "./Portfolio/button";
import { PortfolioHeading } from "./Portfolio/heading";

export const PortfolioHome = () => {
  return (
    <main className="relative py-40 w-full flex flex-col items-center">
      <PortfolioHeading />
      <PortfolioPortfolio />
      <PortfolioButton />
    </main>
  );
};
