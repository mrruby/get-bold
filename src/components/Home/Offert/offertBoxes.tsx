import React from "react";
import { HomeOffertBox } from "../../../helpers/HomeOffertBox";

export const HomeOffertBoxes = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 gap-y-24 lg:grid-cols-5 py-10 w-full border-y border-black border-opacity-[.05]">
      <HomeOffertBox
        img="../../../assets/offert/influencer.svg"
        imgAlt="Influencer marketing - GetBold Agency"
        title={
          <>
            Influencer <br /> marketing
          </>
        }
      />

      <HomeOffertBox
        img="../../../assets/offert/socialmedia.svg"
        imgAlt="Social media - GetBold Agency"
        title={
          <>
            Social <br /> media
          </>
        }
      />

      <HomeOffertBox
        img="../../../assets/offert/consultation.svg"
        imgAlt="Konsultacje kreatywne - GetBold Agency"
        title={
          <>
            Konsultacje <br /> kreatywne
          </>
        }
      />

      <HomeOffertBox
        img="../../../assets/offert/fbads.webp"
        imgAlt="Facebook Ads - GetBold Agency"
        title={
          <>
            Facebook <br /> Ads
          </>
        }
      />

      <HomeOffertBox
        img="../../../assets/offert/tiktokads.webp"
        imgAlt="TikTok Ads - GetBold Agency"
        title={
          <>
            TikTok <br /> Ads
          </>
        }
      />
    </div>
  );
};
