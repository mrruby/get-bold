import React from "react";
import { Parallax, useParallax } from "react-scroll-parallax";

interface Props {
  startScroll?: string;
  endScroll?: string;
  top?: string;
  right?: string;
  left?: string;
  bottom?: string;
  mobileTop?: string;
  mobileRight?: string;
  mobileLeft?: string;
  mobileBottom?: string;
}

export const Coin: React.FC<Props> = ({
  startScroll,
  endScroll,
  top,
  right,
  left,
  bottom,
  mobileTop,
  mobileRight,
  mobileLeft,
  mobileBottom,
}) => {
  const Parallax = useParallax<HTMLImageElement>({
    translateX: ["0px", "200px"],
  });
  return (
    <img
      src="../../../../assets/layout-elements/coin.png"
      alt="Coin - GetBold Agency"
      className={`absolute ${top && top} ${right && right} ${left && left} ${bottom && bottom
        } ${mobileTop && mobileTop} ${mobileRight && mobileRight} ${mobileLeft && mobileLeft
        } ${mobileBottom && mobileBottom} -z-10 h-auto}`}
      ref={Parallax.ref}
    />
  );
};

export const RedCircle: React.FC<Props> = ({
  top,
  right,
  left,
  bottom,
  mobileTop,
  mobileRight,
  mobileLeft,
  mobileBottom,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute ${top && top} ${right && right} ${left && left} ${bottom && bottom
        } ${mobileTop && mobileTop} ${mobileRight && mobileRight} ${mobileLeft && mobileLeft
        } ${mobileBottom && mobileBottom} w-[6rem] md:w-[10rem] -z-10`}
      viewBox="0 0 196.422 196.422"
    >
      <circle
        id="Ellipse_18"
        data-name="Ellipse 18"
        cx="80.711"
        cy="80.711"
        r="80.711"
        transform="translate(17.5 17.5)"
        fill="none"
        stroke="#ff7288"
        stroke-width="35"
      />
    </svg>
  );
};

export const YellowSquare: React.FC<Props> = ({
  top,
  right,
  left,
  bottom,
  mobileTop,
  mobileRight,
  mobileLeft,
  mobileBottom,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute ${top && top} ${right && right} ${left && left} ${bottom && bottom
        } ${mobileTop && mobileTop} ${mobileRight && mobileRight} ${mobileLeft && mobileLeft
        } ${mobileBottom && mobileBottom} w-[6rem] md:w-[10rem] -z-10`}
      viewBox="0 0 191.703 191.703"
    >
      <rect
        id="Rectangle_50"
        data-name="Rectangle 50"
        width="156.703"
        height="156.703"
        transform="translate(17.5 174.203) rotate(-90)"
        fill="none"
        stroke="#ffd350"
        stroke-width="35"
      />
    </svg>
  );
};

export const OrangeHex: React.FC<Props> = ({
  top,
  right,
  left,
  bottom,
  mobileTop,
  mobileRight,
  mobileLeft,
  mobileBottom,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 251.035 231.05"
      className={`absolute top-[64rem] ${top && top} ${right && right} ${left && left
        } ${bottom && bottom} ${mobileTop && mobileTop} ${mobileRight && mobileRight
        } ${mobileLeft && mobileLeft} ${mobileBottom && mobileBottom
        } -right-6 md:-right-12 w-[6rem] md:w-[10rem] -z-10`}
    >
      <path
        id="Path_461"
        data-name="Path 461"
        d="M854.313,208.052h-85.26L726.42,281.891l42.634,73.839h85.26l42.634-73.839Z"
        transform="matrix(0.966, 0.259, -0.259, 0.966, -585.549, -366.841)"
        fill="none"
        stroke="#ff9362"
        stroke-width="35"
      />
    </svg>
  );
};

export const YellowCircle: React.FC<Props> = ({
  top,
  right,
  left,
  bottom,
  mobileTop,
  mobileRight,
  mobileLeft,
  mobileBottom,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 196.422 196.422"
      className={`absolute ${top && top} ${right && right} ${left && left} ${bottom && bottom
        } ${mobileTop && mobileTop} ${mobileRight && mobileRight} ${mobileLeft && mobileLeft
        } ${mobileBottom && mobileBottom} -z-10 w-[6rem] md:w-[10rem] h-auto`}
    >
      <circle
        id="Ellipse_9"
        data-name="Ellipse 9"
        cx="80.711"
        cy="80.711"
        r="80.711"
        transform="translate(17.5 17.5)"
        fill="none"
        stroke="#FFD350"
        stroke-width="35"
      />
    </svg>
  );
};

