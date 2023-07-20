import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { OffertBox } from "../../helpers/OffertBox";

export const BoxesOffert = () => {
  return (
    <div className="display flex flex-col items-center bg-getbold-dark-pink text-center py-12">
      <h2 className="text-xl lg:text-getBoldSubtitle text-white">
        Wiesz już, czego potrzebujesz?
        <span className="font-bold"> Kliknij i wybierz!</span>
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 w-full py-8 mx-auto px-8">
        <OffertBox
          img="../../../assets/offert/social-media.svg"
          title="Social media"
          isBigger={false}
          sectionId="social-media"
        />
        <OffertBox
          img="../../../assets/offert/photos.svg"
          title="Zdjęcia"
          isBigger={false}
          sectionId="zdjecia"
        />
        <OffertBox
          img="../../../assets/offert/video.svg"
          title="Video"
          isBigger={false}
          sectionId="video"
        />
        <OffertBox
          img="../../../assets/offert/all.svg"
          title="Pełna obsługa"
          isBigger={false}
          sectionId="pelna-obsluga"
        />
      </div>
      <h2 className="text-3xl lg:text-[40px] text-white">
        Nie wiesz, czego potrzebujesz?
        <br /><span className="font-bold">Przeglądaj dalej!</span>
      </h2>
    </div>
  );
};
