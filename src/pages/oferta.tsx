import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import SubpageLayout from "../components/Layout/SubpageLayout/index";
import { BoxesOffert } from "../components/Offert/boxes";
import { OffertElements } from "../components/Offert/elements";
import { HeadingOffert } from "../components/Offert/heading";
import { OffertOffert } from "../components/Offert/offert";

const OffertPage = () => {
  return (
    <ParallaxProvider>
      <SubpageLayout>
        <HeadingOffert />
        <BoxesOffert />
        <OffertOffert />
        <OffertElements />
      </SubpageLayout>
    </ParallaxProvider>
  );
};

export default OffertPage;
