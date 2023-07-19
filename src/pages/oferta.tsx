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
        isSubPage={true}
        isContactPage={false}
        footerWhiteBg={true}
        leftSemicircle={true}
        rightSemicircle={true}
        facebookIcon={true}
        instagramIcon={true}
        bgWave1={true}
      >
        <PageHeading
          pageName="OFERTA"
          firstPartTitle={
            <>
              Przyprowadzimy do <br />Ciebie{" "}
            </>
          }
          secPartTitle={<> nowych klientów.</>}
          firstPartParagraph="Nawet jeśli teraz zamiast osiągać sukcesy martwisz się o przyszłość swojej firmy. "
          secPartParagraph="Głowa do góry!"
          firstPartAdditionalParagraph="Zobacz, co konkretnie zrobimy, aby Twój biznes się "
          secPartAdditionalParagraph="rozkręcił!"
        />
        <BoxesOffert />
        <OffertComponent />
      </Layout>
    </ParallaxProvider >
  );
};

export const Head = () => <SEO title="Oferta - GetBold" />;

export default OffertPage;
