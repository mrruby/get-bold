import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export const OffertContact = () => {
  return (
    <div className="flex flex-col items-center mt-14">
      <StaticImage
        src="../../../images/offert-circle.svg"
        alt="circle"
        className="absolute ml-[380px] -mt-3 -z-10"
      />
      <StaticImage
        src="../../../images/offert-arrow.svg"
        alt="arrow"
        className="absolute ml-[320px] mt-9 -z-10"
      />
      <h4 className="text-xl font-bold mb-[2.25rem]">
        Chcesz otrzymać niezobowiązującą{" "}
        <span className="font-black">propozycję?</span>
      </h4>
      <button className="rounded-3xl bg-getbold-btn-pink px-14 py-3 text-white font-semibold pointer">
        Skontaktuj się!
      </button>
    </div>
  );
};
