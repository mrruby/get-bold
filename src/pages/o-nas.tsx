import React from "react";
import { AboutElements } from "../components/About/elements";
import { HeadingAbout } from "../components/About/heading";
import { TeamAbout } from "../components/About/team";
import SubpageLayout from "../components/Layout/SubpageLayout";

const AboutPage = () => {
  return (
    <SubpageLayout>
      <HeadingAbout />
      <TeamAbout />
      <AboutElements />
    </SubpageLayout>
  );
};

export default AboutPage;
