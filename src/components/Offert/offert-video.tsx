import React from "react";
import { OffertContentList } from "../../helpers/OffertContentList";
import { OffertContent } from "../../helpers/OffertContent";
import Container from "../../components/Layout/OffertLayout/Container";

export const OffertVideo = () => {
  return (
    <Container height="h-[435px]">
      <div className="flex flex-col items-center ">
        <div className="p-2 lg:px-24 flex flex-col gap-8 lg:flex-row text-left items-start" id="video">
          <OffertContentList
            img="../../../assets/offert/video.svg"
            title="Co dla Ciebie zrobimy? "
            listItems={[
              "Doradzimy, jaki film stworzyć dla Twojej marki!",
              "Napiszemy scenariusze filmów, które powodują szybsze bicie serca.",
              "Nagramy reelsy i tiktoki, które przyniosą Ci nowych klientów.",
            ]}
            firstPartshortText=""
            secPartshortText="To jak, masz odwagę przyciągnąć nowych klientów dzięki video?"
            buttonText="Wchodzę w to!"
          />
          <OffertContent
            firtPartTitle="Nagramy dla Ciebie "
            secPartTitle="video sprzedażowe"
            firstParagraph="Jeszcze niedawno mówiliśmy, że kogo nie ma na Facebooku, ten nie istnieje. Teraz mówimy, jeśli nie publikujesz video, nie istniejesz."
            secParagraph="Czy rolki i tiktoki mogą sprzedawać? "
            secParagraphBold="Zdziwisz się, jak bardzo skutecznie!"
          />
        </div>
      </div>
    </Container>
  );
};
7;