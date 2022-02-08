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

        <div className="w-full mb-[125px] flex flex-col items-center">
          <div className="flex flex-col lg:flex-row items-end relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[100px] h-[100px] rounded-full bg-white flex justify-center items-center border font-bold text-3xl">
              1
            </div>
            <div className="w-full lg:w-1/2 pb-12 lg:pb-6 pt-40 border-b lg:border-r lg:border-b-0 border-border border-opacity-[0.09] lg:pr-[115px] flex items-center justify-center">
              <StaticImage
                src="../../images/portfolio/petsly.png"
                alt="petsly"
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
          <p className="text-center lg:text-lg font-medium mt-8 lg:mt-24 ">
            Aplikacja, która pomaga odnaleźć się w świecie czworonożnych
            pacjentów i przypomina najważniejsze informacje na ich temat? A może
            narzędzie, które pomaga ogarnąć księgowość zoologicznego biznesu?
            Poznajcie Petsly. <br />
            <br /> W ramach naszej współpracy stworzyliśmy lekkie, nieco
            humorystyczne treści na Instagramie i zorganizowaliśmy konkurs na
            czterech łapach. Odzew odbiorców przekonał nas, że było warto:
            zasięgi na Facebooku (
            <span className="font-bold text-[#178E6E]">+364%</span>) i
            Instagramie (
            <span className="font-bold text-[#178E6E]">+8,4 tys.%</span>)
            poszybowały w górę!
          </p>
        </div>

        <div className="w-full mb-[125px] flex flex-col items-center">
          <div className="flex flex-col lg:flex-row items-end relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[100px] h-[100px] rounded-full bg-white flex justify-center items-center border font-bold text-3xl">
              2
            </div>
            <div className="w-full lg:w-1/2 pb-12 lg:pb-6 pt-40 border-b lg:border-r lg:border-b-0 border-border border-opacity-[0.09] lg:pr-[115px] flex items-center justify-center">
              <StaticImage
                src="../../images/portfolio/petsly.png"
                alt="petsly"
                className="w-3/5 sm:w-2/5 lg:w-3/5"
              />
            </div>
            <div className="w-full lg:w-1/2 pb-6 pt-12 lg:pt-24 lg:pl-[115px] flex flex-col items-center lg:items-start justify-center">
              <h3 className="font-bold text-lg mb-8">Branża home&decor</h3>
              <div className="flex space-x-4">
                <StaticImage
                  src="../../images/portfolio/checkmark.svg"
                  alt="check"
                />
                <p className="font-bold">Social media</p>
              </div>
            </div>
          </div>
          <p className="text-center lg:text-lg font-medium mt-8 lg:mt-24 ">
            Kto nigdy nie został pokonany przez siłę przyciągania łóżka, niech
            pierwszy rzuci kamieniem! Są jednak wśród nas i tacy, którzy nie
            tylko nie wstydzą się swojego umiłowania snu, ale wręcz są z tego
            dumni. <br />
            <br /> W przypadku sklepu z artykułami wystroju wnętrz postawiliśmy
            na zaangażowanie odbiorców treściami, które oderwą ich od
            codzienności. I, choć zdecydowanie kochają oni spać, na widok
            naszego contentu nie ziewali z nudów. I tak oto organiczne treści,
            generowały wśród zainteresowanych produktami zaangażowanie na
            poziomie kilkudziesięciu komentarzy pod każdym wpisem!
          </p>
        </div>

        <div className="w-full mb-[125px] flex flex-col items-center">
          <div className="flex flex-col lg:flex-row items-end relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[100px] h-[100px] rounded-full bg-white flex justify-center items-center border font-bold text-3xl">
              3
            </div>
            <div className="w-full lg:w-1/2 pb-12 lg:pb-6 pt-40 border-b lg:border-r lg:border-b-0 border-border border-opacity-[0.09] lg:pr-[115px] flex items-center justify-center">
              <StaticImage
                src="../../images/portfolio/petsly.png"
                alt="petsly"
                className="w-3/5 sm:w-2/5 lg:w-3/5"
              />
            </div>
            <div className="w-full lg:w-1/2 pb-6 pt-12 lg:pt-24 lg:pl-[115px] flex flex-col items-center lg:items-start justify-center">
              <h3 className="font-bold text-lg mb-8">Nicole Ciećkiewicz</h3>
              <div className="flex space-x-4">
                <StaticImage
                  src="../../images/portfolio/checkmark.svg"
                  alt="check"
                />
                <p className="font-bold">Facebook Ads</p>
              </div>
            </div>
          </div>
          <p className="text-center lg:text-lg font-medium mt-8 lg:mt-24 ">
            Nicole to trenerka i uczestniczka zawodów bikini fitness. Celem
            naszej współpracy było większe zaangażowanie jej odbiorców w mediach
            społecznościowych oraz pozyskanie nowych podopiecznych, którzy będą
            chętni na życiową metamorfozę. <br />
            <br /> Wykorzystaliśmy motywujące grafiki, a także wypowiedzi
            zadowolonych klientek, które już skorzystały z usług Nicoli. W końcu
            nie ma nic lepszego od rekomendacji innych! Efekty? Po 2 miesiącach
            osiągnęliśmy wzrost zasięgu strony o ponad
            <span className="font-bold text-[#178E6E]">270%</span> na Facebooku
            i <span className="font-bold text-[#178E6E]">1606</span> nowych
            obserwatorów na Instagramie.
          </p>
        </div>

        <div className="w-full mb-[125px] flex flex-col items-center">
          <div className="flex flex-col lg:flex-row items-end relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[100px] h-[100px] rounded-full bg-white flex justify-center items-center border font-bold text-3xl">
              4
            </div>
            <div className="w-full lg:w-1/2 pb-12 lg:pb-6 pt-40 border-b lg:border-r lg:border-b-0 border-border border-opacity-[0.09] lg:pr-[115px] flex items-center justify-center">
              <StaticImage
                src="../../images/portfolio/petsly.png"
                alt="petsly"
                className="w-3/5 sm:w-2/5 lg:w-3/5"
              />
            </div>
            <div className="w-full lg:w-1/2 pb-6 pt-12 lg:pt-24 lg:pl-[115px] flex flex-col items-center lg:items-start justify-center">
              <h3 className="font-bold text-lg mb-8">
                Instalacja drewnianej podłogi
              </h3>
              <div className="flex space-x-4">
                <StaticImage
                  src="../../images/portfolio/checkmark.svg"
                  alt="check"
                />
                <p className="font-bold">Facebook Ads</p>
              </div>
            </div>
          </div>
          <p className="text-center lg:text-lg font-medium mt-8 lg:mt-24 ">
            Nie czarujmy się: drewniana podłoga za kilkanaście tysięcy złotych
            nie jest czymś, bez czego nie można się obejść. Tymczasem naszym
            zadaniem było zwiększenie sprzedaży usługi instalacji takiej podłogi
            – w dodatku dla firmy bez własnej www. <br />
            <br /> Działania rozpoczęliśmy od testów różnych kreacji, dzięki
            którym na dzień dobry obniżyliśmy koszt jednego kontaktu z 25 do 10
            złotych. Kampanię wsparły też regularne, estetyczne publikacje na
            Facebooku. Nie mogło być inaczej: właściciel musiał się rozejrzeć za
            drugą ekipą pracowników.
          </p>
        </div>
      </div>
    </main>
  );
};
