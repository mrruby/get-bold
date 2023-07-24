import React, { ReactElement } from "react";
import { Button } from "../Button";
import { Link } from "gatsby";

interface Props {
  title?: string | ReactElement;
  firstParagraph?: string | ReactElement;
  listTitle: string;
  listItems: string[];
  secParagraph?: string;
  buttonText: string;
}

export const OffertConsultations: React.FC<Props> = ({
  title,
  listTitle,
  listItems,
  firstParagraph,
  secParagraph,
  buttonText,
}) => {
  return (
    <main className="lg:pl-24 lg:pt-[180px] lg:pb-[330px] -z-10 flex flex-col text-left max-w-[1160px]">
      <h2 className="text-3xl lg:text-[40px] lg:leading-normal text-[#1F2957] font-bold">
        {title}
      </h2>
      <p className="text-[20px] my-[20px] leading-normal text-[#1F2957]">{firstParagraph}</p>
      <div className="text-[20px] leading-normal font-medium text-[#1F2957] pt-[10px]">
        <span className="font-bold">
          {listTitle}
        </span>
        <ul className="mb-[10px] list-disc pl-8 pr-4">
          {listItems.map((item, index) => {
            return (
              <li key={index}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
      <p className="text-[20px] leading-normal mt-[20px] mb-[30px] text-[#1F2957] font-bold">{secParagraph}
      </p>
      <Link to="/kontakt">
        <Button type="button" color="pink" isWFull={false} text={buttonText} />
      </Link>
    </main>
  );
};