export const GrayTriangle: React.FC<Props> = ({
  top,
  right,
  left,
  bottom,
  mobileTop,
  mobileRight,
  mobileLeft,
  mobileBottom,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute ${top && top} ${right && right} ${left && left} ${bottom && bottom
        } ${mobileTop && mobileTop} ${mobileRight && mobileRight} ${mobileLeft && mobileLeft
        } ${mobileBottom && mobileBottom} w-[6rem] md:w-[10rem] -z-10`}
      viewBox="0 0 190.402 164.897"
    >
      <path
        id="Path_460"
        data-name="Path 460"
        d="M1531.329,331.259h-64.892l32.443-56.2,32.449-56.2,32.449,56.2,32.443,56.2Z"
        transform="translate(-1436.128 -183.862)"
        fill="none"
        stroke="#f8e7e4"
        stroke-width="35"
      />
    </svg>
  );
};

export const PinkTriangle: React.FC<Props> = ({
  top,
  right,
  left,
  bottom,
  mobileTop,
  mobileRight,
  mobileLeft,
  mobileBottom,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute ${top && top} ${right && right} ${left && left} ${bottom && bottom
        } ${mobileTop && mobileTop} ${mobileRight && mobileRight} ${mobileLeft && mobileLeft
        } ${mobileBottom && mobileBottom} w-[6rem] md:w-[10rem] -z-10`}
      viewBox="0 0 247.341 238.006"
    >
      <path
        id="Path_2260"
        data-name="Path 2260"
        d="M1531.329,331.259h-64.892l32.443-56.2,32.449-56.2,32.449,56.2,32.443,56.2Z"
        transform="translate(1316.685 1115.299) rotate(-150)"
        fill="none"
        stroke="#ffa3b1"
        stroke-width="35"
      />
    </svg>
  );
};

export const BlueHex: React.FC<Props> = ({
  top,
  right,
  left,
  bottom,
  mobileTop,
  mobileRight,
  mobileLeft,
  mobileBottom,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute ${top && top} ${right && right} ${left && left} ${bottom && bottom
        } ${mobileTop && mobileTop} ${mobileRight && mobileRight} ${mobileLeft && mobileLeft
        } ${mobileBottom && mobileBottom} w-[6rem] md:w-[10rem] -z-30`}
      viewBox="0 0 238.582 238.582"
    >
      <rect
        id="Rectangle_30"
        data-name="Rectangle 30"
        width="133.703"
        height="133.703"
        transform="translate(24.749 119.291) rotate(-45)"
        fill="none"
        stroke="#6097e3"
        stroke-width="35"
      />
    </svg>
  );
};

export const BlueSquare: React.FC<Props> = ({
  top,
  right,
  left,
  bottom,
  mobileTop,
  mobileRight,
  mobileLeft,
  mobileBottom,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute ${top && top} ${right && right} ${left && left} ${bottom && bottom
        } ${mobileTop && mobileTop} ${mobileRight && mobileRight} ${mobileLeft && mobileLeft
        } ${mobileBottom && mobileBottom} w-[6rem] md:w-[10rem] -z-10`}
      viewBox="0 0 251.035 231.05"
    >
      <path
        id="Path_2259"
        data-name="Path 2259"
        d="M854.313,208.052h-85.26L726.42,281.891l42.634,73.839h85.26l42.634-73.839Z"
        transform="matrix(0.966, 0.259, -0.259, 0.966, -585.549, -366.841)"
        fill="none"
        stroke="#6097e3"
        stroke-width="35"
      />
    </svg>
  );
};

{
  /* Backgrounds */
}
export const HeroBackground: React.FC<Props> = ({
  top,
  right,
  left,
  bottom,
  mobileTop,
  mobileRight,
  mobileLeft,
  mobileBottom,
}) => {
  return (
    <div
      className={`absolute ${top && top} ${right && right} ${left && left} ${bottom && bottom
        } ${mobileTop && mobileTop} ${mobileRight && mobileRight} ${mobileLeft && mobileLeft
        } ${mobileBottom && mobileBottom} h-screen w-full bg-image-home -z-20`}
    ></div>
  );
};

