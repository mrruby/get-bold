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
      <div className="p-4 lg:px-24 lg:pt-12 flex flex-col gap-8 lg:flex-row text-left lg:items-start lg:mb-[-100px]" id="pelna-obsluga">
        <div className="flex flex-col max-w-full">
          <OffertContent
            title={<>Potrzebujesz wsparcia <span className="font-bold"> od A do Z?</span></>}
            firstParagraph="Zastanawiasz się, co zrobić, aby zdobyć nowych klientów? Chcesz działać w internecie, ale Twoja lista „to do” nigdy się nie kończy? Zrobimy za Ciebie kampanie reklamowe w social mediach od A do Z."
            secParagraph={<><span className="font-bold"> Ty tylko zaakceptujesz świetne materiały i otrzymasz jeszcze lepsze wyniki!</span></>}
          />
          <div className="flex sm:pl-6 lg:pl-8 gap-0.5 lg:gap-6 flex-wrap pt-6">
            {items.map((item, index) => (
              <div key={index} className="h-[84px] w-[84px] shadow-div rounded-small-item">
                <img src={item.src} alt={item.alt} />
              </div>
            ))}
          </div>
        </div>
        <div className="lg:mt-[60px]">
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
    </div>
  );
};
