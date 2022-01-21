import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export const OffertBoxes = () => {
  return (
    <div className="flex items-center py-10 border-y border-black border-opacity-[.05]">
      <div className="flex flex-col items-center justify-center w-[13.625rem]">
        <div className="w-[6.25rem] h-[6.25rem] flex items-center justify-center">
          <StaticImage
            src="../../images/offert/influencer.svg"
            alt="Influencer marketing"
            className="w-[4.4375rem] h-auto"
          />
        </div>
        <p className="font-bold mt-7 text-center">
          Influencer <br /> marketing
        </p>
      </div>

      <span className="w-[1px] h-[4.6875rem] bg-getbold-border opacity-[.09]"></span>

      <div className="flex flex-col items-center justify-center w-[13.625rem]">
        <div className="w-[6.25rem] h-[6.25rem] flex items-center justify-center">
          <StaticImage
            src="../../images/offert/socialmedia.svg"
            alt="Social media"
            className="w-[4.5625rem] h-auto"
          />
        </div>
        <p className="font-bold mt-7 text-center">
          Social <br /> media
        </p>
      </div>

      <span className="w-[1px] h-[4.6875rem] bg-getbold-border opacity-[.09]"></span>

      <div className="flex flex-col items-center justify-center w-[13.625rem]">
        <div className="w-[6.25rem] h-[6.25rem] flex items-center justify-center">
          <StaticImage
            src="../../images/offert/consultation.svg"
            alt="Konsultacje kreatywne"
            className="w-[5.6875rem] h-auto"
          />
        </div>
        <p className="font-bold mt-7 text-center">
          Konsultacje <br /> kreatywne
        </p>
      </div>

      <span className="w-[1px] h-[4.6875rem] bg-getbold-border opacity-[.09]"></span>

      <div className="flex flex-col items-center justify-center w-[13.625rem]">
        <div className="w-[6.25rem] h-[6.25rem] flex items-center justify-center">
          <StaticImage
            src="../../images/offert/fbads.png"
            alt="Facebook Ads"
            className="w-[5.1875rem] h-auto"
          />
        </div>
        <p className="font-bold mt-7 text-center">
          Facebook <br /> Ads
        </p>
      </div>

      <span className="w-[1px] h-[4.6875rem] bg-getbold-border opacity-[.09]"></span>

      <div className="flex flex-col items-center justify-center w-[13.625rem]">
        <div className="w-[6.25rem] h-[6.25rem] flex items-center justify-center">
          <StaticImage
            src="../../images/offert/tiktokads.png"
            alt="TikTok Ads"
            className="w-[4.875rem] h-auto"
          />
        </div>
        <p className="font-bold mt-7 text-center">
          TikTok <br /> Ads
        </p>
      </div>
    </div>
  );
};
