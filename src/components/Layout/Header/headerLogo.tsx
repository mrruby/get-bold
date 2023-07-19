import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

export const HeaderLogo = () => {
  return (
    <div className="relative flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="162"
        height="27"
        className="absolute -left-9"
        viewBox="0 0 162 27"
      >
      </svg>

      <Link to="/">
        <StaticImage placeholder="none" src="../../../images/logo.svg" alt="Logo" />
      </Link>
    </div>
  );
};
