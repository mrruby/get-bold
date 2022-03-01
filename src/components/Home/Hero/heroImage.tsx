import { motion } from "framer-motion";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export const HomeHeroImage = () => {
  return (
    <div className="w-full lg:w-3/5 flex items-center justify-center">
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <StaticImage
          src="../../../images/hero.png"
          alt="Hero"
          className="w-full h-auto"
        />
      </motion.div>
    </div>
  );
};
