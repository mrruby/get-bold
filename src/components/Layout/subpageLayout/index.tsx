import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../Footer";
import Header from "../Header";

import { SubLayoutElements } from "./elements";

const SubpageLayout = ({ children }) => {
  return (
    <div className="antialiased min-h-screen text-sm font-montserrat text-getbold-blue flex flex-col scroll-smooth">
      <Helmet>
        <html lang="pl" />
        <title>GetBold</title>
      </Helmet>

      <div className="absolute top-0 left-0 min-h-screen w-full bg-image-sub -z-10"></div>

      <div className="container mx-auto max-w-7xl z-20">
        <Header />
        {children}
      </div>
      <SubLayoutElements />
      <Footer />
    </div>
  );
};

export default SubpageLayout;
