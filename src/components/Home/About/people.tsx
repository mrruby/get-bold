import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export const AboutPeople = () => {
  return (
    <div className="flex flex-col lg:flex-row space-y-20 lg:space-y-0 lg:space-x-[15.875rem] items-center">
      <div className="relative flex flex-col items-center">
        <div className="w-2/5 lg:w-[450px] lg:h-[450px] pt-1 pb-2 px-2 lg:p-0 bg-image-about-ada flex items-start justify-center">
          <StaticImage
            src="../../../images/about-ada.png"
            alt="ada"
            className="lg:w-[427px] h-auto lg:mt-1"
          />
        </div>

        <div className="mt-[3.375rem] flex flex-col items-center">
          <h4 className="font-bold text-xl lg:text-[1.75rem]">
            Adrianna Promis
          </h4>
          <button className="rounded-3xl bg-getbold-btn-pink px-8 py-3 text-white font-semibold pointer mt-[2rem]">
            Dowiedz się więcej!
          </button>
        </div>
      </div>

      <div className="relative flex flex-col items-center">
        <div className="w-2/5 lg:w-[450px] lg:h-[450px] pt-1 pb-2 px-2 lg:p-0 bg-image-about-dawid flex items-start justify-center">
          <StaticImage
            src="../../../images/about-dawid.png"
            alt="dawid"
            className="lg:w-[427px] h-auto lg:mt-1"
          />
        </div>
        <div className="mt-[3.375rem] flex flex-col items-center">
          <h4 className="font-bold text-xl lg:text-[1.75rem]">Dawid Urbas</h4>
          <button className="rounded-3xl bg-getbold-btn-blue px-8 py-3 text-white font-semibold pointer mt-[2rem]">
            Dowiedz się więcej!
          </button>
        </div>
      </div>
    </div>
  );
};
