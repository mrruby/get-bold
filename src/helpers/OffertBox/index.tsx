import { motion } from "framer-motion";
import React from "react";

interface Props {
  img: string;
  title: string;
  sectionId: string;
}

export const OffertBox: React.FC<Props> = ({
  img,
  title,
  sectionId,
}) => {

  const handleButtonClick = () => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleButtonClick}
      className={`p-4 flex flex-col items-center justify-center w-full z-40`}
    >
      <motion.div className="flex items-center justify-center h-[180px] w-[180px] px-4 py-4 bg-getbold-pink shadow-div rounded-item" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <img src={img} alt={`${title} - GetBold Agency`} className="lg w-auto" />
      </motion.div>
      <div className="bg-white h-[80px] w-1">
      </div>
      <div className="flex flex-col items-center justify-center text-white  bg-getbold-dark-pink hover:bg-getbold-pink hover:text-getbold-blue rounded-item w-full lg:min-w-[247px] lg:min-h-[55px]  shadow-div">
        <h3 className="text-getBoldBase">
          {title}
        </h3>
      </div>
    </button>
  );
};
