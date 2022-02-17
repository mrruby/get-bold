import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Parallax } from "react-scroll-parallax";

export const HomePortfolioHeading = () => {
  return (
    <Parallax
      speed={10}
      className="flex flex-col items-center lg:w-[71rem] mb-14"
    >
      <h2 className="tracking-[4px] text-xl font-bebas text-getbold-pink mb-6">
        Portfolio
      </h2>
      <h3 className="text-3xl lg:text-4xl lg:leading-normal font-medium mb-8 text-center">
        Sprawdź, jakie{" "}
        <span className="font-bold text-getbold-pink relative">
          projekty{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -z-10 -bottom-2 left-0"
            viewBox="0 0 276.064 15.379"
          >
            <path
              id="Path_2257"
              data-name="Path 2257"
              d="M274.481,389.83c21.689-.941,43.575-.326,65.305-.615,22.364-.3,44.742-.121,67.106-.022q33.733.15,67.454.672c23.506.373,47.4-1.39,70.771.8,4.332.4,6.2-4.066,1.828-4.474-22.258-2.083-44.535-.432-66.883-.864-23.456-.453-46.922-.414-70.384-.34-23.3.075-46.6.112-69.892.571-21.972.431-43.834.486-65.6,2.824-1.22.131-.93,1.5.29,1.451Z"
              transform="matrix(0.999, -0.035, 0.035, 0.999, -286.675, -365.529)"
              fill="#f8e7e4"
            />
          </svg>
        </span>{" "}
        mamy <br /> już na swoim koncie!
      </h3>
    </Parallax>
  );
};
