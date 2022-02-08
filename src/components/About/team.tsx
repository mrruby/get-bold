import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export const TeamAbout = () => {
  return (
    <div className="py-24 lg:py-[158px] lg:max-w-[1176px] flex flex-col items-center">
      <h3 className="text-3xl lg:text-5xl font-medium mb-12 lg:mb-[100px] px-8">
        Sprawdź <span className="font-bold">nasz zespół:</span>
      </h3>

      <div className="flex flex-col lg:flex-row max-w-[1500px] mb-16 lg:mb-[168px] px-8 relative">
        <img
          src="../../../../about-light.png"
          alt=""
          className="absolute -top-10 left-16 z-30 w-[100px] h-auto"
        />
        <img
          src="../../../../about-note.svg"
          alt=""
          className="absolute top-36 -left-12 z-30 w-[200px] h-auto"
        />

        <div className="w-full lg:w-1/2 flex lg:justify-center mb-12 lg:mb-0">
          <div className="w-2/5 lg:w-[450px] lg:h-[450px] pt-1 pb-2 px-2 lg:p-0 bg-image-about-ada flex items-start justify-center">
            <StaticImage
              src="../../images/about-ada.png"
              alt="ada"
              className="lg:w-[427px] h-auto lg:mt-1"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <h4 className="text-xl lg:text-2xl font-bold mb-[30px]">
            Adriann Promis
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

          <div className="flex space-x-4 mt-[20px]">
            <a href="https://facebook.com">
              <StaticImage src="../../images/offert/fb.svg" alt="fb" />
            </a>
            <a href="https://facebook.com">
              <StaticImage src="../../images/offert/linkedin.svg" alt="fb" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
