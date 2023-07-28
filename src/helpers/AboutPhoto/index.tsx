import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { StaticImage } from "gatsby-plugin-image";

interface Props {
  link: string;
}

// export const AboutPhoto: React.FC<{
//   imageData: IGatsbyImageData 
//   link: string,
// }> = ({
//   imageData
// }) 
// =>
export const AboutPhoto: React.FC<Props> = ({ link }) => {
  return (
    <div className="relative max-w-full h-[312px] md:h-full">
      <StaticImage
        src="../../../static/about-light.png"
        alt=""
        className="absolute -top-12 left-16 z-30 w-[64px] lg:w-[80px] h-auto"
      />
      <StaticImage
        src="../../../static/about-note.svg"
        alt=""
        className="absolute top-16 lg:top-28 -left-8 lg:-left-12 z-30 w-[128px] lg:w-[180px] h-auto"
      />

      <div className="w-[18rem] h-[18rem] md:w-[24rem] md:h-[24rem] pt-1 pb-2 px-2 lg:p-0 bg-image-about-ada bg-cover flex items-start justify-center object-contain">
        {/* <GatsbyImage
          image={imageData}
          alt="team member photo"
          className="h-[95%] w-[95%] mt-1 rounded-[100px] md:rounded-[143px] object-cover"
        /> */}
        <img
          src={link}
          alt="team member photo"
          className="h-[95%] w-[95%] mt-1 rounded-[100px] md:rounded-[143px] object-cover"
        />
      </div>
    </div>
  );
};
