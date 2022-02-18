import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { OffertBox } from "../../helpers/OffertBox";

export const BoxesOffert = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 w-full py-8 mx-auto px-8">
      <OffertBox
        img="../../../assets/offert/light.png"
        title="Pomysł"
        styling="w-[57px] h-auto mb-[30px]"
        text="Omawiamy Twoją sytuację, cele i plan działania. Musimy wiedzieć, że
          gramy do jednej bramki!"
        isBigger={false}
      />

      <OffertBox
        img="../../../assets/offert/sprocket.svg"
        title="Działanie"
        styling="w-[98px] h-auto mb-[30px]"
        text="Otrzymujesz od nas harmonogram działań i odpowiedź na każde nurtujące
        Cię pytanie. Pewność to podstawa!"
        isBigger={true}
      />

      <OffertBox
        img="../../../assets/offert/effect.png"
        title="Efekt"
        styling="w-[170px] h-auto mb-[30px]"
        text="Na bieżąco przedstawiamy Ci raporty, z konkretnymi liczbami, bez
        skomplikowanych marketingowych zwrotów."
        isBigger={false}
      />
    </div>
  );
};
