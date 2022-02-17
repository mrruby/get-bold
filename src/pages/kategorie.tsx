import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { CatsList } from "../components/Categories/catsList";
import { HeadingCats } from "../components/Categories/heading";
import Layout from "../components/Layout/Layout";
import { CatsProvider } from "../utils/context/catsContext";

const TagsPage = () => {
  return (
    <ParallaxProvider>
      <CatsProvider>
        <Layout
          title={"Kategorie - GetBold"}
          yellowCircle={false}
          yellowCircle2={false}
          orangeHex={false}
          grayTriangle={false}
          pinkTriangle={false}
          blueHex={false}
          redCircle={false}
          yellowSquare={false}
          blueSquare={false}
          heroBG={true}
          firstMidBG={false}
          secMidBG={false}
          isSubPage={true}
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
          footerWhiteBg={false}
        >
          <HeadingCats />
          <CatsList />
        </Layout>
      </CatsProvider>
    </ParallaxProvider>
  );
};

export default TagsPage;
