import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export const HeroHome = () => {
  return (
    <main className="flex flex-col lg:flex-row flex-grow px-8 xl:px-[150px] lg:items-center min-h-full">
      <div className="w-full mb-10 lg:m-0 lg:w-2/5 relative">
        <h3 className="text-getbold-btn-pink font-bebas text-2xl mb-4 lg:mb-12">
          Getbold.Agency
        </h3>
        <h1 className="text-4xl lg:text-[3.5rem] text-[#1F2957] leading-none font-extrabold mb-3 lg:mb-10">
          Jesteśmy Get Bold.
        </h1>
        <h2 className="text-3xl lg:text-[3.125rem] font-medium leading-tight mb-8 lg:mb-12">
          Z nami Twój biznes może więcej.{" "}
          <span className="relative whitespace-pre">
            <StaticImage
              src="../../images/hero-circle.svg"
              alt="circle"
              className="absolute -z-10 -top-3 -left-4"
            />
            Po prostu.
          </span>
        </h2>
        <button className="rounded-3xl bg-getbold-btn-pink px-8 py-3 text-white font-semibold pointer">
          Sprawdź, co potrafimy!
        </button>
      </div>
      <div className="w-full lg:w-3/5 flex items-center justify-center">
        <StaticImage
          src="../../images/hero.png"
          alt="Hero"
          className="w-full h-auto"
        />
      </div>
    </main>
  );
};
