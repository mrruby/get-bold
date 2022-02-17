import React from "react";
import { OffertContent } from "../../helpers/OffertContent";

export const OffertComponent = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="p-8 -mt-40 pt-64 -z-10 flex flex-col items-center text-center mb-10">
        <h3 className="text-3xl lg:text-4xl lg:w-[1024px] leading-snug text-[#1F2957] font-medium mb-[30px]">
          Zobacz, co możemy za Ciebie{" "}
          <span className="font-bold">ogarnąć:</span>
        </h3>
        <p className="text-base text-[#1F2957] font-medium lg:w-[1024px]">
          Nie musisz być wszędzie: wystarczy być tam, gdzie są Twoi potencjalni
          klienci. Właśnie dlatego wszystkie działania opieramy na naszym
          doświadczeniu i konkretnych statystykach z branży.
        </p>
      </div>

      <div className="flex flex-col justify-center items-center py-36 px-8 lg:max-w-[1200px] md:px-[85px] border-t border-getbold-border border-opacity-[0.09]">
        <OffertContent
          img="../../../assets/offert/influencer.svg"
          title="Influencer marketing"
          shortText={
            <>
              Tam, gdzie konsumenci są znudzeni reklamami i wyskakującymi
              banerami... wkraczamy my! Znajdziemy dla Twojej marki osobę, która
              wzmocni jej wizerunek w sieci i sprawi, że pokocha ją nowe grono
              klientów. <br /> <br /> Choć posty sponsorowane czy relacje na
              Instagramie często wyglądają na spontaniczną zabawę, w
              rzeczywistości wymagają mnóstwa pracy „na zapleczu”. Jeśli
              zostanie ona dobrze wykonana, wiarygodny przekaz o Twoim produkcie
              trafi dokładnie do grupy docelowej.
            </>
          }
          subTitle="Co dla Ciebie zrobimy?"
          listItems={[
            "ustalimy cel, do którego będziemy zmierzać,",
            "znajdziemy influencera zgodnego z charakterem Twojej marki,",
            "przygotujemy wycenę kampanii,",
            "opracujemy wyjątkową koncepcję, która porwie odbiorców,",
            "przypilnujemy harmonogramu działań,",
            "załatwimy wszystkie niezbędne formalności,",
            "i pokażemy Ci w raporcie, co wspólnie osiągnęliśmy!",
          ]}
          buttonText="Wchodzę w to!"
        />

        <OffertContent
          img="../../../assets/offert/socialmedia.svg"
          title="Social media"
          shortText={
            <>
              Kojarzysz takie fanpejdże, które aż chce się czytać, nawet gdy nie
              znasz jeszcze samego produktu? My je tworzymy! Także od podstaw.{" "}
              <br />
              <br /> Jeśli nie ma Cię w social mediach – nie istniejesz.
              Podobnie jest z Twoją marką. Pomożemy Ci wykorzystać fakt, że
              przeciętny Polak spędza ponad 7 godzin w mediach
              społecznościowych. Dzięki obecności w nich będziesz dokładnie tam,
              gdzie są już Twoi klienci.
            </>
          }
          subTitle="Co dla Ciebie zrobimy?"
          listItems={[
            "wybierzemy najlepsze social media dla Twojego produktu,",
            "kompleksowo obsłużymy platformy takie jak Facebook, Instagram, LinkedIn, Twitter czy TikTok,",
            "zaplanujemy jakościowy, przemyślany content,",
            "zadbamy o niepowtarzalną komunikację, rozpoznawalną przez innych,",
            "ogarniemy konkursy, grupy i wydarzenia,",
            "stworzymy dla Ciebie zaangażowaną społeczność,",
            "i pochwalimy się w raporcie, co nam z tego wyszło!",
          ]}
          buttonText="Wchodzę w to!"
        />

        <OffertContent
          img="../../../assets/offert/consultation.svg"
          title="Konsultacje kreatywne"
          shortText={
            <>
              Marketingowa burza mózgów to nasza specjalność. Jeśli czujesz, że
              od niektórych tematów puchnie Ci głowa – skonsultuj się z nami i
              odzyskaj świeże spojrzenie na swój biznes. <br />
              <br /> W sprawach własnej firmy bardzo łatwo jest coś przeoczyć.
              Właśnie dlatego tak ważna jest inna perspektywa, która powstrzyma
              Cię przed powtarzaniem błędów i wydobyciu na powierzchnię tego, co
              warto podkreślić.
            </>
          }
          subTitle="Co dla Ciebie zrobimy?"
          listItems={[
            "określimy najważniejsze cele Twojej marki,",
            "zbadamy grupy docelowe, do których warto dotrzeć,",
            "pomożemy Ci stworzyć atrakcyjną ofertę,",
            "zajmiemy się user experience Twojej strony,",
            "dobierzemy dla Ciebie najlepsze kanały komunikacji,",
            "podpowiemy Ci, na co położyć najmocniejszy akcent",
            "i szczerze wskażemy, z czego lepiej zrezygnować!",
          ]}
          buttonText="Wchodzę w to!"
        />

        <OffertContent
          img="../../../assets/offert/fbads.png"
          title="Facebook Ads"
          shortText={
            <>
              Każdego dnia mnóstwo ludzi siedzi na Messengerze i scrolluje
              Fejsa. My sprawimy, że przy ekranie zadrży im palec, gdy zobaczą
              właśnie Twoją reklamę. <br />
              <br /> Nikogo nie trzeba dziś przekonywać, jak ogromną publikę ma
              Facebook. Kluczem jest jednak wykorzystanie jego potencjału tak,
              by trafić do precyzyjnego grona odbiorców, które będzie chciało
              zamówić Twój produkt, zapisać się na Twój kurs lub odwiedzić Twój
              lokal.
            </>
          }
          subTitle="Co dla Ciebie zrobimy?"
          listItems={[
            "opracujemy kreatywny koncept i strategię reklamową,",
            "określimy główną grupę docelową,",
            "przygotujemy treści dopasowane do głównego celu,",
            "wybierzemy najlepszy format dla Twojej marki,",
            "zoptymalizujemy Twój budżet, kierując środki tam, gdzie przyniosą one zyski,",
            "i zaprezentujemy nasze efekty w czytelnym raporcie!",
          ]}
          buttonText="Wchodzę w to!"
        />

        <OffertContent
          img="../../../assets/offert/tiktokads.png"
          title="TikTok Ads"
          shortText={
            <>
              TikTok został pobrany już 2 miliardy razy. Postaw na nowoczesną
              reklamę i patrz, jak dziwią się Ci, którzy mówili, że to tylko
              zabawa dla nastolatków. <br />
              <br /> Oczywiście, TikTok nie sprawdzi się w każdym biznesie.
              Jednak nasza w tym głowa, by doradzić Ci, czy warto w to iść.
              Jeśli zależy Ci na największym potencjale viralowym i dotarciu do
              słynnego pokolenia Z – chętnie w tym pomożemy.
            </>
          }
          subTitle="Co dla Ciebie zrobimy?"
          listItems={[
            "rozwiejemy wątpliwości, czy to na pewno platforma dla Twojej marki,",
            "określimy rodzaj kampanii,",
            "stworzymy kompletne treści, które wyrwą się schematom,",
            "poprowadzimy Twój kanał,",
            "zrobimy coś, na co nie odważyła się Twoja konkurencja,",
            "a Ty sam ocenisz efekty na podstawie czytelnego raportu!",
          ]}
          buttonText="Wchodzę w to!"
        />
      </div>
    </div>
  );
};
7;
