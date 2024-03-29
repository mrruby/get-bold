import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { BoxesOffert } from "../components/Offert/boxes";
import { OffertAds } from "../components/Offert/offert-ads";
import { OffertPhotos } from "../components/Offert/offert-photos";
import { OffertSocialMedia } from "../helpers/OffertSocialMedia"
import { OffertConsultations } from "../helpers/OffertConsultations"
import { OffertAdsTikTok } from "../components/Offert/offert-ads-tiktok";
import { OffertVideo } from "../components/Offert/offert-video";
import { OffertFull } from "../components/Offert/offert-full";
import { SEO } from "../components/Seo";
import { PageHeading } from "../helpers/PageHeading";
import Layout from "../components/Layout/Layout/index";
import { OffertReferences } from "../components/Offert/offert-references";
import MaxWithBgColorContainer from "../components/Layout/Layout/MaxWithBgColorContainer";

const OffertPage = () => {
  return (
    <ParallaxProvider>
      <Layout
        isSubPage={true}
        isContactPage={false}
        leftSemicircle1={true}
        leftSemicircle2={true}
        rightSemicircle1={true}
        rightSemicircle2={true}
        facebookIcon1={true}
        facebookIcon2={true}
        facebookIcon3={true}
        instagramIcon1={true}
        instagramIcon2={true}
        instagramIcon3={true}
        tikttokIcon={true}
        bgWave1={true}
      >
        {/* <MaxWithBgColorContainer bgColor="bg-getbold-pink"> */}
        <MaxWithBgColorContainer extraStyle="z-10">
          <PageHeading
            pageName="OFERTA"
            firstPartTitle={
              <>
                Przyprowadzimy do <br />Ciebie{" "}
              </>
            }
            secPartTitle={<> nowych klientów.</>}
            paragraph={<> Nawet jeśli teraz zamiast osiągać sukcesy martwisz się o przyszłość swojej firmy.
              <span className="font-bold">"Głowa do góry!"</span></>}
            additionalParagraph={<> Zobacz, co konkretnie zrobimy, aby Twój biznes się <span className="font-bold">rozkręcił!</span></>}
          />
        </MaxWithBgColorContainer>
        <MaxWithBgColorContainer extraStyle="z-10">
          <OffertAds />
        </MaxWithBgColorContainer>
        <MaxWithBgColorContainer bgColor="bg-getbold-dark-pink">
          <BoxesOffert />
        </MaxWithBgColorContainer>
        <MaxWithBgColorContainer>
          <OffertAdsTikTok />
        </MaxWithBgColorContainer>
        <MaxWithBgColorContainer bgColor="bg-getbold-pink">
          <OffertReferences />
        </MaxWithBgColorContainer>
        <MaxWithBgColorContainer>
          <OffertPhotos />
        </MaxWithBgColorContainer>
        <MaxWithBgColorContainer bgColor="bg-getbold-dark-pink" extraStyle="z-0">
          <OffertSocialMedia
            title={<>Przyprowadzimy Cię przez <span className="text-white">meandry social mediów.</span> </>}
            firstParagraph="Kojarzysz takie fanpejdże, które aż chce się czytać, nawet gdy nie znasz jeszcze samego produktu? Takie, na które wchodzisz przez przypadek i już zostajesz? Wybierzemy najlepsze social media dla Twojej marki i obsłużymy od A do Z. Także od postaw."
            listTitle="Poprowadzimy dla Ciebie sociale, które przyciągną nowych klientów:"
            listItems={[
              "zaplanujemy jakościowy, przemyślany content,",
              "zadbamy o niepowtarzalną komunikację,",
              "ogarniemy konkursy, grupy i wydarzenia,",
              "stworzymy zaangażowaną społeczność,",
            ]}
            listEnd="i pochwalimy się w raporcie, co nam z tego wyszło!"
            secParagraph="To jak, chcesz, aby Twój profil w social mediach sprzedawał?"
            bonusParagraph={<>Cześć. Chce zamówić <span className="font-bold">niezobowiązującą ofertę.</span>  </>}
            buttonText="Chcę wiedzieć więcej"
          />
        </MaxWithBgColorContainer>
        <MaxWithBgColorContainer bgColor="bg-white" extraStyle="bg-wave2 z-20">
          <OffertVideo />
        </MaxWithBgColorContainer>
        <MaxWithBgColorContainer extraStyle="z-50">
          <OffertFull />
        </MaxWithBgColorContainer>
        <MaxWithBgColorContainer bgColor="bg-getbold-pink" extraStyle="bg-wave3 z-0">
          <OffertConsultations
            title={<>Umówimy się na <span className="text-white">konsultacje marketingowe</span> (Facebook & Instagram Ads)</>}
            firstParagraph={<> Potrzebujesz wsparcia w marketingu, ale budżet ostatnio się nie spina? <span className="font-bold">Wybierz konsultacje.</span> Specjalistka <span className="font-bold">z 6-letnim doświadczeniem</span> w reklamach przeprowadzi Cię przez meandry Managera Reklam aż do nowych klientów. Nawet jeśli do tej pory myślałeś, że Ty i Facebook nie tworzycie zgranej pary.</>}
            listTitle="Co zyskasz na konsultacjach?"
            listItems={[
              "Samodzielnie poprowadzisz działania reklamowe dla swojej firmy na Facebooku & Instagramie.",
              "Nauczysz się jak ustawiać i optymalizować kampanie reklamowe od 0.",
              "Oszczędzisz kilkaset złotych miesięcznie, które zapłaciłabyś agencji lub freelancerowi za działania reklamowe.",
              "Inwestujesz pieniądze w wiedzę i efekty — równocześnie.",
              "Dążysz do zwiększenia swoich zysków, aby w przyszłości oddelegować działania reklamowe.",
            ]}
            secParagraph="To jak, stawiasz na rozwój biznesu i siebie?"
            buttonText="Wchodzę w to"
          />
        </MaxWithBgColorContainer>
      </Layout>
    </ParallaxProvider >
  );
};

export const Head = () => <SEO title="Oferta - GetBold" />;

export default OffertPage;
