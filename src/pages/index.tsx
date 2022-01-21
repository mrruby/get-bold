import React from "react";
import { AboutHome } from "../components/Home/about";
import { HeroHome } from "../components/Home/hero";
import { OffertHome } from "../components/Home/offert";
import { PortfolioHome } from "../components/Home/portfolio";
import { Layout } from "../components/Layout/layout";

const IndexPage = () => {
  return (
    <Layout screenComponent={<HeroHome />}>
      <OffertHome />
      <PortfolioHome />
      <AboutHome />
    </Layout>
  );
};

export default IndexPage;
