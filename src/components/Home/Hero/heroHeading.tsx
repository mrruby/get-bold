import { Link } from "gatsby";
import React, { useContext } from "react";
import { Parallax } from "react-scroll-parallax";
import { Button } from "../../../helpers/Button";
import { WidthContext } from "../../../utils/context/widthContext";

export const HomeHeroHeading = () => {
  const width = useContext(WidthContext);
  const disableParallax: boolean = width <= 768;

  return (
    <Parallax
      speed={-20}
      disabled={disableParallax}
      className="w-full mb-10 lg:m-0 lg:w-2/5 relative"
    >
      <h3 className="text-getbold-btn-pink font-bebas text-2xl mb-4 lg:mb-8">
        Getbold.Agency
      </h3>
      <h1 className="text-4xl lg:text-6xl text-[#1F2957] leading-none font-extrabold mb-3 lg:mb-8">
        Jesteśmy Get Bold.
      </h1>
      <h2 className="text-3xl lg:text-4xl font-medium leading-tight mb-8 lg:mb-8">
        Z nami Twój biznes może więcej.{" "}
        <span className="relative whitespace-pre">
          <svg
            className="absolute -z-10 -top-6 md:-top-4 -left-2 w-full"
            xmlns="http://www.w3.org/2000/svg"
            width="263.685"
            height="86.189"
            viewBox="0 0 263.685 86.189"
          >
            <path
              id="Path_357"
              data-name="Path 357"
              d="M350.055,17.928c-35.874,2.506-71.749,9.4-100.237,23.817-15.827,8.148-34.819,22.564-18.992,35.1,8.442,7.521,24.269,10.656,39.04,11.909,22.157,3.134,46.425,2.507,69.638.627A502.3,502.3,0,0,0,416.527,78.1c18.992-4.388,39.038-10.029,53.811-18.8,8.44-5.015,15.827-12.536,8.44-19.43-7.386-7.521-25.323-10.655-39.04-12.535C400.7,21.689,355.33,22.942,316.29,28.583c-21.1,3.134-40.094,7.521-52.755,18.176"
              transform="matrix(0.999, 0.035, -0.035, 0.999, -219.351, -23.557)"
              fill="none"
              stroke="#ffa3b1"
              stroke-linecap="round"
              stroke-linejoin="bevel"
              stroke-width="4"
            />
          </svg>
          Po prostu.
        </span>
      </h2>
      <Link to="/portfolio">
        <Button
          type="button"
          text="Sprawdź, co potrafimy!"
          isWFull={false}
          color="pink"
        />
      </Link>
    </Parallax>
  );
};
