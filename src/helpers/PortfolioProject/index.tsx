import { motion } from "framer-motion";
import React, { ReactElement } from "react";

interface Props {
  imgSrc: string;
  title: string;
  tasks: string[];
  text: ReactElement;
  index: number;
}

export const PortfolioProject: React.FC<Props> = ({
  imgSrc,
  title,
  tasks,
  text,
  index,
}) => {
  return (
    <div className="w-full mb-[125px] flex flex-col items-center">
      <div className="flex flex-col lg:flex-row items-end relative w-full">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[100px] h-[100px] rounded-full bg-white flex justify-center items-center border font-bold text-3xl">
          {index}
        </div>
        <div className="w-full lg:w-1/2 pb-12 lg:pb-6 pt-40 border-b lg:border-r lg:border-b-0 border-border border-opacity-[0.09] lg:pr-[115px] flex items-center justify-end">
          <motion.img
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            src={imgSrc}
            alt={title}
            className="w-3/5 sm:w-2/5"
          />
        </div>
        <div className="w-full lg:w-1/2 pb-6 pt-12 lg:pt-24 lg:pl-[115px] flex flex-col items-center lg:items-start justify-center">
          <h3 className="font-bold text-lg mb-8">{title}</h3>
          <div>
            {tasks.map((task, index) => {
              return (
                <div key={index} className="flex space-x-4 mb-4">
                  <img src="../../checkmark.svg" alt="GetBold" />
                  <p className="font-bold w-full flex-nowrap">{task}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <p className="text-center lg:text-lg font-medium mt-8 lg:mt-24 ">
        {text}
      </p>
    </div>
  );
};
