import { StaticImage } from "gatsby-plugin-image";
import React, { useEffect, useRef, useState } from "react";
import { Reference } from "../../../helpers/Reference";

interface IReferencesList {
  reference: string;
  name: string;
  company: string;
}

const referencesList: IReferencesList[] = [
  {
    reference:
      "Naprawdę polecam współpracę z Adrianną. Konkretnie i z dużym sukcesem rozwinęłam sprzedaż swoich produktów on-line, dzięki odpowiedniej strategii, którą zaproponowała Ada. Ada kontroluje reklamy, wprowadza poprawki i dba o to, żeby maszyna ruszyła, gdy ja mogłam się zająć spokojnym opowiadaniem o moich produktach w sieci. Dużym plusem jest też stały kontakt i podsumowywanie na koniec kampanii, dzięki czemu wiedziałyśmy, co zadziałało, a co nie.",
    name: "Katarzyna Skórska",
    company: "Dietetyk kliniczny",
  },
  {
    reference:
      "Ada wspierała moje działania w ramach kampanii reklamowych na Facebooku. To moje początki i Ada jest właściwą osobą na właściwym miejscu. Podchodzi do sprawy kompleksowo, ma wachlarz umiejętności, które pozwalają jej działać na wielu płaszczyznach. Współpraca przebiega w jasny, zrozumiały dla laika sposób. Komunikuje się niezwykle otwarcie, merytorycznie ale na luzie. Podsumowania, które przesyła po zakończonej kampanii są świetne! Można przeanalizować wyniki i wyciągnąć wnioski. Dzięki Adzie bardzo dużo się nauczyłam i z pewnością zgłoszę się ponownie.",
    name: "Martyna Wagner",
    company: "martynawagner.pl",
  },
];

export const HomeReferencesItems = () => {
  const [slide, setSlide] = useState<number[]>([0, 2]);
  const [mobileSlide, setMobileSlide] = useState<number[]>([0, 1]);
  return (
    <div className="flex flex-col">
      <div className="hidden md:grid md:grid-cols-2 gap-24 mb-16">
        {referencesList.slice(slide[0], slide[1]).map((reference, index) => {
          return (
            <Reference
              key={index}
              reference={reference.reference}
              name={reference.name}
              company={reference.company}
            />
          );
        })}
      </div>

      <div className="md:hidden grid grid-cols-1 gap-24 mb-16">
        {referencesList
          .slice(mobileSlide[0], mobileSlide[1])
          .map((reference, index) => {
            return (
              <Reference
                key={index}
                reference={reference.reference}
                name={reference.name}
                company={reference.company}
              />
            );
          })}
      </div>

      {referencesList.length > 2 && (
        <div className="hidden md:flex items-center justify-center space-x-4">
          {referencesList
            .slice(0, referencesList.length - 1)
            .map((reference, index) => {
              return (
                <button
                  onClick={() => setSlide([index, index + 2])}
                  className={`w-4 h-4 rounded-full bg-getbold-btn-pink pointer ${
                    index !== slide[0] && "opacity-20"
                  }`}
                ></button>
              );
            })}
        </div>
      )}

      {referencesList.length > 2 && (
        <div className="flex md:hidden items-center justify-center space-x-4">
          {referencesList
            .slice(0, referencesList.length)
            .map((reference, index) => {
              return (
                <button
                  onClick={() => setMobileSlide([index, index + 1])}
                  className={`w-4 h-4 rounded-full bg-getbold-btn-pink pointer ${
                    index !== mobileSlide[0] && "opacity-20"
                  }`}
                ></button>
              );
            })}
        </div>
      )}
    </div>
  );
};
