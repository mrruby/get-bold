import { motion } from "framer-motion";
import { Link } from "gatsby";
import React, { ReactElement } from "react";
import { StaticImage } from "gatsby-plugin-image";

interface Props {
  img: string;
  imgAlt: string;
  title: ReactElement;
}

export const HomeOffertBox: React.FC<Props> = ({ img, imgAlt, title }) => {
  return (
    <Link to="/oferta">
      <div className="flex flex-col items-center justify-center">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-full h-full flex items-center justify-center"
        >
          <img src={img} alt={imgAlt} className="w-[4.4375rem] h-auto" />
        </motion.div>
        <p className="font-bold mt-7 text-center">{title}</p>
      </div>
    </Link>
  );
};
