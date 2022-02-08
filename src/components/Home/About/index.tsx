import React from "react";
import { HomeAboutHeading } from "./aboutHeading";
import { HomeAboutPeople } from "./aboutPeople";

export const HomeAboutComponent = () => {
  return (
    <main className="relative py-24 lg:py-40 px-8 w-full flex flex-col items-center">
      <HomeAboutHeading />
      <HomeAboutPeople />
    </main>
  );
};
