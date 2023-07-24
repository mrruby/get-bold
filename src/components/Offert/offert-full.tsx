import React from "react";
import { OffertContentList } from "../../helpers/OffertContentList";
import { OffertContent } from "../../helpers/OffertContent";

const items = [
  { src: "../../../assets/offert/social-media.svg", alt: "GetBold-socialmedia" },
  { src: "../../../assets/offert/photos.svg", alt: "GetBold-photos" },
  { src: "../../../assets/offert/video.svg", alt: "GetBold-video" },
  { src: "../../../assets/offert/all.svg", alt: "GetBold-all" },
];

export const OffertFull = () => {
  return (
    <div className="flex flex-col items-center ">
      <div className="p-4 lg:px-24 flex flex-col gap-8 lg:flex-row text-left lg:items-start" id="pelna-obsluga">
        <div className="flex flex-col max-w-full">
          <OffertContent
            firtPartTitle="Potrzebujesz wsparcia "
            secPartTitle="od A do Z?"
            firstParagraph="Zastanawiasz się, co zrobić, aby zdobyć nowych klientów? Chcesz działać w internecie, ale Twoja lista „to do” nigdy się nie kończy? Zrobimy za Ciebie kampanie reklamowe w social mediach od A do Z."
            secParagraphBold="Ty tylko zaakceptujesz świetne materiały i otrzymasz jeszcze lepsze wyniki! "
          />
          <div className="flex gap-1 lg:gap-6 px-1">
            {items.map((item, index) => (
              <div key={index} className="h-[84px] w-[84px] shadow-div rounded-small-item">
                <img src={item.src} alt={item.alt} />
              </div>
            ))}
          </div>
        </div>
        <OffertContentList
          title="Co dostaniesz u nas w pakiecie?"
          listItems={[
            "Mistrzowskie zdjęcia, na które aż chce się patrzeć.",
            "Reelsy i tiktoki, które wzbudzą zainteresowanie potencjalnych klientów",
            "Grafiki, po których zobaczeniu klienci zdecydują się na zakup.",
            "Teksty, które aż chce się czytać.",
            "Kampanie na Facebooku, Instagramie i/lub TikToku, które zachęcą klientów do zakupu.",
          ]}
          firstPartshortText="To jak, chcesz, aby "
          secPartshortText="Twoja firma poczuła się zaopiekowana marketingowo?"
          buttonText="Wchodzę w to!"
        />
      </div>
    </div>
  );
};
