import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import Layout from "../components/Layout/Layout";
import { HeadingPortfolio } from "../components/Portfolio/heading";
import { PortfolioPortfolio } from "../components/Portfolio/portfolio";
import { QuotesPortfolio } from "../components/Portfolio/quotes";
import { SEO } from "../components/Seo";
import MaxWithBgColorContainer from "../components/Layout/Layout/MaxWithBgColorContainer";

const PortfolioPage = () => {
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
        chat={false}
        ball={true}
        pinkChart={true}
        blueCube={true}
        isContactPage={false}
      >
        <HeadingPortfolio />
        <MaxWithBgColorContainer>
          <PortfolioPortfolio />
          <QuotesPortfolio />
        </MaxWithBgColorContainer>
      </Layout>
    </ParallaxProvider>
  );
};

export const Head = () => <SEO title="Portfolio - GetBold" />;

export default PortfolioPage;
