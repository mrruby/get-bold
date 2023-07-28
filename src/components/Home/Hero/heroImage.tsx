import { motion } from "framer-motion";
import { StaticImage } from "gatsby-plugin-image";
import React, { useContext } from "react";
import { Parallax } from "react-scroll-parallax";
import { WidthContext } from "../../../utils/context/widthContext";

export const HomeHeroImage = () => {
  const width = useContext(WidthContext);
  const disableParallax: boolean = width <= 768;

  return (
    <Parallax
      speed={-20}
      disabled={disableParallax}
      className="w-full lg:w-3/5 flex items-center justify-center"
    >
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <StaticImage src="../../../../static/hero.png" alt="Hero" className="w-full h-auto" />
      </motion.div>
    </Parallax>
  );
};
