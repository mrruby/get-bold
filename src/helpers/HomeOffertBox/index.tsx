import React, { ReactElement } from "react";

interface Props {
  img: string;
  imgAlt: string;
  title: ReactElement;
}

export const HomeOffertBox: React.FC<Props> = ({ img, imgAlt, title }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full h-full flex items-center justify-center">
        <img src={img} alt={imgAlt} className="w-[4.4375rem] h-auto" />
      </div>
      <p className="font-bold mt-7 text-center">{title}</p>
    </div>
  );
};
