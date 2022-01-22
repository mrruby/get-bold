import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export const ReferencesReferences = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between space-x-36 mb-16">
        <div className="relative">
          <StaticImage
            src="../../../images/references-quote.svg"
            alt="quote"
            className="absolute -top-32 w-auto h-auto -left-12"
          />
          <p className="mb-16 font-medium w-[420px]">
            “Adrianna has very professional and commendable work attitude and I
            know that she will be a beneficial addition to any organization.”
          </p>
          <p className="font-extrabold">Patrycja Olchowy</p>
          <p className="text-getbold-btn-pink font-semibold">Hey You! Agency</p>
        </div>

        <div className="relative">
          <StaticImage
            src="../../../images/references-quote.svg"
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
