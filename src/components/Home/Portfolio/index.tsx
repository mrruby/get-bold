import React from "react";
import { HomePortfolioButton } from "./portfolioButton";
import { HomePortfolioHeading } from "./portfolioHeading";
import { HomePortfolioItems } from "./portfolioItems";

const HomePortfolioComponent = () => {
  return (
    <main
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-out"
      data-aos-delay="200"
      className="relative px-8 py-24 lg:py-40 w-full flex flex-col items-center"
    >
      <HomePortfolioHeading />
      <HomePortfolioItems />
      <HomePortfolioButton />
    </main>
  );
};

export default HomePortfolioComponent;
