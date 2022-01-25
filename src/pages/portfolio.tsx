import React from "react";
import { SubpageLayout } from "../components/Layout/subpageLayout";
import { HeadingPortfolio } from "../components/Portfolio/heading";
import { PortfolioPortfolio } from "../components/Portfolio/portfolio";
import { QuotesPortfolio } from "../components/Portfolio/quotes";

const PortfolioPage = () => {
  return (
    <SubpageLayout>
      <HeadingPortfolio />
      <PortfolioPortfolio />
      <QuotesPortfolio />
    </SubpageLayout>
  );
};
export default PortfolioPage;
