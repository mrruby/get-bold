import React from "react";
import MaxWithBgColorContainer from "../../Layout/Layout/MaxWithBgColorContainer";

import { HomeHeroHeading } from "./heroHeading";
import { HomeHeroImage } from "./heroImage";

const HomeHeroComponent = () => {
  return (
    <MaxWithBgColorContainer>
      <main className="flex flex-col lg:flex-row flex-grow px-8 py-8 lg:items-center min-h-full">
        <HomeHeroHeading />
        <HomeHeroImage />
      </main>
    </MaxWithBgColorContainer>
  );
};

export default HomeHeroComponent;
