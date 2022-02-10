import React from "react";
import { useParallax } from "react-scroll-parallax";

export const SubLayoutElements = () => {
  const GraphElementParallax = useParallax<HTMLImageElement>({
    translateX: ["200px", "0px"],
  });

  const CardElementParallax = useParallax<HTMLImageElement>({
    translateX: ["200px", "0px"],
  });

  const CubeElementParallax = useParallax<HTMLImageElement>({
    translateX: ["200px", "0px"],
  });

  const LeftCloudElementParallax = useParallax<HTMLImageElement>({
    translateX: ["200px", "0px"],
  });

  const RightCloudElementParallax = useParallax<HTMLImageElement>({
    translateX: ["0px", "200px"],
  });

  const FlowerElementParallax = useParallax<HTMLImageElement>({
    translateX: ["0px", "200px"],
  });

  return (
    <>
      {/* cube img */}
      <img
        src="../../../../cube.svg"
        alt=""
        className="absolute top-[237px] left-[200px] md:left-[265px] -z-10 h-auto"
        ref={CubeElementParallax.ref}
      />

      {/* graph img */}
      <img
        src="../../../../graph.png"
        alt=""
        className="absolute top-[345px] left-[200px] md:left-[307px] -z-10 h-auto"
        ref={GraphElementParallax.ref}
      />

      {/* card img */}
      <img
        src="../../../../card.png"
        alt=""
        className="absolute top-[300px] left-2 md:4 -z-10 h-auto"
        ref={CardElementParallax.ref}
      />

      {/* left cloud */}
      <img
        src="../../../../footer-cloud-left.svg"
        alt="cloud2"
        className="absolute top-[550px] -left-8 md:-left-40 z-10 w-[250px] md:w-[400px] h-auto"
        ref={LeftCloudElementParallax.ref}
      />

      {/* right cloud */}
      <img
        src="../../../../footer-cloud-right.svg"
        alt="cloud"
        className="absolute top-[250px] -right-8 md:-right-30 z-10 w-[250px] md:w-[400px] h-auto"
        ref={RightCloudElementParallax.ref}
      />

      {/* flower */}
      <img
        src="../../../../flower.svg"
        alt="flower"
        className="absolute top-[400px] -right-6 md:-right-10 z-10"
        ref={FlowerElementParallax.ref}
      />

      {/* orange hex */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 251.035 231.05"
        className="absolute top-[1200px] -right-6 md:-right-12 w-[6rem] md:w-[10rem] z-20"
      >
        <path
          id="Path_461"
          data-name="Path 461"
          d="M854.313,208.052h-85.26L726.42,281.891l42.634,73.839h85.26l42.634-73.839Z"
          transform="matrix(0.966, 0.259, -0.259, 0.966, -585.549, -366.841)"
          fill="none"
          stroke="#ff9362"
          stroke-width="35"
        />
      </svg>

      {/* gray triangle */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-[2000px] -left-2 md:-left-4 w-[6rem] md:w-[10rem] -z-10"
        viewBox="0 0 190.402 164.897"
      >
        <path
          id="Path_460"
          data-name="Path 460"
          d="M1531.329,331.259h-64.892l32.443-56.2,32.449-56.2,32.449,56.2,32.443,56.2Z"
          transform="translate(-1436.128 -183.862)"
          fill="none"
          stroke="#f8e7e4"
          stroke-width="35"
        />
      </svg>
    </>
  );
};
