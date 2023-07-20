import { Link } from "gatsby";
import React from "react";
import { Button } from "../Button";

interface Props {
  img?: string;
  title: string;
  listItems: string[];
  firstPartshortText: string;
  secPartshortText: string;
  buttonText: string;
}

export const OffertContentList: React.FC<Props> = ({
  img,
  title,
  listItems,
  firstPartshortText,
  secPartshortText,
  buttonText,
}) => {
  return (
    <div className="flex flex-col items-center text-left lg:min-w-[536px] shadow-div rounded-div lg:min-h-[452px] bg-white relative lg:text-getBoldBase leading-normal px-8">
      {img && (
        <div className="absolute top-[-90px]">
          <img
            src={img}
            alt={`${title} | GetBold Agency`}
            className="w-[100px] lg:w-[150px] h-auto"
          />
        </div>
      )}
      <div className="items-left">
        <h3 className="font-bold mb-[24px] pt-[62px]">{title}</h3>
        <ul className="space-y-2 mb-[30px] list-disc pl-8 pr-4">
          {listItems.map((item, index) => {
            return (
              <li key={index} className="my-[2px]">
                {item}
              </li>
            );
          })}
        </ul>
        <p className="mb-[50px] m-auto">{firstPartshortText}
          <span className="font-bold">{secPartshortText}</span>
        </p>
      </div>
      <div className="absolute bottom-[-20px]">
        <Link to="/kontakt">
          <Button type="button" color="pink" isWFull={false} text={buttonText} />
        </Link>
      </div>
    </div>
  );
};
