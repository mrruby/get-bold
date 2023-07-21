import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { BoxesOffert } from "../components/Offert/boxes";
import { OffertAds } from "../components/Offert/offert-ads";
import { OffertPhotos } from "../components/Offert/offert-photos";
import { OffertAdsTikTok } from "../components/Offert/offert-ads-tiktok";
import { OffertVideo } from "../components/Offert/offert-video";
import { OffertFull } from "../components/Offert/offert-full";
import { SEO } from "../components/Seo";
import { PageHeading } from "../helpers/PageHeading";
import Layout from "../components/Layout/Layout/index";
import { Opinions } from "../components/Offert/opinions";
import MaxWithBgColorContainer from "../components/Layout/Layout/MaxWithBgColorContainer";

const OffertPage = () => {
  return (
    <ParallaxProvider>
      <Layout
        isSubPage={true}
        isContactPage={false}
        footerWhiteBg={false}
        leftSemicircle={true}
        rightSemicircle={true}
        facebookIcon={true}
        instagramIcon={true}
        bgWave1={true}
      >
        <MaxWithBgColorContainer>
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
          <OffertAds />
        </MaxWithBgColorContainer>
        <MaxWithBgColorContainer bgColor="bg-getbold-dark-pink">
          <BoxesOffert />
        </MaxWithBgColorContainer>
        <MaxWithBgColorContainer>
          <OffertAdsTikTok />
        </MaxWithBgColorContainer>
        <MaxWithBgColorContainer bgColor="bg-getbold-pink">
          <Opinions />
        </MaxWithBgColorContainer>
        <MaxWithBgColorContainer>
          <OffertPhotos />
        </MaxWithBgColorContainer>
        <MaxWithBgColorContainer>
          <OffertVideo />
        </MaxWithBgColorContainer>
        <MaxWithBgColorContainer>
          <OffertFull />
        </MaxWithBgColorContainer>
      </Layout>
    </ParallaxProvider >
  );
};

export const Head = () => <SEO title="Oferta - GetBold" />;

export default OffertPage;
