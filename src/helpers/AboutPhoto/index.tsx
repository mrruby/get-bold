import React from "react";

interface Props {
  link: string;
}

export const AboutPhoto: React.FC<Props> = ({ link }) => {
  return (
    <div className="relative max-w-full h-[312px] md:h-full">
      <img
        src="../../../../about-light.png"
        alt=""
        className="absolute -top-10 left-16 z-30 w-[64px] lg:w-[100px] h-auto"
      />
      <img
        src="../../../../about-note.svg"
        alt=""
        className="absolute top-20 lg:top-36 -left-8 lg:-left-32 z-30 w-[128px] lg:w-[200px] h-auto"
      />

      <div className="w-[18rem] h-[18rem] md:w-[24rem] md:h-[24rem] pt-1 pb-2 px-2 lg:p-0 bg-image-about-ada bg-cover flex items-start justify-center object-contain">
        <img
          src={link}
          alt="team member photo"
          className="h-[95%] w-[95%] mt-1 rounded-[100px] md:rounded-[143px] object-cover"
        />
      </div>
    </div>
  );
};
