import React from "react";
import Helmet from "react-helmet";
import Footer from "../Footer";
import Header from "../Header";

import { LayoutElements } from "./elements";

interface Props {
  screenComponent?: React.ReactNode;
  title: string;
}

const Layout: React.FC<Props> = ({ children, screenComponent, title }) => {
  return (
    <div className="antialiased min-h-screen text-sm font-montserrat text-getbold-blue flex flex-col scroll-smooth">
      <Helmet>
        <html lang="pl" />
        <title>{title}</title>
      </Helmet>

      <div className="container mx-auto max-w-7xl z-20">
        <div className="min-h-screen flex flex-col">
          <Header />
          {screenComponent}
        </div>

        {children}
      </div>
      <Footer isWhiteBg={true} />
      <LayoutElements />
    </div>
  );
};

export default Layout;
