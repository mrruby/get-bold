import React from "react";
import { Link } from "gatsby";

export const HeaderMobileNavigation = () => {
  return (
    <nav className="lg:hidden fixed top-0 left-0 w-full h-full bg-[#FFB9C4] z-20">
      <ul className="flex flex-col space-y-12 font-bold text-xl items-center p-20">
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
