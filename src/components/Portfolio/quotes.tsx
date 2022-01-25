import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export const QuotesPortfolio = () => {
  return (
    <div className="flex flex-col items-center py-[100px] relative px-8">
      <span className="w-4/5 lg:w-[860px] h-[1px] bg-getbold-border opacity-[.09] absolute top-0 m-8"></span>
      <span className="w-4/5 lg:w-[860px] h-[1px] bg-getbold-border opacity-[.09] absolute bottom-0 m-8"></span>

      <h3 className="text-3xl lg:text-4xl text-[#1F2957] font-bold mb-[36px] text-center">
        A tak mówią o nas główni zainteresowani.
      </h3>
      <p className="text-lg lg:text-xl font-medium  text-center lg:w-[777px] mb-36">
        I, co najważniejsze, zadowoleni!
      </p>

      <div className="flex justify-center lg:justify-between space-x-36 mb-16">
        <div className="w-1/2 relative">
          <StaticImage
            src="../../images/references-quote.svg"
            alt="quote"
            className="absolute -top-32 w-auto h-auto -left-12"
          />
          <p className="mb-16 font-medium lg:w-[420px]">
            “Adrianna has very professional and commendable work attitude and I
            know that she will be a beneficial addition to any organization.”
          </p>
          <p className="font-extrabold">Patrycja Olchowy</p>
          <p className="text-getbold-btn-pink font-semibold">Hey You! Agency</p>
        </div>

        <div className="relative hidden lg:block">
          <StaticImage
            src="../../images/references-quote.svg"
            alt="quote"
            className="absolute -top-32 w-auto h-auto -left-12"
          />
          <p className="mb-16 font-medium w-[420px]">
            “Dzięki współpracy z Get Bold, liczba klientów zainteresowanych
            usługami rośnie, a my tworzymy z nimi prawdziwą relację.
            Uświadomiłam sobie, jak ważny jest lejek sprzedażowy."
          </p>
          <p className="font-extrabold">Beata Urbas</p>
          <p className="text-getbold-btn-pink font-semibold">
            Fryzjerstwo Urszula&Beata
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center space-x-4">
        <button className="w-4 h-4 rounded-full bg-getbold-btn-pink pointer"></button>
        <button className="w-4 h-4 rounded-full bg-getbold-btn-pink opacity-40 pointer"></button>
      </div>
    </div>
  );
};
