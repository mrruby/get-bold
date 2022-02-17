import React from "react";
import { HomeOffertBoxes } from "./offertBoxes";
import { HomeOffertContact } from "./offertContact";
import { HomeOffertHeading } from "./offertHeading";

const HomeOffertComponent = () => {
  return (
    <main
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-out"
      data-aos-delay="600"
      className="relative px-8 py-8 md:py-40 w-full flex flex-col items-center"
    >
      <HomeOffertHeading />
      <HomeOffertBoxes />
      <HomeOffertContact />
    </main>
  );
};

export default HomeOffertComponent;
