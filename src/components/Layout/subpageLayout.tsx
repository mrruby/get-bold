import React from "react";
import { Helmet } from "react-helmet";
import { Footer } from "./footer";
import { Header } from "./header";

export const SubpageLayout = ({ children }) => {
  return (
    <div className="antialiased min-h-screen text-sm font-montserrat text-getbold-blue flex flex-col">
      <Helmet>
        <html lang="pl" />
        <title>GetBold</title>
      </Helmet>

      <div className="absolute top-0 left-0 min-h-screen w-full bg-image-sub -z-10"></div>

      <Header isSubPage={true} />
      {children}
      <Footer />
    </div>
  );
};
