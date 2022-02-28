import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { PortfolioProject } from "../../helpers/PortfolioProject";

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

        <PortfolioProject
          index={1}
          imgSrc="../../portfolio/petsly.png"
          title="Petsly"
          tasks={["Social media"]}
          text={
            <>
              Aplikacja, która pomaga odnaleźć się w świecie czworonożnych
              pacjentów i przypomina najważniejsze informacje na ich temat? A
              może narzędzie, które pomaga ogarnąć księgowość zoologicznego
              biznesu? Poznajcie Petsly. <br />
              <br /> W ramach naszej współpracy stworzyliśmy lekkie, nieco
              humorystyczne treści na Instagramie i zorganizowaliśmy konkurs na
              czterech łapach. Odzew odbiorców przekonał nas, że było warto:
              zasięgi na Facebooku (
              <span className="font-bold text-[#178E6E]">+364%</span>) i
              Instagramie (
              <span className="font-bold text-[#178E6E]">+8,4 tys.%</span>)
              poszybowały w górę!
            </>
          }
        />

        <PortfolioProject
          index={2}
          imgSrc="../../portfolio/petsly.png"
          title="Branża home&decor"
          tasks={["Social media"]}
          text={
            <>
              Kto nigdy nie został pokonany przez siłę przyciągania łóżka, niech
              pierwszy rzuci kamieniem! Są jednak wśród nas i tacy, którzy nie
              tylko nie wstydzą się swojego umiłowania snu, ale wręcz są z tego
              dumni. <br />
              <br /> W przypadku sklepu z artykułami wystroju wnętrz
              postawiliśmy na zaangażowanie odbiorców treściami, które oderwą
              ich od codzienności. I, choć zdecydowanie kochają oni spać, na
              widok naszego contentu nie ziewali z nudów. I tak oto organiczne
              treści, generowały wśród zainteresowanych produktami zaangażowanie
              na poziomie kilkudziesięciu komentarzy pod każdym wpisem!
            </>
          }
        />

        <PortfolioProject
          index={3}
          imgSrc="../../portfolio/petsly.png"
          title="Nicole Ciećkiewicz"
          tasks={["Facebook Ads"]}
          text={
            <>
              Nicole to trenerka i uczestniczka zawodów bikini fitness. Celem
              naszej współpracy było większe zaangażowanie jej odbiorców w
              mediach społecznościowych oraz pozyskanie nowych podopiecznych,
              którzy będą chętni na życiową metamorfozę. <br />
              <br /> Wykorzystaliśmy motywujące grafiki, a także wypowiedzi
              zadowolonych klientek, które już skorzystały z usług Nicoli. W
              końcu nie ma nic lepszego od rekomendacji innych! Efekty? Po 2
              miesiącach osiągnęliśmy wzrost zasięgu strony o ponad
              <span className="font-bold text-[#178E6E]">270%</span> na
              Facebooku i <span className="font-bold text-[#178E6E]">1606</span>{" "}
              nowych obserwatorów na Instagramie.
            </>
          }
        />

        <PortfolioProject
          index={4}
          imgSrc="../../portfolio/petsly.png"
          title="Kurs dla nauczycieli"
          tasks={["Facebook Ads"]}
          text={
            <>
              Zadanie było jedno: zwiększyć sprzedaż specjalistycznego kursu.
              Podstawą naszych działań była kampania reklamowa na Facebooku,
              oparta na wcześniejszych testach. <br />
              <br /> Jako, że nauczyciele to grupa, która zdecydowanie ceni
              sobie wiedzę i zweryfikowane informacje, naszą aktywność
              rozszerzyliśmy o edukacyjne webinary, stanowiące wstęp do kursu.
              Jak to się skończyło? Strona nie podołała nowym zapisom (!), a sam
              wynik zdecydowanie przekroczył nasze oczekiwania. Dodanie produktu
              do koszyka kosztowało nas zaledwie 17 groszy, a zakup - 5 złotych!
              Tym samym każdą wydaną złotówkę pomnożyliśmy pięciokrotnie.
            </>
          }
        />

        <PortfolioProject
          index={5}
          imgSrc="../../portfolio/petsly.png"
          title="Instalacja drewnianej podłogi"
          tasks={["Facebook Ads"]}
          text={
            <>
              Nie czarujmy się: drewniana podłoga za kilkanaście tysięcy złotych
              nie jest czymś, bez czego nie można się obejść. Tymczasem naszym
              zadaniem było zwiększenie sprzedaży usługi instalacji takiej
              podłogi – w dodatku dla firmy bez własnej www. <br />
              <br /> Działania rozpoczęliśmy od testów różnych kreacji, dzięki
              którym na dzień dobry obniżyliśmy koszt jednego kontaktu z 25 do
              10 złotych. Kampanię wsparły też regularne, estetyczne publikacje
              na Facebooku. Nie mogło być inaczej: właściciel musiał się
              rozejrzeć za drugą ekipą pracowników.
            </>
          }
        />
      </div>
    </main>
  );
};
