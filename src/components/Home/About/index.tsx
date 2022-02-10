import React from "react";
import { HomeAboutHeading } from "./aboutHeading";
import { HomeAboutPeople } from "./aboutPeople";

const HomeAboutComponent = () => {
  return (
    <main
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-out"
      data-aos-delay="600"
      className="relative py-24 lg:py-40 px-8 w-full flex flex-col items-center"
    >
      <HomeAboutHeading />
      <HomeAboutPeople />
    </main>
  );
};

export default HomeAboutComponent;
