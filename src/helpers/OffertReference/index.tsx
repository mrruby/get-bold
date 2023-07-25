import React from "react";

interface Props {
  reference: string;
  name: string;
  company: string;
}

export const OffertReference: React.FC<Props> = ({ reference, name, company }) => {
  return (
    <div className="relative m-auto lg:text-getBoldBase flex flex-col items-center justify-center h-full leading-normal max-w-[1180px]">
      <div className="mb-3 bg-getbold-pink-ref pt-[38px] pb-4 px-6 max-w-[280px] md:max-w-[800px] lg:max-w-[1080px] rounded-div" >
        <p className="text-white">
          "{reference}"
        </p>
      </div>
      <p className="pr-[2px]">
        <span className="font-bold my-[24px]">{name}</span>
        <br />
        {company}
      </p>
    </div>
  );
};
