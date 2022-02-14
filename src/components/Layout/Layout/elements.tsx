import React from "react";
import { Parallax } from "react-scroll-parallax";
export const LayoutElements = () => {
  return (
    <>
      {/* yellow circle */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 196.422 196.422"
        className="absolute top-[48rem] -left-8 md:-left-16 -z-10 w-[6rem] md:w-[10rem] h-auto"
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

      {/* orange hex */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 251.035 231.05"
        className="absolute top-[64rem] -right-6 md:-right-12 w-[6rem] md:w-[10rem] -z-10"
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

      {/* gray triangle */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-[1550px] -left-2 md:-left-4 w-[6rem] md:w-[10rem] -z-10"
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

      {/* pink triangle */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-[1933px] right-4 md:right-2 w-[6rem] md:w-[10rem] -z-10"
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

      {/* blue hex */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-[2300px] -left-12 md:-left-16 w-[6rem] md:w-[10rem] -z-10"
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

      {/* red circle */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-[3200px] -right-2 md:-right-0 w-[6rem] md:w-[10rem] -z-10"
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

      {/* yellow square */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-[3500px] left-8 md:left-4 w-[6rem] md:w-[10rem] -z-10"
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

      {/* blue square */}

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-[4430px] right-8 md:right-4 w-[6rem] md:w-[10rem] -z-30"
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

      {/* yellow circle */}

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 196.422 196.422"
        className="absolute top-[5330px] -left-8 md:-left-16 -z-10 w-[6rem] md:w-[10rem] h-auto"
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

      {/* backgrounds */}
      <Parallax
        speed={20}
        className="absolute top-0 left-0 min-h-full w-full bg-image-home -z-20"
      ></Parallax>
      <Parallax
        speed={20}
        className="absolute top-[1600px] left-0 h-[1800px] w-full bg-image-home-portfolio -z-20"
      ></Parallax>
      <Parallax
        speed={20}
        className="absolute top-[4481px] left-0 h-[1000px] w-full bg-image-home-references -z-20"
      ></Parallax>
    </>
  );
};
