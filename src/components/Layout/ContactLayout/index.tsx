import React from "react";
import { Helmet } from "react-helmet";
import Header from "../Header";
import { ContactLayoutElements } from "./elements";

interface Props {
  title: string;
}

const ContactLayout: React.FC<Props> = ({ children, title }) => {
  return (
    <div className="antialiased min-h-screen text-sm font-montserrat text-getbold-blue flex flex-col scroll-smooth">
      <Helmet>
        <html lang="pl" />
        <title>{title}</title>
      </Helmet>

      <div className="absolute top-0 left-0 min-h-screen w-full bg-image-sub -z-10"></div>

      <div className="container mx-auto max-w-7xl z-20">
        <Header />
        {children}
      </div>
      <footer className="2xl:px-[21rem] px-8 xl:px-[150px] py-24 lg:py-40 relative w-full">
        <div className="w-full h-[5.125rem] mt-[87px] bg-[#FFAAB7] absolute left-0">
          <nav className="2xl:px-[21rem] px-8 xl:px-[150px] h-full">
            <ul className="flex items-center space-x-12 text-getbold-btn-pink h-full">
              <li>Polityka Prywatności</li>
              <li>Polityka ochrony danych osobowych</li>
            </ul>
          </nav>
        </div>
      </footer>
      <ContactLayoutElements />
    </div>
  );
};

export default ContactLayout;
