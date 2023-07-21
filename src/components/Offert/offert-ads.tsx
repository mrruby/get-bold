import React from "react";
import { OffertContentList } from "../../helpers/OffertContentList";
import { OffertContent } from "../../helpers/OffertContent";
import Container from "../../components/Layout/OffertLayout/Container";

export const OffertAds = () => {
  return (
    <Container height="lg:h-[472px]">
      <div className="flex flex-col items-center">
        <div className="p-2 lg:px-24 flex flex-col gap-8 lg:flex-row text-left items-start" id="social-media">
          <OffertContent
            firtPartTitle="Przygotujemy dla Ciebie  "
            secPartTitle="kampanie reklamowe "
            thirdPartTitle="Facebook & Instagram Ads"
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
    </Container>
  );
};

