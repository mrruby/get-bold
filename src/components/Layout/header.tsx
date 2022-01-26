import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";

interface Props {
  isSubPage?: boolean;
}

export const Header: React.FC<Props> = ({ isSubPage }) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false);

  const hamburgerMenuToggle = () => {
    if (isMobileNavOpen) {
      setIsMobileNavOpen(false);
    } else {
      setIsMobileNavOpen(true);
    }
  };

  return (
    <header
      className={`flex items-center justify-between w-full h-40 px-8 xl:px-[150px] ${
        isSubPage && "bg-[#ff728723]"
      }`}
    >
      <div className="relative flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="162"
          height="27"
          className="absolute -left-9"
          viewBox="0 0 162 27"
        >
          <rect
            id="Rectangle_17"
            data-name="Rectangle 17"
            width="162"
            height="27"
            fill="#f8e7e4"
          />
        </svg>

        <StaticImage src="../../images/logo.svg" alt="Logo" />
      </div>

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
          <button className="rounded-3xl bg-getbold-blue px-8 py-3 text-white font-semibold pointer">
            Aplikacje Mobilne
          </button>
        </ul>
      </nav>

      <nav className="lg:hidden z-30">
        <button onClick={() => hamburgerMenuToggle()}>
          {isMobileNavOpen ? (
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </nav>

      {isMobileNavOpen && (
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
      )}
    </header>
  );
};
