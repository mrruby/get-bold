import { motion } from "framer-motion";
import { Link } from "gatsby";
import React from "react";

interface Props {
  img: string;
  title: string;
  tag: string;
  logo: string;
}

export const HomePortfolioItem: React.FC<Props> = ({
  img,
  title,
  tag,
  logo,
}) => {
  return (
    <Link to="/portfolio">
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className=" bg-white h-[24rem] max-w-[20rem] flex flex-col items-center drop-shadow-md rounded-2xl relative"
      >
        <div className="h-4/5 w-full relative bg-white rounded-t-2xl">
          <img
            src={logo}
            alt={title}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
          />
          <img
            src={img}
            alt={title}
            className="rounded-t-2xl h-full w-full object-cover opacity-20"
          />
        </div>

        <div className="absolute bottom-0 flex flex-col items-center justify-center w-full py-4 space-y-1 bg-white rounded-b-2xl">
          <p className="font-extrabold mb-2">{title}</p>
          <p className="text-getbold-pink font-medium">{tag}</p>
        </div>
      </motion.div>
    </Link>
  );
};
