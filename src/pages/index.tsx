import React from "react";
import { AboutHome } from "../components/Home/about";
import { BlogHome } from "../components/Home/blog";
import { HeroHome } from "../components/Home/hero";
import { OffertHome } from "../components/Home/offert";
import { PortfolioHome } from "../components/Home/portfolio";
import { ReferencesHome } from "../components/Home/references";
import { Layout } from "../components/Layout/layout";

const IndexPage = () => {
  return (
    <Layout screenComponent={<HeroHome />}>
      <OffertHome />
      <PortfolioHome />
      <AboutHome />
      <ReferencesHome />
      <BlogHome />
    </Layout>
  );
};

export default IndexPage;
