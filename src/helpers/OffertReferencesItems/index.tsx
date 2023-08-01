import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { OffertReference } from "../OffertReference";

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
      "Dziewczyny stworzyły dla mnie kampanię promującą moje świąteczne rękodzieło i warsztaty kaligraficzne. Udało się spełnić zarówno moje założone cele, jak i budżet, jaki planowałam wydać na kampanię. Były niezwykle pomocne w każdej najmniejszej rzeczy. Wspomogły mnie w założeniu konta reklamowego, jak i w dobraniu grafik. Miejsca na warsztaty się rozeszły super szybko, a na moim koncie wzrosły zasięgi, ruch i sprzedaż. Miło było się czuć tak zaopiekowaną.",
    name: "Sylwia Dziadek",
    company: "Dylwia ma plan",
  },
  {
    reference:
      "Bardzo dobrze prowadzone i jakościowe kampanie, które pomogły nam dotrzeć do dużej grupy nowych odbiorców. Koncepcja slow marketingu bardzo się wpasowała w nasze potrzeby. Polecamy z całego serca współpracę z Adą.",
    name: "Stan Skupienia",
    company: "",
  },
  {
    reference:
      "Czuć, że Ada przepracowała już masę kampanii. Jesteśmy bardzo zadowolone, bo ma podobne do nas podejście do marketingu — w rytmie slow. Bez nagabywania, sztucznych promocji, na rzecz poznania marki i przedstawienia jej wartości.",
    name: "Ziołowa Wyspa",
    company: "",
  },
];

const CustomLeftArrow = ({ onClick, ...rest }: any) => {
  return (
    <div
      className={`absolute top-0 md:top-[-60px] bottom-0 left-0 flex justify-center items-center p-1 opacity-70 hover:opacity-100 cursor-pointer z-20`}
      onClick={onClick}
    >
      <img
        src="../../../../left-arrow.svg"
        alt="Left Arrow - GetBold Agency"
      />
    </div>
  );
}

const CustomRightArrow = ({ onClick, ...rest }: any) => {
  return (
    <div
      className={`absolute top-0 md:top-[-60px] bottom-0 right-0 flex justify-center items-center p-1 opacity-70 hover:opacity-100 cursor-pointer z-20`}
      onClick={onClick}
    >
      <img
        src="../../../../right-arrow.svg"
        alt="Right Arrow - GetBold Agency"
      />
    </div>
  );
}

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export const OffertReferencesItems = () => {
  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      customLeftArrow={<CustomLeftArrow />}
      customRightArrow={<CustomRightArrow />}
      ssr={true}
    >
      {referencesList.map((reference, index) => (
        <OffertReference
          key={index}
          reference={reference.reference}
          name={reference.name}
          company={reference.company}
        />
      ))}
    </Carousel>
  );
};
