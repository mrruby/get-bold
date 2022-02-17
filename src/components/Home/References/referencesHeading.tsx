import React from "react";
import { Parallax } from "react-scroll-parallax";

export const HomeReferencesHeading = () => {
  return (
    <Parallax
      speed={10}
      className="flex flex-col items-center lg:w-[71rem] lg:mb-14"
    >
      <h2 className="tracking-[4px] text-xl font-bebas text-getbold-pink mb-6">
        Referencje
      </h2>
      <h3 className="text-3xl lg:text-4xl lg:leading-normal font-medium mb-12 text-center">
        Co mówią o nas{" "}
        <span className="font-bold relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -z-10 bottom-0 left-0"
            viewBox="0 0 185.328 5.75"
          >
            <path
              id="Path_975"
              data-name="Path 975"
              d="M274.128,389.83c14.562-.941,29.256-.326,43.846-.615,15.016-.3,30.04-.121,45.055-.022q22.648.15,45.289.672c15.782.373,31.826-1.39,47.516.8,2.909.4,4.164-4.066,1.227-4.474-14.944-2.083-29.9-.432-44.905-.864-15.748-.453-31.5-.414-47.256-.34-15.642.075-31.289.112-46.926.571-14.752.431-29.43.486-44.041,2.824-.819.131-.625,1.5.195,1.451Z"
              transform="translate(-273.407 -384.938)"
              fill="#ffa3b1"
            />
          </svg>
          klienci?
        </span>
      </h3>
    </Parallax>
  );
};
