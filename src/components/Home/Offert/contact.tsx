import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export const OffertContact = () => {
  return (
    <div className="flex flex-col items-center mt-14 px-8">
      <h4 className="text-lg lg:text-xl text-center font-bold mb-[2.25rem]">
        Chcesz otrzymać niezobowiązującą{" "}
        <span className="font-black relative">
          propozycję?
          <StaticImage
            src="../../../images/offert-circle.svg"
            alt="circle"
            className="absolute -top-2 -left-1 -z-10"
          />
          <StaticImage
            src="../../../images/offert-arrow.svg"
            alt="arrow"
            className="hidden sm:block absolute top-10 right-12 -z-10"
          />
        </span>
      </h4>
      <button className="rounded-3xl bg-getbold-btn-pink px-14 py-3 text-white font-semibold pointer">
        Skontaktuj się!
      </button>
    </div>
  );
};
