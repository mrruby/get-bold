import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { ContactForm } from "../components/Contact/contactForm";
import { HeadingContact } from "../components/Contact/heading";
import ContactLayout from "../components/Layout/ContactLayout";

const ContactPage = () => {
  return (
    <ParallaxProvider>
      <ContactLayout title={"Kontakt - GetBold"}>
        <HeadingContact />
        <ContactForm />
      </ContactLayout>
    </ParallaxProvider>
  );
};

export default ContactPage;
