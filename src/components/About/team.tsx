import React from "react";
import { TeamMember } from "./teamMember";
import { StaticImage } from "gatsby-plugin-image";

export const TeamAbout = () => {
  return (
    <div className="py-24 lg:py-[158px] lg:max-w-[1176px] flex flex-col items-center">
      <h3 className="text-2xl lg:text-5xl font-medium mb-16 lg:mb-[100px] px-8">
        Sprawdź <span className="font-bold">nasz zespół:</span>
      </h3>
      <TeamMember
        body={
          <>
            <p className="lg:text-lg mb-8">
              Zawodowo zajmuję się{" "}
              <span className="font-semibold text-getbold-pink">strategicznym marketingiem</span>{" "}
              dla biznesu <span className="font-semibold text-getbold-pink">B2B</span> oraz{" "}
              <span className="font-semibold text-getbold-pink">B2C</span>: w swoim portfolio
              posiadam firmy z Polski oraz Europy Zachodniej.{" "}
            </p>

            <p className="lg:text-lg mb-8">
              Uwielbiam działać kreatywnie, planować i realizować: chcę, aby moi klienci byli dumni
              z wizerunku, który pomagam im tworzyć w świecie online.{" "}
            </p>
          </>
        }
        title="Po długim czasie pracy w agencjach marketingowych, stawiam na siebie."
        photoLink="../../ada.webp"
        name="Adrianna Promis"
        ps="A ten dreszczyk emocji, gdy widzę wyniki prowadzonych kampanii?
        Bezcenny!"
        linkedin="https://www.linkedin.com/in/adriannapromis/"
      />
      <TeamMember
        isLeft={false}
        body={
          <>
            <p className="lg:text-lg mb-8">
              Lubię, gdy dużo się dzieje — projekty, zadania i widoczny progres w pracy inspirują
              mnie do działania. Zakończone taski w Asanie? Oznaczają i moje, i Twoje zadowolenie.
              Moje, bo widzę, że idziemy do przodu. Twoje, bo to praca nad Twoją marką!
            </p>

            <p className="lg:text-lg mb-8">
              A po pracy… szkolenia z projektowania & komunikacji, bo łączenie kropek to coś, co
              lubię robić na co dzień. Design Thinking? Poznając go, nie spodziewałam się, że
              przydaje się dosłownie wszędzie!
            </p>
          </>
        }
        title="Jestem socjolożką i działaczką społeczną, a jakiś czas temu odnalazłam się w marketingu."
        photoLink="../../justyna.webp"
        name="Justyna Wysowska"
        ps="W Get Bold piszę & tworzę z uśmiechem. Podobno pozytywną energię widać w tym, co wychodzi spod mojej klawiatury. Chcesz się przekonać? 😄"
        linkedin="https://www.linkedin.com/in/justyna-wysowska/"
      />
      <TeamMember
        body={
          <>
            <p className="lg:text-lg mb-8">
              Swoją przygodę z marketingiem rozpoczęłam od przygody z grafiką. Na studiach
              graficznych nauczyłam się podejścia projektowego, miałam też pierwszą styczność z
              marketingiem i projektowaniem komunikacji.
            </p>

            <p className="lg:text-lg mb-8">
              Później już jakoś samo się potoczyło, dołączyłam do koła naukowego, gdzie tworzyłam
              grafiki, a później przejęłam stanowisko Lidera Marketingu - tutaj zaczęła się
              prawdziwa zabawa.
            </p>
          </>
        }
        title="Z wykształcenia jestem magistrem biotechnologii farmaceutycznej, a z zamiłowania lubię tworzyć komunikację dla marek."
        photoLink="../../wiktoria.webp"
        name="Wiktoria Budziar"
        ps="Tak dotarłam do dnia dzisiejszego - działam w marketingu, odnalazłam branżę, która sprawia mi największą frajdę, a w międzyczasie projektuję i działam kreatywnie. W GetBold tworzę grafiki reklamowe oraz tworzę social media klientów."
        linkedin="https://www.linkedin.com/in/wiktoria-budziar-7bb4811a0/"
      />
      <TeamMember
        isLeft={false}
        body={
          <p className="lg:text-lg mb-8">
            W Get Bold! zajmuję się również kampaniami reklamowymi oraz różnymi tak zwanymi
            „zadaniami specjalnymi”.
          </p>
        }
        title="Jestem fotografką, twórczynią wideo i innych, kreatywnych treści."
        photoLink="../../michalina.webp"
        name="Michalina Kuczyńska"
        ps="Potrzebujesz zdjęć produktowych? Spędzę cały dzień z aparatem
        w dłoni, aby pokazać Twoje produkty w jak najlepszym świetle. Podobnie z relsami czy
        filmami promocyjnymi — to moja druga wielka miłość."
        linkedin="https://www.linkedin.com/in/michalina-kuczy%C5%84ska-69a09419a/"
      />
    </div>
  );
};
