import React from "react";

import HomeBlogComponent from "../components/Home/Blog/index";
import HomeHeroComponent from "../components/Home/Hero/index";
import HomeOffertComponent from "../components/Home/Offert/index";
import HomePortfolioComponent from "../components/Home/Portfolio/index";
import HomeAboutComponent from "../components/Home/About/index";
import HomeReferencesComponent from "../components/Home/References/index";
import Layout from "../components/Layout/Layout/index";
import { BlogProvider } from "../utils/context/blogContext";
import { ParallaxProvider } from "react-scroll-parallax";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const IndexPage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <ParallaxProvider>
      <BlogProvider>
        <Layout screenComponent={<HomeHeroComponent />}>
          <HomeOffertComponent />
          <HomePortfolioComponent />
          <HomeAboutComponent />
          <HomeReferencesComponent />
          <HomeBlogComponent />
        </Layout>
      </BlogProvider>
    </ParallaxProvider>
  );
};

export default IndexPage;
