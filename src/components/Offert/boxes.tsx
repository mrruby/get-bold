import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export const BoxesOffert = () => {
  return (
    <div className="flex flex-col lg:flex-row space-y-12 lg:space-y-0 lg:space-x-8 items-center py-8 mx-auto px-8">
      <div className="bg-white shadow-md rounded-2xl p-8 md:p-12 max-w-[395px] flex flex-col items-center">
        <StaticImage
          src="../../images/offert/light.png"
          alt="light"
          className="w-[57px] h-auto mb-[30px]"
        />
        <h4 className="font-extrabold uppercase text-sm text-[#EF6278]  mb-[18px]">
          Pomysł
        </h4>
        <p className="text-sm text-[#1F2957] font-medium text-center leading-relaxed">
          Omawiamy Twoją sytuację, cele i plan działania. Musimy wiedzieć, że
          gramy do jednej bramki!
        </p>
      </div>

      <div className="bg-white shadow-md rounded-2xl p-8 py-16 md:p-12 md:py-24 max-w-[395px] flex flex-col items-center">
        <StaticImage
          src="../../images/offert/sprocket.svg"
          alt="light"
          className="w-[98px] h-auto mb-[30px]"
        />
        <h4 className="font-extrabold uppercase text-sm text-[#EF6278]  mb-[18px]">
          DZIAŁANIE
        </h4>
        <p className="text-sm text-[#1F2957] font-medium text-center leading-relaxed">
          Otrzymujesz od nas harmonogram działań i odpowiedź na każde nurtujące
          Cię pytanie. Pewność to podstawa!
        </p>
      </div>

      <div className="bg-white shadow-md rounded-2xl p-8 md:p-12 max-w-[395px] flex flex-col items-center">
        <StaticImage
          src="../../images/offert/effect.png"
          alt="light"
          className="w-[170px] h-auto mb-[30px]"
        />
        <h4 className="font-extrabold uppercase text-sm text-[#EF6278]  mb-[18px]">
          EFEKT
        </h4>
        <p className="text-sm text-[#1F2957] font-medium text-center leading-relaxed">
          Na bieżąco przedstawiamy Ci raporty, z konkretnymi liczbami, bez
          skomplikowanych marketingowych zwrotów.
        </p>
      </div>
    </div>
  );
};