import { Link } from "gatsby";
import React, { ReactElement } from "react";
import { Button } from "../Button";

interface Props {
  firtPartTitle: string;
  secPartTitle: string;
  thirdPartTitle?: string;
  firstParagraph: string;
  secParagraph?: string;
  secParagraphBold?: string;
  secParagraphSecPart?: string;
}

export const OffertContent: React.FC<Props> = ({
  firtPartTitle,
  secPartTitle,
  thirdPartTitle,
  firstParagraph,
  secParagraph,
  secParagraphBold,
  secParagraphSecPart,
}) => {
  return (
    <div className="relative flex flex-col items-start lg:pb-[10px] pt-[100px]">
      <h2 className="text-xl lg:text-[25px] lg:leading-normal lg:w-[1024px]  text-[#1F2957] max-w-[541px]">
        {firtPartTitle}
        <span className="font-bold">
          {secPartTitle}
        </span>
        {thirdPartTitle}
      </h2>
      <div className="lg: text-getBoldBase">
        <p className="py-[30px]">{firstParagraph}</p>
        <p>{secParagraph}
          <span className="font-bold">{secParagraphBold}</span>
          {secParagraphSecPart}
        </p>
      </div>
    </div>
  );
};
