import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export const HomeReferencesItems = () => {
  return (
    <div className="flex flex-col">
      <div className="md:grid md:grid-cols-2 gap-24 mb-16 flex justify-center">
        <div className="relative w-full sm:w-1/2 md:w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="144"
            height="360"
            className="absolute -top-32 w-auto h-auto -left-12"
            viewBox="0 0 144 360"
          >
            <text
              id="_"
              data-name="“"
              transform="translate(0 293)"
              fill="#ffa3b1"
              font-size="300"
              font-family="FilsonSoftMedium, Filson Soft"
              opacity="0.15"
            >
              <tspan x="0" y="0">
                “
              </tspan>
            </text>
          </svg>

          <p className="mb-16 font-medium italic">
            Naprawdę polecam współpracę z Adrianną. Konkretnie i z dużym
            sukcesem rozwinęłam sprzedaż swoich produktów on-line, dzięki
            odpowiedniej strategii, którą zaproponowała Ada. Ada kontroluje
            reklamy, wprowadza poprawki i dba o to, żeby maszyna ruszyła, gdy ja
            mogłam się zająć spokojnym opowiadaniem o moich produktach w sieci.
            Dużym plusem jest też stały kontakt i podsumowywanie na koniec
            kampanii, dzięki czemu wiedziałyśmy, co zadziałało, a co nie.
          </p>
          <p className="font-extrabold">Katarzyna Skórska</p>
          <p className="text-getbold-btn-pink font-semibold">
            Dietetyk kliniczny
          </p>
        </div>

        <div className="relative hidden md:block w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="144"
            height="360"
            className="absolute -top-32 w-auto h-auto -left-12"
            viewBox="0 0 144 360"
          >
            <text
              id="_"
              data-name="“"
              transform="translate(0 293)"
              fill="#ffa3b1"
              font-size="300"
              font-family="FilsonSoftMedium, Filson Soft"
              opacity="0.15"
            >
              <tspan x="0" y="0">
                “
              </tspan>
            </text>
          </svg>
          <p className="mb-16 font-medium italic">
            Ada wspierała moje działania w ramach kampanii reklamowych na
            Facebooku. To moje początki i Ada jest właściwą osobą na właściwym
            miejscu. Podchodzi do sprawy kompleksowo, ma wachlarz umiejętności,
            które pozwalają jej działać na wielu płaszczyznach. Współpraca
            przebiega w jasny, zrozumiały dla laika sposób. Komunikuje się
            niezwykle otwarcie, merytorycznie ale na luzie. Podsumowania, które
            przesyła po zakończonej kampanii są świetne! Można przeanalizować
            wyniki i wyciągnąć wnioski. Dzięki Adzie bardzo dużo się nauczyłam i
            z pewnością zgłoszę się ponownie.
          </p>
          <p className="font-extrabold">Martyna Wagner</p>
          <p className="text-getbold-btn-pink font-semibold">
            martynawagner.pl
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center space-x-4">
        <button className="w-4 h-4 rounded-full bg-getbold-btn-pink pointer"></button>
        <button className="w-4 h-4 rounded-full bg-getbold-btn-pink opacity-40 pointer"></button>
      </div>
    </div>
  );
};
