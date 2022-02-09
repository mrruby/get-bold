import React from "react";
import { HomeOffertBoxes } from "./offertBoxes";
import { HomeOffertContact } from "./offertContact";
import { HomeOffertHeading } from "./offertHeading";

const HomeOffertComponent = () => {
  return (
    <main className="relative px-8 py-40 w-full flex flex-col items-center">
      <HomeOffertHeading />
      <HomeOffertBoxes />
      <HomeOffertContact />
    </main>
  );
};

export default HomeOffertComponent;
