import React from "react";
import { useParallax } from "react-scroll-parallax";

export const AboutElements = () => {
  const ChatElementParallax = useParallax<HTMLImageElement>({
    translateX: ["0px", "200px"],
  });

  return (
    <>
      {/* chat img */}
      <img
        src="../../../../chat.png"
        alt=""
        className="absolute top-[400px] right-2 md:right-[400px] -z-10 h-auto"
        ref={ChatElementParallax.ref}
      />
    </>
  );
};
