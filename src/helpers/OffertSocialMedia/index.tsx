import React, { ReactElement } from "react";
import { Button } from "../Button";
import { Link } from "gatsby";

interface Props {
  title?: string | ReactElement;
  firstPartParagraph?: string;
  secPartParagraph?: string;
  listTitle: string;
  listItems: string[];
  listEnd?: string;
  secParagraph?: string;
  bonusFirstPartParagraph: string;
  bonusSecPartParagraph: string;
  buttonText: string;
}

export const OffertSocialMedia: React.FC<Props> = ({
  title,
  firstPartParagraph,
  listTitle,
  listItems,
  listEnd,
  secParagraph,
  bonusFirstPartParagraph,
  bonusSecPartParagraph,
  buttonText,
}) => {
  return (
    <main className="p-2 lg:px-24 lg:pt-[68px] lg:pb-[200px] -z-10 flex flex-col lg:flex-row text-left min-h-[630px]">
      <div className="lg:max-w-[648px]">
        <h2 className="text-3xl lg:text-[40px] lg:leading-normal text-[#1F2957] font-bold lg:max-w-[628px]">
          {title}
        </h2>
        <p className="leading-normal pt-[40px] pb-[20px] text-white lg:text-getBoldBase">
          {firstPartParagraph}
        </p>
        <p className="font-bold text-white lg:text-getBoldBase">
          {listTitle}
        </p>
        <ul className="mb-[10px] list-disc pl-6 pt-4 text-white lg:text-getBoldBase">
          {listItems.map((item, index) => {
            return (
              <li key={index}>
                {item}
              </li>
            );
          })}
        </ul>
        <p className="mb-[10px] pl-8 pr-4 text-white">
          {listEnd}
        </p>
        <p className="lg:text-getBoldBase text-white font-bold">
          {secParagraph}
        </p>
      </div>
      <div className="bg-bubble md:h-[236px] md:w-[406px] p-[30px] mt-[40px] lg:mt-[190px] flex flex-col items-center justify-between">
        <h2 className="lg:text-[30px] lg:leading-normal text-[#1F2957]">
          {bonusFirstPartParagraph}
          <span className="font-bold">
            {bonusSecPartParagraph}
          </span>
        </h2>
        <div className="ml-auto">
          <Link to="/kontakt">
            <Button type="button" color="blue" isWFull={false} text={buttonText} textSize="text-[15px]" />
          </Link>
        </div>
      </div>
    </main>
  );
};
