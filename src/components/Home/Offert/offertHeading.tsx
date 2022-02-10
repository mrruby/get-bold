import React from "react";
import { Parallax } from "react-scroll-parallax";

export const HomeOffertHeading = () => {
  return (
    <Parallax
      speed={10}
      className="flex flex-col items-center lg:max-w-[71rem] px-8 mb-14"
    >
      <h2 className="tracking-[4px] text-xl font-bebas text-getbold-pink mb-6">
        Oferta
      </h2>
      <h3 className="text-3xl lg:text-4xl text-center font-medium mb-8">
        <span className="font-bold">Sprytny marketing</span> to emocje, ale i
        liczby.
      </h3>
      <p className="text-base text-center">
        Nie musisz być wszędzie: wystarczy być tam, gdzie są Twoi potencjalni
        klienci. Właśnie dlatego wszystkie działania opieramy na naszym
        doświadczeniu i konkretnych statystykach z branży.
      </p>
    </Parallax>
  );
};
