import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../Footer";
import Header from "../Header";

interface Props {
  title: string;
}

const TagsLayout: React.FC<Props> = ({ children, title }) => {
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

      <Footer isWhiteBg={false} />
    </div>
  );
};

export default TagsLayout;
