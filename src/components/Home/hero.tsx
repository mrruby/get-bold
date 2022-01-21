import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export const HeroHome = () => {
  return (
    <main className="flex flex-grow items-center min-h-full">
      <div className="w-1/2">
        <h3 className="text-getbold-btn-pink font-bebas text-2xl mb-12">
          Getbold.Agency
        </h3>
        <h1 className="text-[3.5rem] font-extrabold mb-10">
          Jesteśmy Get Bold.
        </h1>
        <h2 className="text-[3.125rem] font-medium leading-tight mb-12">
          Z nami Twój biznes może więcej. Po prostu.
        </h2>
        <button className="rounded-3xl bg-getbold-btn-pink px-8 py-3 text-white font-semibold pointer">
          Sprawdź, co potrafimy!
        </button>
      </div>
      <div className="w-1/2 flex justify-end">
        <StaticImage
          src="../../images/hero.png"
          alt="Hero"
          className="w-[48rem] h-auto"
        />
      </div>
      <StaticImage
        src="../../images/home-yellow-circle.svg"
        alt="circle"
        className="absolute h-[10rem] w-[10rem] -left-12 bottom-12"
      />
    </main>
  );
};
