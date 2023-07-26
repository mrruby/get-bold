import React from "react";

import HomeBlogComponent from "../components/Home/Blog/index";
import HomeHeroComponent from "../components/Home/Hero/index";
import HomeOffertComponent from "../components/Home/Offert/index";
import HomePortfolioComponent from "../components/Home/Portfolio/index";
import HomeAboutComponent from "../components/Home/About/index";
import HomeReferencesComponent from "../components/Home/References/index";
import Layout from "../components/Layout/Layout/index";
import { BlogProvider } from "../utils/context/blogContext";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { WidthProvider } from "../utils/context/widthContext";
import { SEO } from "../components/Seo";
import MaxWithBgColorContainer from "../components/Layout/Layout/MaxWithBgColorContainer";

const IndexPage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <ParallaxProvider>
      <WidthProvider>
        <BlogProvider>
          <Layout
            screenComponent={<HomeHeroComponent />}
            yellowCircle={true}
            yellowCircle2={false}
            orangeHex={true}
            grayTriangle={true}
            pinkTriangle={true}
            blueHex={true}
            redCircle={true}
            yellowSquare={true}
            blueSquare={true}
            heroBG={true}
            firstMidBG={true}
            secMidBG={true}
            isSubPage={false}
            cube={false}
            graph={false}
            card={false}
            leftCloud={false}
            rightCloud={false}
            flower={false}
            coin={false}
            chat={false}
            ball={false}
            pinkChart={false}
            blueCube={false}
            isContactPage={false}
          >
            <MaxWithBgColorContainer>
              <HomeOffertComponent />
              <HomePortfolioComponent />
              <HomeAboutComponent />
              <HomeReferencesComponent />
              <HomeBlogComponent />
            </MaxWithBgColorContainer>
          </Layout>
        </BlogProvider>
      </WidthProvider>
    </ParallaxProvider>
  );
};

export const Head = () => <SEO title="Strona Główna - GetBold" />;

export default IndexPage;
