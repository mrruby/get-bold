import React from "react";
import { AboutAda } from "../../helpers/AboutAda";
import { FaLinkedinIn } from "react-icons/fa";

export const TeamAbout = () => {
  return (
    <div className="py-24 lg:py-[158px] lg:max-w-[1176px] flex flex-col items-center">
      <h3 className="text-2xl lg:text-5xl font-medium mb-16 lg:mb-[100px] px-8">
        Sprawdź <span className="font-bold">nasz zespół:</span>
      </h3>

      <div className="flex flex-col lg:flex-row max-w-[1500px] mb-16 lg:mb-[168px] px-8 relative">
        <div className="w-full lg:w-1/2 flex items-center justify-center mb-16 lg:mb-0">
          <AboutAda />
        </div>
        <div className="w-full lg:w-1/2">
          <h4 className="text-xl lg:text-2xl font-bold mb-[30px]">
            Adrianna Promis
          </h4>

          <p className="lg:text-lg font-bold mb-8">
            Po długim czasie pracy w agencjach marketingowych, stawiam na
            siebie.{" "}
          </p>

          <p className="lg:text-lg mb-8">
            Zawodowo zajmuję się{" "}
            <span className="font-semibold text-getbold-pink">
              strategicznym marketingiem
            </span>{" "}
            dla biznesu{" "}
            <span className="font-semibold text-getbold-pink">B2B</span> oraz{" "}
            <span className="font-semibold text-getbold-pink">B2C</span>: w
            swoim portfolio posiadam firmy z Polski oraz Europy Zachodniej.{" "}
          </p>

          <p className="lg:text-lg mb-8">
            Uwielbiam działać kreatywnie, planować i realizować: chcę, aby moi
            klienci byli dumni z wizerunku, który pomagam im tworzyć w świecie
            online.{" "}
          </p>

          <p className="lg:text-lg italic font-semibold">
            A ten dreszczyk emocji, gdy widzę wyniki prowadzonych kampanii?
            Bezcenny!
          </p>

          <div className="flex text-2xl items-center space-x-8 mt-[20px]">
            <a href="https://www.linkedin.com/in/adriannapromis/">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
