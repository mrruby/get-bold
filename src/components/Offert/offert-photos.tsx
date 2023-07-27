import React from "react";
import { OffertContentList } from "../../helpers/OffertContentList";
import { OffertContent } from "../../helpers/OffertContent";

export const OffertPhotos = () => {
  return (
    <div className="flex flex-col items-center ">
      <div className="p-4 lg:px-24 flex flex-col gap-8 lg:flex-row text-left lg:items-start" id="zdjecia">
        <OffertContent
          title={<>Zrobimy dla Ciebie <span className="font-bold"> kreatywne zdjęcia!</span></>}
          firstParagraph="Ty wiesz, że masz świetną ofertę. My też to wiemy. A klienci? Cóż, klienci muszą zobaczyć produkt, zobaczyć migawki z Twojej usługi i poczuć, że warto."
          secParagraph={<>Zrobimy dla Ciebie <span className="font-bold"> zdjęcia produktowe i/lub wizerunkowe,</span> na widok których klienci krzykną: „kupuję!”</>}
        />
        <OffertContentList
          img="../../../assets/offert/photos.svg"
          title="Zobacz, co kreatywnego dla Ciebie zrobimy: "
          listItems={[
            "przygotujemy dla Ciebie moodboard z inspiracjami,",
            "zaplanujemy plan zdjęciowy,",
            "zrobimy zdjęcia produktowe z niepowtarzalnym vibe,",
            "profesjonalnie obrobimy każdy detal,",
            "prześlemy Ci pliki gotowe do publikacji z socialach.",
          ]}
          firstPartshortText="To jak, chcesz, aby na widok Twoich produktów "
          secPartshortText="klientom miękły kolana?"
          buttonText="Wchodzę w to!"
        />
      </div>
    </div>
  );
};
7;