export const FirstMidBackground: React.FC<Props> = ({
  top,
  right,
  left,
  bottom,
  mobileTop,
  mobileRight,
  mobileLeft,
  mobileBottom,
}) => {
  return (
    <Parallax
      speed={20}
      className={`absolute ${top && top} ${right && right} ${left && left} ${bottom && bottom
        } ${mobileTop && mobileTop} ${mobileRight && mobileRight} ${mobileLeft && mobileLeft
        } ${mobileBottom && mobileBottom
        } h-[1800px] w-full bg-image-home-portfolio -z-20`}
    ></Parallax>
  );
};

export const SecMidBackground: React.FC<Props> = ({
  top,
  right,
  left,
  bottom,
  mobileTop,
  mobileRight,
  mobileLeft,
  mobileBottom,
}) => {
  return (
    <Parallax
      speed={20}
      className={`absolute ${top && top} ${right && right} ${left && left} ${bottom && bottom
        } ${mobileTop && mobileTop} ${mobileRight && mobileRight} ${mobileLeft && mobileLeft
        } ${mobileBottom && mobileBottom
        } h-[1000px] w-full bg-image-home-references -z-20`}
    ></Parallax>
  );
};

export const BgWave1: React.FC<Props> = ({
  top,
  right,
  left,
  bottom,
  mobileTop,
  mobileRight,
  mobileLeft,
  mobileBottom,
}) => {
  return (
    <Parallax
      speed={20}
      className={`absolute ${top && top} ${right && right} ${left && left} ${bottom && bottom
        } ${mobileTop && mobileTop} ${mobileRight && mobileRight} ${mobileLeft && mobileLeft
        } ${mobileBottom && mobileBottom
        } h-screen w-full bg-wave1 -z-20`}
    ></Parallax>
  );
};

{
  /* SubPage Elements */
}

export const Cube: React.FC<Props> = ({
  top,
  right,
  left,
  bottom,
  mobileTop,
  mobileRight,
  mobileLeft,
  mobileBottom,
}) => {
  const Parallax = useParallax<HTMLImageElement>({
    translateX: ["200px", "0px"],
  });
  return (
    <img
      src="../../../../assets/layout-elements/cube.svg"
      alt="Cube - GetBold Agency"
      className={`absolute ${top && top} ${right && right} ${left && left} ${bottom && bottom
        } ${mobileTop && mobileTop} ${mobileRight && mobileRight} ${mobileLeft && mobileLeft
        } ${mobileBottom && mobileBottom} -z-10 h-auto`}
      ref={Parallax.ref}
    />
  );
};

export const Graph: React.FC<Props> = ({
  top,
  right,
  left,
  bottom,
  mobileTop,
  mobileRight,
  mobileLeft,
  mobileBottom,
}) => {
  const Parallax = useParallax<HTMLImageElement>({
    translateX: ["200px", "0px"],
  });
  return (
    <img
      src="../../../../assets/layout-elements/graph.png"
      alt="Graph - GetBold Agency"
      className={`absolute ${top && top} ${right && right} ${left && left} ${bottom && bottom
        } ${mobileTop && mobileTop} ${mobileRight && mobileRight} ${mobileLeft && mobileLeft
        } ${mobileBottom && mobileBottom} -z-10 h-auto`}
      ref={Parallax.ref}
    />
  );
};

export const Card: React.FC<Props> = ({
  top,
  right,
  left,
  bottom,
  mobileTop,
  mobileRight,
  mobileLeft,
  mobileBottom,
}) => {
  const Parallax = useParallax<HTMLImageElement>({
    translateX: ["200px", "0px"],
  });
  return (
    <img
      src="../../../../assets/layout-elements/card.png"
      alt="Card - GetBold Agency"
      className={`absolute ${top && top} ${right && right} ${left && left} ${bottom && bottom
        } ${mobileTop && mobileTop} ${mobileRight && mobileRight} ${mobileLeft && mobileLeft
        } ${mobileBottom && mobileBottom} -z-10 h-auto`}
      ref={Parallax.ref}
    />
  );
};

