import React from "react";
import Helmet from "react-helmet";
import { PinkChart } from "../../../helpers/LayoutElements";
import { ILayoutElements } from "../../../utils/types/layoutElements";
import Footer from "../Footer";
import Header from "../Header";

import { LayoutElements } from "./elements";

interface Props extends ILayoutElements {
  screenComponent?: React.ReactNode;
  title: string;
  isSubPage: boolean;
  isContactPage: boolean;
  footerWhiteBg: boolean;
}

const Layout: React.FC<Props> = ({
  children,
  screenComponent,
  title,
  yellowCircle,
  yellowCircle2,
  orangeHex,
  grayTriangle,
  pinkTriangle,
  blueHex,
  redCircle,
  yellowSquare,
  blueSquare,
  heroBG,
  firstMidBG,
  secMidBG,
  cube,
  graph,
  card,
  leftCloud,
  rightCloud,
  flower,
  coin,
  chat,
  ball,
  pinkChart,
  blueCube,
  isContactPage,
  footerWhiteBg,
}) => {
  return (
    <div className="antialiased min-h-screen max-w-full overflow-hidden text-sm font-montserrat text-getbold-blue flex flex-col scroll-smooth relative">
      <Helmet>
        <html lang="pl" />
        <title>{title}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1, minimum-scale=1"
        ></meta>
      </Helmet>

      <div className="container mx-auto max-w-7xl z-20 overflow-x-hidden">
        {screenComponent ? (
          <div className="min-h-screen flex flex-col">
            <Header />
            {screenComponent}
          </div>
        ) : (
          <Header />
        )}

        {children}
      </div>
      <Footer isContactPage={isContactPage} isWhiteBg={footerWhiteBg} />

      <LayoutElements
        yellowCircle={yellowCircle}
        yellowCircle2={yellowCircle2}
        orangeHex={orangeHex}
        grayTriangle={grayTriangle}
        pinkTriangle={pinkTriangle}
        blueHex={blueHex}
        redCircle={redCircle}
        yellowSquare={yellowSquare}
        blueSquare={blueSquare}
        heroBG={heroBG}
        firstMidBG={firstMidBG}
        secMidBG={secMidBG}
        cube={cube}
        graph={graph}
        card={card}
        leftCloud={leftCloud}
        rightCloud={rightCloud}
        flower={flower}
        coin={coin}
        chat={chat}
        ball={ball}
        pinkChart={pinkChart}
        blueCube={blueCube}
      />
    </div>
  );
};

export default Layout;
