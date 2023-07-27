import React, { ReactElement } from "react";

interface Props {
  title: string | ReactElement;
  firstParagraph: string;
  secParagraph?: string | ReactElement;
}

export const OffertContent: React.FC<Props> = ({
  title,
  firstParagraph,
  secParagraph,
}) => {
  return (
    <div className="relative flex flex-col items-start sm:px-8  pt-6 lg:pt-[50px]">
      <h2 className="text-xl lg:text-getBoldSubtitle lg:leading-normal lg:w-[1024px] text-[#1F2957] max-w-[541px]">
        {title}
      </h2>
      <div className="lg:text-getBoldBase leading-normal">
        <p className="py-[30px]">{firstParagraph}</p>
        <p>{secParagraph}</p>
      </div>
    </div>
  );
};
