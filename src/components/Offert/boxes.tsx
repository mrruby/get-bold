import React from "react";
import { OffertBox } from "../../helpers/OffertBox";

export const BoxesOffert = () => {
  return (
    <div className="display flex flex-col items-center text-center pt-12 pb-[166px]">
      <h2 className="text-xl lg:text-getBoldSubtitle text-white">
        Wiesz już, czego potrzebujesz?
        <span className="font-bold"> Kliknij i wybierz!</span>
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 py-9 mx-auto px-8">
        <OffertBox
          img="../../../assets/offert/social-media.svg"
          title="Social media"
          sectionId="social-media"
        />
        <OffertBox
          img="../../../assets/offert/photos.svg"
          title="Zdjęcia"
          sectionId="zdjecia"
        />
        <OffertBox
          img="../../../assets/offert/video.svg"
          title="Video"
          sectionId="video"
        />
        <OffertBox
          img="../../../assets/offert/all.svg"
          title="Pełna obsługa"
          sectionId="pelna-obsluga"
        />
      </div>
      <h2 className="text-3xl lg:text-[40px] text-white leading-normal ">
        Nie wiesz, czego potrzebujesz?
        <br /><span className="font-bold">Przeglądaj dalej!</span>
      </h2>
    </div>
  );
};
