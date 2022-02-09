import React from "react";

import HomeBlogComponent from "../components/Home/Blog/index";
import HomeHeroComponent from "../components/Home/Hero/index";
import HomeOffertComponent from "../components/Home/Offert/index";
import HomePortfolioComponent from "../components/Home/Portfolio/index";
import HomeAboutComponent from "../components/Home/About/index";
import HomeReferencesComponent from "../components/Home/References/index";
import Layout from "../components/Layout/Layout/index";
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
