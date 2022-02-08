import React from "react";

export const PortfolioElements = () => {
  return (
    <>
      {/* ball img */}
      <img
        src="../../../../pinkball.png"
        alt=""
        className="absolute top-[600px] right-2 md:right-10 -z-10 h-auto"
      />

      {/* pink chart img */}
      <img
        src="../../../../pinkchart.png"
        alt=""
        className="absolute top-[300px] right-2 md:right-20 -z-10 h-auto"
      />

      {/* blue cube img */}
      <img
        src="../../../../bluecube.png"
        alt=""
        className="absolute top-[250px] right-2 md:right-64 -z-10 h-auto"
      />
    </>
  );
};
