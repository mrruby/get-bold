import React from "react";
import { HeroHome } from "../components/Home/hero";
import { OffertHome } from "../components/Home/offert";
import { Layout } from "../components/Layout/layout";

const IndexPage = () => {
  return (
    <Layout screenComponent={<HeroHome />}>
      <OffertHome />
    </Layout>
  );
};

export default IndexPage;
