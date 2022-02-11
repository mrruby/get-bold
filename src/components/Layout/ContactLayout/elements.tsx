import React from "react";
import { useParallax } from "react-scroll-parallax";

export const ContactLayoutElements = () => {
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

  const CoinElementParallax = useParallax<HTMLImageElement>({
    translateX: ["0px", "200px"],
  });

  return (
    <>
      {/* coin img */}
      <img
        src="../../../../coin.png"
        alt=""
        className="absolute top-[372px] right-2 md:right-[400px] -z-10 h-auto"
        ref={CoinElementParallax.ref}
      />

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
    </>
  );
};
