import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Parallax } from "react-scroll-parallax";

export const HomeOffertBoxes = () => {
  return (
    <Parallax
      speed={20}
      className="grid grid-cols-1 sm:grid-cols-3 gap-4 gap-y-24 lg:grid-cols-5 py-10 w-full border-y border-black border-opacity-[.05]"
    >
      <div className="flex flex-col items-center justify-center">
        <div className="w-full h-full flex items-center justify-center">
          <StaticImage
            src="../../../images/offert/influencer.svg"
            alt="Influencer marketing"
            className="w-[4.4375rem] h-auto"
          />
        </div>
        <p className="font-bold mt-7 text-center">
          Influencer <br /> marketing
        </p>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="w-full h-full flex items-center justify-center">
          <StaticImage
            src="../../../images/offert/socialmedia.svg"
            alt="Social media"
            className="w-[4.5625rem] h-auto"
          />
        </div>
        <p className="font-bold mt-7 text-center">
          Social <br /> media
        </p>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="w-full h-full flex items-center justify-center">
          <StaticImage
            src="../../../images/offert/consultation.svg"
            alt="Konsultacje kreatywne"
            className="w-[5.6875rem] h-auto"
          />
        </div>
        <p className="font-bold mt-7 text-center">
          Konsultacje <br /> kreatywne
        </p>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="w-full h-full flex items-center justify-center">
          <StaticImage
            src="../../../images/offert/fbads.png"
            alt="Facebook Ads"
            className="w-[5.1875rem] h-auto"
          />
        </div>
        <p className="font-bold mt-7 text-center">
          Facebook <br /> Ads
        </p>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="w-full h-full flex items-center justify-center">
          <StaticImage
            src="../../../images/offert/tiktokads.png"
            alt="TikTok Ads"
            className="w-[4.875rem] h-auto"
          />
        </div>
        <p className="font-bold mt-7 text-center">
          TikTok <br /> Ads
        </p>
      </div>
    </Parallax>
  );
};
