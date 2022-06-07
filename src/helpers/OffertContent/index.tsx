import { Link } from "gatsby";
import React, { ReactElement } from "react";
import { Button } from "../Button";

interface Props {
  img: string;
  title: string;
  shortText: ReactElement;
  subTitle: string;
  listItems: string[];
  buttonText: string;
}

export const OffertContent: React.FC<Props> = ({
  img,
  title,
  shortText,
  subTitle,
  listItems,
  buttonText,
}) => {
  return (
    <div className="relative flex flex-col items-start lg:px-[130px] lg:border-l lg:border-getbold-border lg:border-opacity-[0.09] pb-[100px]">
      <div className="mb-12 lg:mb-0 lg:absolute lg:-top-[68px] lg:-left-[68px] shadow-lg w-[136px] h-[136px] rounded-full flex items-center justify-center bg-white">
        <img
          src={img}
          alt={`${title} | GetBold Agency`}
          className="w-[60px] h-auto"
        />
      </div>
      <h3 className="text-2xl font-bold mb-[40px]">{title}</h3>
      <p className="font-medium text-sm leading-loose mb-[35px]">{shortText}</p>
      <h4 className="text-lg font-bold mb-[20px]">{subTitle}</h4>
      <ul className="text-sm space-y-2 mb-[40px] list-disc text-getbold-pink">
        {listItems.map((item, index) => {
          return (
            <li key={index}>
              <span
                className={`text-getbold-blue ${
                  index === listItems.length - 2 && "font-bold"
                }`}
              >
                {item}
              </span>
            </li>
          );
        })}
      </ul>
      <Link to="/kontakt">
        <Button type="button" color="pink" isWFull={false} text={buttonText} />
      </Link>
    </div>
  );
};
