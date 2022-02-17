import React from "react";

interface Props {
  img: string;
  imgWidth: string;
  title: string;
  text: string;
  isBigger: boolean;
}

export const OffertBox: React.FC<Props> = ({
  img,
  imgWidth,
  title,
  text,
  isBigger,
}) => {
  return (
    <div
      className={`bg-white shadow-md rounded-2xl p-8 md:p-12 flex flex-col items-center justify-center w-full z-40 ${
        !isBigger && "my-10"
      }`}
    >
      <img
        src={img}
        alt={`${title} - GetBold Agency`}
        className={`w-[${imgWidth}] h-auto mb-[30px]`}
      />
      <div className="w-full flex flex-col items-center">
        <h4 className="font-extrabold uppercase text-sm text-[#EF6278] mb-[18px]">
          {title}
        </h4>
        <p className="text-sm text-[#1F2957] font-medium text-center leading-relaxed">
          {text}
        </p>
      </div>
    </div>
  );
};
