import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import Layout from "../components/Layout/Layout";
import { BoxesOffert } from "../components/Offert/boxes";
import { OffertComponent } from "../components/Offert/offert";
import { SEO } from "../components/Seo";
import { PageHeading } from "../helpers/PageHeading";

const OffertPage = () => {
  return (
    <ParallaxProvider>
      <Layout
        yellowCircle={true}
        yellowCircle2={true}
        orangeHex={true}
        grayTriangle={true}
        pinkTriangle={true}
        blueHex={true}
        redCircle={true}
        yellowSquare={true}
        blueSquare={true}
        heroBG={true}
        firstMidBG={true}
        secMidBG={false}
        isSubPage={true}
        cube={true}
        graph={true}
        card={true}
        leftCloud={true}
        rightCloud={true}
        flower={true}
        coin={true}
        chat={false}
        ball={false}
        pinkChart={false}
        blueCube={false}
        isContactPage={false}
        footerWhiteBg={true}
      >
        <PageHeading
          pageName="OFERTA"
          firstPartTitle={
            <>
              Docieramy do Twoich klientów <br />{" "}
            </>
          }
          circledText="najlepszą"
          secPartTitle={<> możliwą drogą.</>}
          paragraph="A Ty zawsze wiesz, jak nam idzie. Jak dokładnie wygląda współpraca z nami?"
        />
        <BoxesOffert />
        <OffertComponent />
      </Layout>
    </ParallaxProvider>
  );
};

export const Head = () => <SEO title="Oferta - GetBold" />;

export default OffertPage;
