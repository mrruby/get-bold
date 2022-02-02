import React from "react";
import { PortfolioItems } from "../../../pageContent/portfolioItems";

export const PortfolioPortfolio = () => {
  return (
    <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 px-8">
      {PortfolioItems.map((item) => {
        return (
          <div className=" bg-white h-[33rem] w-[395px] flex flex-col items-center drop-shadow-md rounded-2xl">
            <div className="h-4/5 w-full relative bg-getbold-btn-blue rounded-t-2xl">
              <img
                src={item.img}
                alt={item.title}
                className="rounded-t-2xl h-full w-full object-cover"
              />
            </div>

            <div className="absolute bottom-0 flex flex-col items-center justify-center h-1/5 w-full space-y-1 bg-white rounded-b-2xl">
              <p className="font-extrabold mb-2">{item.title}</p>
              <p className="text-getbold-pink font-medium">{item.tags}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
