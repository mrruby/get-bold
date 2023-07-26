import React from "react";
import { ILayoutElements } from "../../../utils/types/layoutElements";
import Footer from "../Footer";
import Header from "../Header";

import { LayoutElements } from "../Layout/elements";

interface Props extends ILayoutElements {
  screenComponent?: React.ReactNode;
  isSubPage: boolean;
  isContactPage: boolean;
  footerWhiteBg: boolean;
  children: React.ReactNode;
}

const defaultProps: ILayoutElements = {
  yellowCircle: false,
  yellowCircle2: false,
  orangeHex: false,
  grayTriangle: false,
  pinkTriangle: false,
  blueHex: false,
  redCircle: false,
  yellowSquare: false,
  blueSquare: false,
  heroBG: false,
  firstMidBG: false,
  secMidBG: false,
  cube: false,
  graph: false,
  card: false,
  leftCloud: false,
  rightCloud: false,
  flower: false,
  coin: false,
  chat: false,
  ball: false,
  pinkChart: false,
  blueCube: false,
  leftSemicircle1: false,
  leftSemicircle2: false,
  rightSemicircle1: false,
  rightSemicircle2: false,
  facebookIcon1: false,
  facebookIcon2: false,
  facebookIcon3: false,
  instagramIcon1: false,
  instagramIcon2: false,
  instagramIcon3: false,
  bgWave1: false,
};

const Layout: React.FC<Props> = ({
  children,
  screenComponent,
  isSubPage,
  isContactPage,
  footerWhiteBg,
  ...layoutElements
}) => {
  const layoutElementsProps: ILayoutElements = { ...defaultProps, ...layoutElements };

  return (
    <div className="antialiased min-h-screen max-w-full overflow-hidden text-sm font-poppins text-getbold-blue flex flex-col scroll-smooth relative">
      {screenComponent ? (
        <div className="min-h-screen flex flex-col">
          <Header />
          {screenComponent}
        </div>
      ) : (
        <Header />
      )}
      {children}
      <Footer isContactPage={isContactPage} isWhiteBg={footerWhiteBg} />
      <LayoutElements {...layoutElementsProps} />
    </div>
  );
};

export default Layout;
