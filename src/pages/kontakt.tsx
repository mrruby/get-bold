import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { ContactForm } from "../components/Contact/contactForm";
import { HeadingContact } from "../components/Contact/heading";
import Layout from "../components/Layout/Layout";
import { SEO } from "../components/Seo";

const ContactPage = () => {
  return (
    <ParallaxProvider>
      <Layout
        yellowCircle={true}
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
        isContactPage={true}
        footerWhiteBg={true}
      >
        <HeadingContact />
        <ContactForm />
      </Layout>
    </ParallaxProvider>
  );
};

export const Head = () => <SEO title="Kontakt - GetBold" />;

export default ContactPage;
