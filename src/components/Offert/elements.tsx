import React from "react";

export const OffertElements = () => {
  return (
    <>
      {/* coin img */}
      <img
        src="../../../../coin.png"
        alt=""
        className="absolute top-[372px] right-2 md:right-[300px] -z-10 h-auto"
      />

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
    </>
  );
};
