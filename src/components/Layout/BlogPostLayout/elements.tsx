import React from "react";
import { useParallax } from "react-scroll-parallax";

export const BlogPostLayoutElements = () => {
  const LeftCloudElementParallax = useParallax<HTMLImageElement>({
    translateX: ["200px", "0px"],
  });

  const RightCloudElementParallax = useParallax<HTMLImageElement>({
    translateX: ["0px", "200px"],
  });

  return (
    <>
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
    </>
  );
};
