import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export const AboutPeople = () => {
  return (
    <div className="flex space-x-[15.875rem]">
      <div className="relative flex flex-col items-center">
        <StaticImage
          src="../../../images/about-light.png"
          alt="light"
          className="absolute z-10 w-[100px] h-auto -top-16 left-64"
        />

        <StaticImage
          src="../../../images/about-note.svg"
          alt="light"
          className="absolute z-10 w-[200px] h-auto top-24 -left-24"
        />

        <div className="w-[450px] h-[450px] bg-image-about-ada flex items-start justify-center">
          <StaticImage
            src="../../../images/about-ada.png"
            alt="ada"
            className="w-[427px] h-auto mt-1"
          />
        </div>

        <div className="mt-[3.375rem] flex flex-col items-center">
          <h4 className="font-bold text-[1.75rem]">Adrianna Promis</h4>
          <button className="rounded-3xl bg-getbold-btn-pink px-8 py-3 text-white font-semibold pointer mt-[2rem]">
            Dowiedz się więcej!
          </button>
        </div>
      </div>

      <div className="relative flex flex-col items-center">
        <StaticImage
          src="../../../images/about-code.svg"
          alt="light"
          className="absolute z-10 w-[100px] h-auto top-40 -right-12"
        />

        <StaticImage
          src="../../../images/about-sprocket.svg"
          alt="light"
          className="absolute z-10 w-[110px] h-auto -top-4 -left-4"
        />

        <div className="w-[450px] h-[450px] bg-image-about-dawid flex items-start justify-center">
          <StaticImage
            src="../../../images/about-dawid.png"
            alt="dawid"
            className="w-[427px] h-auto mt-1"
          />
        </div>
        <div className="mt-[3.375rem] flex flex-col items-center">
          <h4 className="font-bold text-[1.75rem]">Dawid Urbas</h4>
          <button className="rounded-3xl bg-getbold-btn-blue px-8 py-3 text-white font-semibold pointer mt-[2rem]">
            Dowiedz się więcej!
          </button>
        </div>
      </div>
    </div>
  );
};
