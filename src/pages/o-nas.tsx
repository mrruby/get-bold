import React from "react";
import { HeadingAbout } from "../components/About/heading";
import { TeamAbout } from "../components/About/team";
import Layout from "../components/Layout/Layout";

const AboutPage = () => {
  return (
    <Layout
      title={"O nas - GetBold"}
      yellowCircle={true}
      yellowCircle2={false}
      orangeHex={true}
      grayTriangle={false}
      pinkTriangle={false}
      blueHex={false}
      redCircle={false}
      yellowSquare={false}
      blueSquare={false}
      heroBG={true}
      firstMidBG={false}
      secMidBG={false}
      isSubPage={true}
      cube={true}
      graph={true}
      card={true}
      leftCloud={true}
      rightCloud={true}
      flower={true}
      coin={false}
      chat={true}
      ball={false}
      pinkChart={false}
      blueCube={false}
      isContactPage={false}
      footerWhiteBg={true}
    >
      <HeadingAbout />
      <TeamAbout />
    </Layout>
  );
};

export default AboutPage;
