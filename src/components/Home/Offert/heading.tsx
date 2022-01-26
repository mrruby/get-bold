import React from "react";

export const OffertHeading = () => {
  return (
    <div className="flex flex-col items-center lg:max-w-[71rem] px-8 mb-14">
      <h2 className="tracking-[4px] text-xl font-bebas text-getbold-pink mb-6">
        Oferta
      </h2>
      <h3 className="text-3xl lg:text-5xl text-center font-medium mb-12">
        <span className="font-bold">Sprytny marketing</span> to emocje, ale i
        liczby.
      </h3>
      <p className="text-base lg:text-xl text-center">
        Nie musisz być wszędzie: wystarczy być tam, gdzie są Twoi potencjalni
        klienci. Właśnie dlatego wszystkie działania opieramy na naszym
        doświadczeniu i konkretnych statystykach z branży.
      </p>
    </div>
  );
};
