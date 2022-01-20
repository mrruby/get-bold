import React from "react";
import Helmet from "react-helmet";
import { Header } from "./header";

export const Layout = ({ children }) => {
  return (
    <div className="antialiased min-h-screen text-sm font-montserrat text-getbold-blue">
      <Helmet>
        <html lang="pl" />
        <title>GetBold</title>
      </Helmet>
      <Header />
      {children}
    </div>
  );
};
