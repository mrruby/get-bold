import React from "react";
import Layout from "../components/Layout/Layout";
import { HeadingPortfolio } from "../components/Portfolio/heading";
import { PortfolioPortfolio } from "../components/Portfolio/portfolio";
import { QuotesPortfolio } from "../components/Portfolio/quotes";

const PortfolioPage = () => {
  return (
    <Layout
      title={"Portfolio - GetBold"}
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
      footerWhiteBg={true}
    >
      <HeadingPortfolio />
      <PortfolioPortfolio />
      <QuotesPortfolio />
    </Layout>
  );
};
export default PortfolioPage;
