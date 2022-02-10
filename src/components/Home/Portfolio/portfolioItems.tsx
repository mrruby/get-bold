import React from "react";
import { Parallax } from "react-scroll-parallax";
import { PortfolioItems } from "../../../utils/pageContent/portfolioItems";

export const HomePortfolioItems = () => {
  return (
    <Parallax
      speed={0}
      className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 px-8"
    >
      {PortfolioItems.map((item) => {
        return (
          <div className=" bg-white h-[24rem] max-w-[20rem] flex flex-col items-center drop-shadow-md rounded-2xl">
            <div className="h-4/5 w-full relative bg-getbold-btn-blue rounded-t-2xl">
              <img
                src={item.img}
                alt={item.title}
                className="rounded-t-2xl h-full w-full object-cover"
              />
            </div>

            <div className="absolute bottom-0 flex flex-col items-center justify-center w-full py-4 space-y-1 bg-white rounded-b-2xl">
              <p className="font-extrabold mb-2">{item.title}</p>
              <p className="text-getbold-pink font-medium">{item.tags}</p>
            </div>
          </div>
        );
      })}
    </Parallax>
  );
};
