import React from "react";
import { OffertContentList } from "../../helpers/OffertContentList";
import { OffertContent } from "../../helpers/OffertContent";

export const OffertAdsTikTok = () => {
  return (
    <div className="flex flex-col items-center ">
      <div className="px-2 lg:px-24 flex flex-col gap-8 lg:flex-row text-left lg:items-start lg:pt-5" id="tik-tok">
        <OffertContentList
          img="../../../assets/offert/tiktok.svg"
          title="Co dla Ciebie zrobimy? "
          listItems={[
            "Poprowadzimy Twój kanał.",
            "Stworzymy treści, które wyrwą się schematom.",
            "Zrobimy coś, na co nie odważyła się Twoja konkurencja.",
          ]}
          firstPartshortText=" To jak, mówisz „tak!” klientom, którzy kupują dzięki "
          secPartshortText="kreatywnym filmikom?"
          buttonText="Wchodzę w to!"
        />
        <OffertContent
          firtPartTitle="Ustawimy dla Ciebie  "
          secPartTitle="kampanie reklamowe na TikToku"
          firstParagraph="Postaw na nowoczesną reklamę i patrz, jak dziwią się Ci, którzy mówili, że TikTok to zabawa dla nastolatków. Czy TikTok sprawdzi się w Twoim biznesie? Nasza w tym głowa, by doradzić Ci, czy warto w to iść." />
      </div>
    </div>
  );
};

