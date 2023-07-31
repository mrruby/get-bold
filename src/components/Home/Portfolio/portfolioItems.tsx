import React from "react";
import { HomePortfolioItem } from "../../../helpers/HomePortfolioItem";

export const HomePortfolioItems = () => {
  return (
    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      <HomePortfolioItem
        img="./dogs.webp"
        title="Aplikacja Petsly"
        tag="Social Media"
        logo="../../portfolio/petsly.png"
      />
      <HomePortfolioItem
        img="./home.webp"
        title="Branża Home&Decor"
        tag="Social Media"
        logo="../../portfolio/home.svg"
      />
      <HomePortfolioItem
        img="./teacher.webp"
        title="Kurs dla nauczycieli"
        tag="Facebook Ads"
        logo="../../portfolio/kurs.svg"
      />
    </div>
  );
};
