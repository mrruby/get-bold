import React from "react";
import { HomeAboutComponent } from "../components/Home/about";
import { HomeBlogComponent } from "../components/Home/blog";
import { HomeHeroComponent } from "../components/Home/Hero";
import { HomeOffertComponent } from "../components/Home/Offert";
import { HomePortfolioComponent } from "../components/Home/Portfolio";
import { HomeReferencesComponent } from "../components/Home/references";
import { Layout } from "../components/Layout/layout";
import { BlogProvider } from "../utils/context/blogContext";

const IndexPage = () => {
  return (
    <BlogProvider>
      <Layout screenComponent={<HomeHeroComponent />}>
        <HomeOffertComponent />
        <HomePortfolioComponent />
        <HomeAboutComponent />
        <HomeReferencesComponent />
        <HomeBlogComponent />
      </Layout>
    </BlogProvider>
  );
};

export default IndexPage;
