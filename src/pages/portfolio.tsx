import React from "react";
import { SubpageLayout } from "../components/Layout/subpageLayout";
import { PortfolioElements } from "../components/Portfolio/elements";
import { HeadingPortfolio } from "../components/Portfolio/heading";
import { PortfolioPortfolio } from "../components/Portfolio/portfolio";
import { QuotesPortfolio } from "../components/Portfolio/quotes";

const PortfolioPage = () => {
  return (
    <SubpageLayout>
      <HeadingPortfolio />
      <PortfolioPortfolio />
      <QuotesPortfolio />
      <PortfolioElements />
    </SubpageLayout>
  );
};
export default PortfolioPage;
