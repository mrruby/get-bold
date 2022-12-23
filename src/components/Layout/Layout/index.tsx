import React from "react";
import { ILayoutElements } from "../../../utils/types/layoutElements";
import Footer from "../Footer";
import Header from "../Header";

import { LayoutElements } from "./elements";

interface Props extends ILayoutElements {
  screenComponent?: React.ReactNode;
  isSubPage: boolean;
  isContactPage: boolean;
  footerWhiteBg: boolean;
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({
  children,
  screenComponent,
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
  footerWhiteBg
}) => {
  return (
    <div className="antialiased min-h-screen max-w-full overflow-hidden text-sm font-montserrat text-getbold-blue flex flex-col scroll-smooth relative">
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
