import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import SubpageLayout from "../components/Layout/SubpageLayout/index";
import { PortfolioElements } from "../components/Portfolio/elements";
import { HeadingPortfolio } from "../components/Portfolio/heading";
import { PortfolioPortfolio } from "../components/Portfolio/portfolio";
import { QuotesPortfolio } from "../components/Portfolio/quotes";

const PortfolioPage = () => {
  return (
    <ParallaxProvider>
      <SubpageLayout title={"Portfolio - GetBold"}>
        <HeadingPortfolio />
        <PortfolioPortfolio />
        <QuotesPortfolio />
        <PortfolioElements />
      </SubpageLayout>
    </ParallaxProvider>
  );
};
export default PortfolioPage;
