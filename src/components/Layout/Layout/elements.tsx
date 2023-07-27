import React from "react";
import {
  Ball,
  BlueCube,
  BlueHex,
  BlueSquare,
  Card,
  Chat,
  Coin,
  Cube,
  FirstMidBackground,
  Flower,
  Graph,
  GrayTriangle,
  HeroBackground,
  LeftCloud,
  OrangeHex,
  PinkChart,
  PinkTriangle,
  RedCircle,
  RightCloud,
  SecMidBackground,
  YellowCircle,
  YellowSquare,
  LeftSemicircle,
  RightSemicircle,
  FacebookIcon,
  InstagramIcon,
  TiktokIcon,
  BgWave1,
} from "../../../helpers/LayoutElements";
import { ILayoutElements } from "../../../utils/types/layoutElements";

export const LayoutElements: React.FC<ILayoutElements> = ({
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
  leftSemicircle1,
  leftSemicircle2,
  rightSemicircle1,
  rightSemicircle2,
  facebookIcon1,
  facebookIcon2,
  facebookIcon3,
  instagramIcon1,
  instagramIcon2,
  instagramIcon3,
  tikttokIcon,
  bgWave1,
}) => {
  return (
    <>
      {yellowCircle && (
        <YellowCircle
          mobileTop="top-[48rem]"
          mobileLeft="-left-8"
          left="md:-left-16"
        />
      )}

      {orangeHex && (
        <OrangeHex
          mobileTop="top-[64rem]"
          mobileRight="-right-6"
          right="md:-right-12"
        />
      )}

      {grayTriangle && (
        <GrayTriangle
          mobileTop="top-[1550px]"
          mobileLeft="-left-2"
          left="md:-left-4"
        />
      )}

      {pinkTriangle && (
        <PinkTriangle
          mobileTop="top-[1933px]"
          mobileRight="right-4"
          right="md:right-2"
        />
      )}

      {blueHex && (
        <BlueHex
          mobileTop="top-[2300px]"
          mobileLeft="-left-12"
          left="md:-left-16"
        />
      )}

      {redCircle && (
        <RedCircle
          mobileTop="top-[3200px]"
          mobileRight="-right-2"
          right="md:-right-0"
        />
      )}

      {yellowSquare && (
        <YellowSquare
          mobileTop="top-[3500px]"
          mobileLeft="left-0"
          left="md:left-4"
        />
      )}

      {blueSquare && (
        <BlueSquare
          mobileTop="top-[4430px]"
          mobileRight="right-0"
          right="md:right-4"
        />
      )}

      {yellowCircle2 && (
        <YellowCircle
          mobileTop="top-[5330px]"
          mobileLeft="-left-8"
          left="md:-left-16"
        />
      )}

      {/* backgrounds */}
      {heroBG && <HeroBackground top="top-0" left="left-0" />}
      {firstMidBG && <FirstMidBackground top="top-[1600px]" left="left-0" />}
      {secMidBG && <SecMidBackground top="top-[4481px]" left="left-0" />}

      {bgWave1 && <BgWave1 top="top-0" left="left-0" />}

      {/* subpage elements */}
      {cube && (
        <Cube
          mobileTop="top-[237px]"
          mobileLeft="left-0"
          left="md:left-[265px]"
        />
      )}

      {graph && (
        <Graph
          mobileTop="top-[345px]"
          mobileLeft="-left-40"
          left="md:left-[307px]"
        />
      )}

      {card && (
        <Card mobileTop="top-[300px]" mobileLeft="-left-64" left="md:left-2" />
      )}

      {leftCloud && (
        <LeftCloud
          mobileTop="top-[550px]"
          mobileLeft="-left-64"
          left="md:-left-40"
        />
      )}

      {rightCloud && (
        <RightCloud
          mobileTop="top-[250px]"
          mobileRight="right-8"
          right="md:right-30"
        />
      )}

      {flower && (
        <Flower
          mobileTop="top-[400px]"
          mobileRight="-right-24"
          right="md:-right-10"
        />
      )}

      {coin && (
        <Coin
          startScroll="0px"
          endScroll="200px"
          mobileTop="top-[372px]"
          mobileRight="right-2"
          right="md:right-[400px]"
        />
      )}

      {chat && (
        <Chat
          mobileTop="top-[450px]"
          mobileRight="right-2"
          right="md:right-[400px]"
        />
      )}

      {ball && (
        <Ball
          mobileTop="top-[600px]"
          mobileRight="right-2"
          right="md:right-[250px]"
        />
      )}

      {pinkChart && (
        <PinkChart
          mobileTop="top-[300px]"
          mobileRight="right-2"
          right="md:right-[350px]"
        />
      )}

      {blueCube && (
        <BlueCube
          mobileTop="top-[250px]"
          mobileRight="right-2"
          right="md:right-[400px]"
        />
      )}

      {leftSemicircle1 && (
        <LeftSemicircle
          mobileTop="top-[468px]"
          mobileLeft="left-0"
          left="md:left-0"
        />
      )}
      {leftSemicircle2 && (
        <LeftSemicircle
          mobileTop="top-[7700px] lg:top-[6090px]"
          mobileLeft="left-0"
          left="md:left-0"
        />
      )}
      {rightSemicircle1 && (
        <RightSemicircle
          mobileTop="top-[172px]"
          mobileRight="right-[-10px]"
          right="md:right-[-10px]"
        />
      )}

      {rightSemicircle2 && (
        <RightSemicircle
          mobileTop="top-[7600px] lg:top-[5820px]"
          mobileRight="right-[-10px]"
          right="md:right-[-10px]"
        />
      )}

      {facebookIcon1 && (
        <FacebookIcon
          top="top-[170px]"
          right="right-[50px] sm:right-[200px] lg:right-[400px]"
          rotate="-21deg"
          width="90px"
        />
      )}
      {facebookIcon2 && (
        <FacebookIcon
          top="top-[5500px] lg:top-[3400px]"
          mobileRight="right-[30px]"
          right="md:right-[252px]"
          rotate="24deg"
          width="200px"
        />
      )}
      {facebookIcon3 && (
        <FacebookIcon
          top="top-[8100px] lg:top-[5230px]"
          mobileRight="right-[20px]"
          right="md:right-[190px]"
          rotate="-21deg"
          width="120px"
        />
      )}

      {instagramIcon1 && (
        <InstagramIcon
          top="top-[310px]"
          right="right-[10px] sm:right-[260px] lg:right-[480px]"
          rotate="19deg"
          width="105px"
        />
      )}
      {instagramIcon2 && (
        <InstagramIcon
          top="top-[5400px] lg:top-[4000px]"
          right="right-[10px] sm:right-[260px] lg:right-[370px]"
          rotate="19deg"
          width="166px"
        />
      )}
      {instagramIcon3 && (
        <InstagramIcon
          top="top-[8250px] lg:top-[5350px]"
          mobileRight="right-[10px]"
          right="md:right-[100px]"
          rotate="19deg"
          width="166px"
        />
      )}

      {tikttokIcon && (
        <TiktokIcon
          top="top-[5000px] lg:top-[3400px]"
          right="right-[5px] sm:right-[200px] lg:right-[410px]"
          rotate="-19deg"
          width="166px"
        />
      )}
    </>
  );
};
