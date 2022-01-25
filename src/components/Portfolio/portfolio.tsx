import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export const PortfolioPortfolio = () => {
  return (
    <main className="p-8 flex flex-col">
      <div className="lg:max-w-[1176px] mb-[72px] mt-32 bg-white pt-6 lg:pt-[64px] px-8 lg:px-[123px] rounded-lg shadow-[0_-81px_50px_#0000000D] flex flex-col items-center">
        <p className="font-medium lg:text-base text-center mb-[62px]">
          Działamy w wielu branżach, bo lubimy różnorodne wyzwania. Każda
          kampania to dla nas mnóstwo emocji i współdzielonej z klientami
          radości.
        </p>

        <h3 className="text-3xl lg:text-5xl text-[#1F2957] font-bold mb-[48px] text-center">
          Zobacz, co zrobiliśmy dla:
        </h3>

        <div className="w-full mb-[125px]">
          <div className="flex flex-col lg:flex-row items-end relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[100px] h-[100px] rounded-full bg-white flex justify-center items-center border font-bold text-3xl">
              1
            </div>
            <div className="w-full lg:w-1/2 pb-12 lg:pb-6 pt-40 border-b lg:border-r lg:border-b-0 border-border border-opacity-[0.09] lg:pr-[115px] flex items-center justify-center">
              <StaticImage
                src="../../images/portfolio/rckik.png"
                alt="rckik"
                className="w-3/5 sm:w-2/5 lg:w-full"
              />
            </div>
            <div className="w-full lg:w-1/2 pb-6 pt-12 lg:pt-24 lg:pl-[115px] flex flex-col items-center lg:items-start justify-center">
              <h3 className="font-bold text-lg mb-8">RCKiK w Katowicach</h3>
              <div className="flex space-x-4">
                <StaticImage
                  src="../../images/portfolio/checkmark.svg"
                  alt="check"
                />
                <p className="font-bold">Social media</p>
              </div>
            </div>
          </div>
          <p className="text-center font-medium mt-8 lg:mt-24">
            Regionalne Centrum Krwiodawstwa i Krwiolecznictwa to organizacja,
            która bazuje wyłącznie na dobrej woli i bezinteresowności innych
            ludzi. W takim przypadku zadanie jest podwójnie trudne, jednak
            podjęliśmy rękawicę. <br />
            <br /> Poprowadziliśmy spójną komunikację z krwiodawcami oraz
            specjalną grupę na Facebooku, która scaliła wszystkich wokół tej
            szlachetnej idei. Opracowaliśmy również treści do mediów
            społecznościowych, przygotowując grafikę i teksty. Wszystko po to,
            by przypomnieć innym, że każdy może być naszym bliskim krewnym.
          </p>
        </div>

        <div className="w-full mb-[125px]">
          <div className="flex flex-col lg:flex-row items-end relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[100px] h-[100px] rounded-full bg-white flex justify-center items-center border font-bold text-3xl">
              2
            </div>
            <div className="w-full lg:w-1/2 pb-12 lg:pb-6 pt-40 border-b lg:border-r lg:border-b-0 border-border border-opacity-[0.09] lg:pr-[115px] flex items-center justify-center">
              <StaticImage
                src="../../images/portfolio/petsly.png"
                alt="rckik"
                className="w-3/5 sm:w-2/5 lg:w-3/5"
              />
            </div>
            <div className="w-full lg:w-1/2 pb-6 pt-12 lg:pt-24 lg:pl-[115px] flex flex-col items-center lg:items-start justify-center">
              <h3 className="font-bold text-lg mb-8">Petsly</h3>
              <div className="flex space-x-4">
                <StaticImage
                  src="../../images/portfolio/checkmark.svg"
                  alt="check"
                />
                <p className="font-bold">Social media</p>
              </div>
            </div>
          </div>
          <p className="text-center font-medium mt-8 lg:mt-24">
            Aplikacja, która pomaga odnaleźć się w świecie czworonożnych
            pacjentów i przypomina najważniejsze informacje na ich temat? A może
            narzędzie, które pomaga ogarnąć księgowość zoologicznego biznesu?
            Poznajcie Petsly. <br />
            <br /> W ramach naszej współpracy stworzyliśmy lekkie, nieco
            humorystyczne treści na Instagramie i zorganizowaliśmy konkurs na
            czterech łapach. Odzew odbiorców przekonał nas, że było warto!
          </p>
        </div>

        <div className="w-full mb-[125px]">
          <div className="flex flex-col lg:flex-row items-end relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[100px] h-[100px] rounded-full bg-white flex justify-center items-center border font-bold text-3xl">
              3
            </div>
            <div className="w-full lg:w-1/2 pb-12 lg:pb-6 pt-40 border-b lg:border-r lg:border-b-0 border-border border-opacity-[0.09] lg:pr-[115px] flex items-center justify-center">
              <StaticImage
                src="../../images/portfolio/lozkoholicy.png"
                alt="rckik"
                className="w-3/5 sm:w-2/5 lg:w-4/5"
              />
            </div>
            <div className="w-full lg:w-1/2 pb-6 pt-12 lg:pt-24 lg:pl-[115px] flex flex-col items-center lg:items-start justify-center">
              <h3 className="font-bold text-lg mb-8">Łóżkoholicy</h3>
              <div className="flex space-x-4">
                <StaticImage
                  src="../../images/portfolio/checkmark.svg"
                  alt="check"
                />
                <p className="font-bold">Social media</p>
              </div>
            </div>
          </div>
          <p className="text-center font-medium mt-8 lg:mt-24">
            Kto nigdy nie został pokonany przez siłę przyciągania łóżka, niech
            pierwszy rzuci kamieniem! Społeczność Łóżkoholików nie tylko nie
            wstydzi się swojego umiłowania snu, ale wręcz jest z tego dumna.{" "}
            <br />
            <br /> W przypadku sklepu z artykułami wystroju wnętrz postawiliśmy
            na zaangażowanie odbiorców treściami, które oderwą ich od
            codzienności. Łóżkoholicy, choć kochają spać, na widok naszego
            contentu nie ziewali z nudów.
          </p>
        </div>
      </div>
    </main>
  );
};
