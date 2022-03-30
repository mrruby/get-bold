import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
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
  {
    reference:
      "Polecamy współpracę z Adrianną. Jesteśmy zadowoleni z efektów przeprowadzonych kampanii oraz liczby pozyskanych adresów mailowych.",
    name: "Crystal Academy",
    company: "",
  },
  {
    reference:
      "Nasza współpraca z Get Bold przebiegła super. Polecam, jako właściciel sklepu internetowego 🙂",
    name: "Ewa Bartkowiak",
    company: "Lavelio",
  },
  {
    reference:
      "Dziewczyny stworzyły dla mnie kampanię promującą moje świąteczne rękodzieło i warsztaty kaligraficzne. Udało się spełnić zarówno moje założone cele, jak i budżet, jaki planowałam wydać na kampanię. Były niezwykle pomocne w każdej najmniejszej rzeczy. Wspomogły mnie w założeniu konta reklamowego, jak i w dobraniu grafik. Miejsca na warsztaty się rozeszły super szybko, a na moim koncie wzrosły zasięgi, ruch i sprzedaż. Miło było się czuć tak zaopiekowaną.",
    name: "Sylwia Dziadek",
    company: "Sylwia ma plan",
  },
];

export const HomeReferencesItems = () => (
  <Carousel autoPlay infiniteLoop showIndicators={false} showStatus={false}>
    {referencesList.map((reference, index) => (
      <Reference
        key={index}
        reference={reference.reference}
        name={reference.name}
        company={reference.company}
      />
    ))}
  </Carousel>
);
