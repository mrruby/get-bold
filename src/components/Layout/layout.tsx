import React from "react";
import Helmet from "react-helmet";
import { Footer } from "./footer";
import { Header } from "./header";

interface Props {
  screenComponent?: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children, screenComponent }) => {
  return (
    <div className="antialiased min-h-screen text-sm font-montserrat text-getbold-blue flex flex-col">
      <Helmet>
        <html lang="pl" />
        <title>GetBold</title>
      </Helmet>
      <div className="absolute top-0 left-0 min-h-screen w-full bg-image-home -z-10"></div>
      <div className="absolute top-[1933px] left-0 h-[1800px] w-full bg-image-home-portfolio -z-10"></div>
      <div className="absolute top-[4681px] left-0 h-[1000px] w-full bg-image-home-references -z-10"></div>

      <div className="min-h-screen flex flex-col">
        <Header />
        {screenComponent}
      </div>
      {children}
      <Footer />
    </div>
  );
};