export const LeftCloud: React.FC<Props> = ({
  top,
  right,
  left,
  bottom,
  mobileTop,
  mobileRight,
  mobileLeft,
  mobileBottom,
}) => {
  const Parallax = useParallax<HTMLImageElement>({
    translateX: ["200px", "0px"],
  });
  return (
    <img
      src="../../../../assets/layout-elements/footer-cloud-left.svg"
      alt="Left Cloud - GetBold Agency"
      className={`absolute ${top && top} ${right && right} ${left && left} ${bottom && bottom
        } ${mobileTop && mobileTop} ${mobileRight && mobileRight} ${mobileLeft && mobileLeft
        } ${mobileBottom && mobileBottom} z-10 w-[250px] md:w-[400px] h-auto`}
      ref={Parallax.ref}
    />
  );
};

export const RightCloud: React.FC<Props> = ({
  top,
  right,
  left,
  bottom,
  mobileTop,
  mobileRight,
  mobileLeft,
  mobileBottom,
}) => {
  const Parallax = useParallax<HTMLImageElement>({
    translateX: ["0px", "200px"],
  });
  return (
    <img
      src="../../../../assets/layout-elements/footer-cloud-right.svg"
      alt="Right Cloud - GetBold Agency"
      className={`absolute ${top && top} ${right && right} ${left && left} ${bottom && bottom
        } ${mobileTop && mobileTop} ${mobileRight && mobileRight} ${mobileLeft && mobileLeft
        } ${mobileBottom && mobileBottom} z-10 w-[250px] md:w-[400px] h-auto`}
      ref={Parallax.ref}
    />
  );
};

export const Flower: React.FC<Props> = ({
  top,
  right,
  left,
  bottom,
  mobileTop,
  mobileRight,
  mobileLeft,
  mobileBottom,
}) => {
  const Parallax = useParallax<HTMLImageElement>({
    translateX: ["0px", "200px"],
  });
  return (
    <img
      src="../../../../assets/layout-elements/flower.svg"
      alt="Flower - GetBold Agency"
      className={`absolute ${top && top} ${right && right} ${left && left} ${bottom && bottom
        } ${mobileTop && mobileTop} ${mobileRight && mobileRight} ${mobileLeft && mobileLeft
        } ${mobileBottom && mobileBottom} z-10`}
      ref={Parallax.ref}
    />
  );
};

export const Chat: React.FC<Props> = ({
  top,
  right,
  left,
  bottom,
  mobileTop,
  mobileRight,
  mobileLeft,
  mobileBottom,
}) => {
  const Parallax = useParallax<HTMLImageElement>({
    translateX: ["0px", "200px"],
  });
  return (
    <img
      src="../../../../assets/layout-elements/chat.png"
      alt="Chat - GetBold Agency"
      className={`absolute ${top && top} ${right && right} ${left && left} ${bottom && bottom
        } ${mobileTop && mobileTop} ${mobileRight && mobileRight} ${mobileLeft && mobileLeft
        } ${mobileBottom && mobileBottom} -z-10 h-auto`}
      ref={Parallax.ref}
    />
  );
};

export const Ball: React.FC<Props> = ({
  top,
  right,
  left,
  bottom,
  mobileTop,
  mobileRight,
  mobileLeft,
  mobileBottom,
}) => {
  const Parallax = useParallax<HTMLImageElement>({
    translateX: ["0px", "200px"],
  });
  return (
    <img
      src="../../../../assets/layout-elements/pinkball.png"
      alt="Pink Ball - GetBold Agency"
      className={`absolute ${top && top} ${right && right} ${left && left} ${bottom && bottom
        } ${mobileTop && mobileTop} ${mobileRight && mobileRight} ${mobileLeft && mobileLeft
        } ${mobileBottom && mobileBottom} -z-10 h-auto`}
      ref={Parallax.ref}
    />
  );
};

