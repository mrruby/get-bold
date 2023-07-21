import React from "react";
import { ILayoutElements } from "../../../utils/types/layoutElements";
import Footer from "../Footer";
import Header from "../Header";
import Container from "./Container";

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
  leftSemicircle: false,
  rightSemicircle: false,
  facebookIcon: false,
  instagramIcon: false,
  bgWave1: false,
};

const OffertLayout: React.FC<Props> = ({
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

export default OffertLayout;
