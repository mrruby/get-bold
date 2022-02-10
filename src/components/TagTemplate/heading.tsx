import React from "react";

interface Props {
  tag: string;
}

export const HeadingTagTemplate: React.FC<Props> = ({ tag }) => {
  return (
    <main className="p-8 -mt-40 pt-64 -z-10 flex flex-col items-center text-center">
      <h2 className="text-xl font-bebas text-[#EF6278] mb-[22px] lg:w-[1024px]">
        TAG
      </h2>
      <h3 className="text-3xl lg:text-4xl lg:w-[1024px] text-[#1F2957] font-bold mb-[30px]">
        {tag}
      </h3>
    </main>
  );
};