export const PinkChart: React.FC<Props> = ({
  top,
  right,
  left,
  bottom,
  mobileTop,
  mobileRight,
  mobileLeft,
  mobileBottom,
}) => {
  const Parallax = useParallax<HTMLImageElement>({
    translateX: ["0px", "200px"],
  });
  return (
    <img
      src="../../../../assets/layout-elements/pinkchart.png"
      alt="Pink Chart - GetBold Agency"
      className={`absolute ${top && top} ${right && right} ${left && left} ${bottom && bottom
        } ${mobileTop && mobileTop} ${mobileRight && mobileRight} ${mobileLeft && mobileLeft
        } ${mobileBottom && mobileBottom} -z-10 h-auto`}
      ref={Parallax.ref}
    />
  );
};

export const BlueCube: React.FC<Props> = ({
  top,
  right,
  left,
  bottom,
  mobileTop,
  mobileRight,
  mobileLeft,
  mobileBottom,
}) => {
  const Parallax = useParallax<HTMLImageElement>({
    translateX: ["0px", "200px"],
  });
  return (
    <img
      src="../../../../assets/layout-elements/bluecube.png"
      alt="Blue Cube - GetBold Agency"
      className={`absolute ${top && top} ${right && right} ${left && left} ${bottom && bottom
        } ${mobileTop && mobileTop} ${mobileRight && mobileRight} ${mobileLeft && mobileLeft
        } ${mobileBottom && mobileBottom} -z-10 h-auto`}
      ref={Parallax.ref}
    />
  );
};


export const LeftSemicircle: React.FC<Props> = ({
  top,
  right,
  left,
  bottom,
  mobileTop,
  mobileRight,
  mobileLeft,
  mobileBottom,
}) => {
  const Parallax = useParallax<HTMLImageElement>({
    translateX: ["0px", "0px"],
  });
  return (
    <img
      src="../../../../assets/layout-elements/semicircle2.svg"
      alt="Blue Cube - GetBold Agency"
      className={`absolute ${top && top} ${right && right} ${left && left} ${bottom && bottom
        } ${mobileTop && mobileTop} ${mobileRight && mobileRight} ${mobileLeft && mobileLeft
        } ${mobileBottom && mobileBottom} -z-10 h-auto`}
      ref={Parallax.ref}
    />
  );
};

export const RightSemicircle: React.FC<Props> = ({
  top,
  right,
  left,
  bottom,
  mobileTop,
  mobileRight,
  mobileLeft,
  mobileBottom,
}) => {
  const Parallax = useParallax<HTMLImageElement>({
    translateX: ["0px", "0px"],
  });
  return (
    <img
      src="../../../../assets/layout-elements/semicircle1.svg"
      alt="Blue Cube - GetBold Agency"
      className={`absolute ${top && top} ${right && right} ${left && left} ${bottom && bottom
        } ${mobileTop && mobileTop} ${mobileRight && mobileRight} ${mobileLeft && mobileLeft
        } ${mobileBottom && mobileBottom} -z-10 h-auto`}
      ref={Parallax.ref}
    />
  );
};

export const FacebookIcon: React.FC<Props> = ({
  top,
  right,
  left,
  bottom,
  mobileTop,
  mobileRight,
  mobileLeft,
  mobileBottom,
}) => {
  const Parallax = useParallax<HTMLImageElement>({
    translateX: ["0px", "0px"],
  });
  return (
    <img
      src="../../../../assets/layout-elements/facebook.svg"
      alt="Blue Cube - GetBold Agency"
      className={`absolute ${top && top} ${right && right} ${left && left} ${bottom && bottom
        } ${mobileTop && mobileTop} ${mobileRight && mobileRight} ${mobileLeft && mobileLeft
        } ${mobileBottom && mobileBottom}  -z-10 h-auto`}
      ref={Parallax.ref}
    />
  );
};

export const InstagramIcon: React.FC<Props> = ({
  top,
  right,
  left,
  bottom,
  mobileTop,
  mobileRight,
  mobileLeft,
  mobileBottom,
}) => {
  const Parallax = useParallax<HTMLImageElement>({
    translateX: ["0px", "0px"],
  });
  return (
    <img
      src="../../../../assets/layout-elements/instagram.svg"
      alt="Blue Cube - GetBold Agency"
      className={`absolute ${top && top} ${right && right} ${left && left} ${bottom && bottom
        } ${mobileTop && mobileTop} ${mobileRight && mobileRight} ${mobileLeft && mobileLeft
        } ${mobileBottom && mobileBottom} -z-20 h-auto `}
      ref={Parallax.ref}
    />
  );
};
