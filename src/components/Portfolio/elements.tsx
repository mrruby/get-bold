import React from "react";
import { useParallax } from "react-scroll-parallax";

export const PortfolioElements = () => {
  const BallElementParallax = useParallax<HTMLImageElement>({
    translateX: ["0px", "200px"],
  });

  const PinkChartElementParallax = useParallax<HTMLImageElement>({
    translateX: ["0px", "200px"],
  });

  const BlueCubeElementParallax = useParallax<HTMLImageElement>({
    translateX: ["0px", "200px"],
  });

  return (
    <>
      {/* ball img */}
      <img
        src="../../../../pinkball.png"
        alt=""
        className="absolute top-[600px] right-2 md:right-[250px] -z-10 h-auto"
        ref={BallElementParallax.ref}
      />

      {/* pink chart img */}
      <img
        src="../../../../pinkchart.png"
        alt=""
        className="absolute top-[300px] right-2 md:right-[350px] -z-10 h-auto"
        ref={PinkChartElementParallax.ref}
      />

      {/* blue cube img */}
      <img
        src="../../../../bluecube.png"
        alt=""
        className="absolute top-[250px] right-2 md:right-[400px] -z-10 h-auto"
        ref={BlueCubeElementParallax.ref}
      />
    </>
  );
};
