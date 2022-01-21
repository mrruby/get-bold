import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export const Header = () => {
  return (
    <header className="flex items-center justify-between h-40">
      <div className="relative flex items-center">
        <StaticImage
          src="../../images/logo-box.svg"
          alt="Logo Box"
          className="absolute -left-9"
        />
        <StaticImage src="../../images/logo.svg" alt="Logo" />
      </div>
      <nav>
        <ul className="flex space-x-12 font-bold items-center">
          <Link to="">
            <li>Home</li>
          </Link>
          <Link to="">
            <li>Oferta</li>
          </Link>
          <Link to="">
            <li>O Nas</li>
          </Link>
          <Link to="">
            <li>Portfolio</li>
          </Link>
          <Link to="">
            <li>Blog</li>
          </Link>
          <Link to="">
            <li>Kontakt</li>
          </Link>
          <button className="rounded-3xl bg-getbold-blue px-8 py-3 text-white font-semibold pointer">
            Aplikacje Mobilne
          </button>
        </ul>
      </nav>
    </header>
  );
};
