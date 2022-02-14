import React from "react";
import { Parallax } from "react-scroll-parallax";
import { PortfolioItem } from "./modules/item";

export const HomePortfolioItems = () => {
  return (
    <Parallax
      speed={0}
      className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 px-8"
    >
      <PortfolioItem
        img="https://images.pexels.com/photos/850602/pexels-photo-850602.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        title="Aplikacja Petsly"
        tag="Social Media"
        logo="../../portfolio/petsly.png"
      />
      <PortfolioItem
        img="https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        title="Branża Home&Decor"
        tag="Social Media"
        logo="../../portfolio/petsly.png"
      />
      <PortfolioItem
        img="https://images.pexels.com/photos/7156128/pexels-photo-7156128.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        title="Kurs dla nauczycieli"
        tag="Facebook Ads"
        logo="../../portfolio/petsly.png"
      />
    </Parallax>
  );
};
