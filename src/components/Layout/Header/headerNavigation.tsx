import React from "react";
import { Link } from "gatsby";

export const HeaderNavigation = () => {
  return (
    <nav className="hidden lg:block">
      <ul className="flex space-x-2 lg:space-x-12 font-bold items-center">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/oferta">
          <li>Oferta</li>
        </Link>
        <Link to="/o-nas">
          <li>O Nas</li>
        </Link>
        <Link to="/portfolio">
          <li>Portfolio</li>
        </Link>
        <Link to="/blog">
          <li>Blog</li>
        </Link>
        <Link to="/kontakt">
          <li>Kontakt</li>
        </Link>
      </ul>
    </nav>
  );
};
