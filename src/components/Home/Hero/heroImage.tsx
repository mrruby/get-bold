import { motion } from "framer-motion";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Parallax } from "react-scroll-parallax";

export const HomeHeroImage = () => {
  return (
    <Parallax
      speed={10}
      className="w-full lg:w-3/5 flex items-center justify-center"
    >
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <StaticImage
          src="../../../images/hero.png"
          alt="Hero"
          className="w-full h-auto"
        />
      </motion.div>
    </Parallax>
  );
};
