import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export const Header = () => {
  return (
    <header className="px-4 max-w-7xl mx-auto flex items-center justify-between h-40">
      <div>
        <StaticImage src="../images/logo.svg" alt="Logo" />
      </div>
      <nav>
        <ul className="flex space-x-12 font-bold items-center">
          <li>Home</li>
          <li>Oferta</li>
          <li>O Nas</li>
          <li>Portfolio</li>
          <li>Blog</li>
          <li>Kontakt</li>
          <button className="rounded-3xl bg-getbold-blue px-8 py-3 text-white font-semibold">
            Aplikacje Mobilne
          </button>
        </ul>
      </nav>
    </header>
  );
};
