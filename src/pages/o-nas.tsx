import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { HeadingAbout } from "../components/About/heading";
import { TeamAbout } from "../components/About/team";
import Layout from "../components/Layout/Layout";
import { SEO } from "../components/Seo";

const AboutPage = () => {
  return (
    <ParallaxProvider>
      <Layout
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
    </ParallaxProvider>
  );
};

export const Head = () => <SEO title="O nas - GetBold" />;

export default AboutPage;
