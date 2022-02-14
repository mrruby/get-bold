import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Parallax } from "react-scroll-parallax";
import { AboutAda } from "./modules/ada";

export const HomeAboutPeople = () => {
  return (
    <Parallax
      speed={-10}
      className="flex flex-col lg:flex-row space-y-20 lg:space-y-0 items-center max-w-[1100px]"
    >
      <div className="relative flex flex-col items-center w-full">
        <AboutAda />

        <div className="mt-[3.375rem] flex flex-col items-center">
          <h4 className="font-bold text-xl lg:text-[1.75rem] mb-2">
            Adrianna Promis
          </h4>
          <p className="text-base text-center">Strategiczny marketing</p>
          <Link to="o-nas">
            <button className="rounded-3xl bg-getbold-btn-pink px-8 py-3 text-white font-semibold pointer mt-[2rem]">
              Dowiedz się więcej!
            </button>
          </Link>
        </div>
      </div>
    </Parallax>
  );
};
