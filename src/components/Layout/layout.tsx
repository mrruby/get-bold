import React from "react";
import Helmet from "react-helmet";
import { Header } from "./header";

interface Props {
  screenComponent?: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children, screenComponent }) => {
  return (
    <div className="antialiased 2xl:container 2xl:mx-auto min-h-screen text-sm font-montserrat text-getbold-blue flex flex-col">
      <Helmet>
        <html lang="pl" />
        <title>GetBold</title>
      </Helmet>
      <div className="absolute top-0 left-0 min-h-screen w-full bg-image-home -z-10"></div>
      <div className="min-h-screen flex flex-col">
        <Header />
        {screenComponent}
      </div>
      {children}
    </div>
  );
};
