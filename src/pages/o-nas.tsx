import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { AboutElements } from "../components/About/elements";
import { HeadingAbout } from "../components/About/heading";
import { TeamAbout } from "../components/About/team";
import SubpageLayout from "../components/Layout/SubpageLayout/index";

const AboutPage = () => {
  return (
    <ParallaxProvider>
      <SubpageLayout>
        <HeadingAbout />
        <TeamAbout />
        <AboutElements />
      </SubpageLayout>
    </ParallaxProvider>
  );
};

export default AboutPage;
