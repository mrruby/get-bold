import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { HomeReferencesItems } from "../Home/References/referencesItems";

export const QuotesPortfolio = () => {
  return (
    <div className="relative py-24 lg:px-36 w-full items-center">
      <span className="w-4/5 lg:w-[860px] h-[1px] bg-getbold-border opacity-[.09] absolute top-0 m-8"></span>
      <span className="w-4/5 lg:w-[860px] h-[1px] bg-getbold-border opacity-[.09] absolute bottom-0 m-8"></span>

      <h3 className="text-3xl lg:text-4xl text-[#1F2957] font-bold mb-[36px] text-center">
        A tak mówią o nas główni zainteresowani.
      </h3>
      <p className="text-lg lg:text-xl font-medium  text-center mb-36">
        I, co najważniejsze, zadowoleni!
      </p>

      <HomeReferencesItems />
    </div>
  );
};
