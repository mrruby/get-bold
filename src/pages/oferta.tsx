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
import OffertLayout from "../components/Layout/OffertLayout";
import { Opinions } from "../components/Offert/opinions";

const OffertPage = () => {
  return (
    <ParallaxProvider>
      <OffertLayout
        isSubPage={true}
        isContactPage={false}
        footerWhiteBg={false}
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
        <OffertAds />
        <BoxesOffert />
        <OffertAdsTikTok />
        <Opinions />
        <OffertPhotos />
        <OffertVideo />
        <OffertFull />
      </OffertLayout>
    </ParallaxProvider >
  );
};

export const Head = () => <SEO title="Oferta - GetBold" />;

export default OffertPage;
