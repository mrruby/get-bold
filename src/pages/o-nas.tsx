import React from "react";
import { HeadingAbout } from "../components/About/heading";
import { TeamAbout } from "../components/About/team";
import { SubpageLayout } from "../components/Layout/subpageLayout";

const AboutPage = () => {
  return (
    <SubpageLayout>
      <HeadingAbout />
      <TeamAbout />
    </SubpageLayout>
  );
};

export default AboutPage;
