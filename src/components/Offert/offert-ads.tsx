import React from "react";
import { OffertContentList } from "../../helpers/OffertContentList";
import { OffertContent } from "../../helpers/OffertContent";

export const OffertAds = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="px-2 lg:px-24 flex flex-col gap-8 lg:flex-row text-left lg:items-start lg:m-h-[435px]" id="social-media">
        <OffertContent
          title={<> Przygotujemy dla Ciebie<span className="font-bold"> kampanie reklamowe</span> Facebook & Instagram Ads</>}
          firstParagraph="Dobrze wiesz, że na Facebooku i Instagramie są Twoi nowi klienci. Zastanawiasz się, jak do nich dotrzeć? Odpowiedź brzmi: dzięki kampaniom reklamowym."
          secParagraph="Wykorzystamy potencjał Facebooka i Instagrama tak, by trafić do precyzyjnego grona odbiorców. To oni zamówią Twój produkt, zapiszą się na Twój kurs lub odwiedzą Twój lokal."
        />
        <OffertContentList
          img="../../../assets/offert/social-media.svg"
          title="Jak współpracujemy? Ty delegujesz nam kampanie reklamowe, a my… "
          listItems={[
            "projektujemy dla Ciebie teksty i grafiki, po zobaczeniu których klienci mówią „WOW! Chcę to!”.",
            "docieramy do osób, które szukają właśnie Twoich produktów i usług.",
            "wyciskamy z budżetu reklamowego jak najwięcej.",
          ]}
          firstPartshortText="To jak, chcesz, aby przychodzili do Ciebie "
          secPartshortText="nowi klienci?"
          buttonText="Wchodzę w to!"
        />
      </div>
    </div>
  );
};

