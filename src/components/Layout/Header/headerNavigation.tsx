import React from "react";
import { Link } from "gatsby";

export const HeaderNavigation = () => {
  return (
    <nav className="hidden lg:block">
      <ul className="flex space-x-2 lg:space-x-12 font-bold items-center">
        <Link
          to="/"
          activeStyle={{
            color: "#EF6278",
            fontWeight: 700,
            borderBottom: "2px solid #EF6278",
          }}
          className="py-1 hover:text-[#EF6278] hover:border-b-2 hover:border-[#EF6278]"
        >
          <li>Home</li>
        </Link>
        <Link
          to="/oferta"
          activeStyle={{
            color: "#EF6278",
            fontWeight: 700,
            borderBottom: "2px solid #EF6278",
          }}
          className="py-1 hover:text-[#EF6278] hover:border-b-2 hover:border-[#EF6278]"
        >
          <li>Oferta</li>
        </Link>
        <Link
          to="/o-nas"
          activeStyle={{
            color: "#EF6278",
            fontWeight: 700,
            borderBottom: "2px solid #EF6278",
          }}
          className="py-1 hover:text-[#EF6278] hover:border-b-2 hover:border-[#EF6278]"
        >
          <li>O Nas</li>
        </Link>
        <Link
          to="/portfolio"
          activeStyle={{
            color: "#EF6278",
            fontWeight: 700,
            borderBottom: "2px solid #EF6278",
          }}
          className="py-1 hover:text-[#EF6278] hover:border-b-2 hover:border-[#EF6278]"
        >
          <li>Portfolio</li>
        </Link>
        <Link
          to="/blog"
          activeStyle={{
            color: "#EF6278",
            fontWeight: 700,
            borderBottom: "2px solid #EF6278",
          }}
          className="py-1 hover:text-[#EF6278] hover:border-b-2 hover:border-[#EF6278]"
        >
          <li>Blog</li>
        </Link>
        <Link
          to="/kontakt"
          activeStyle={{
            color: "#EF6278",
            fontWeight: 700,
            borderBottom: "2px solid #EF6278",
          }}
          className="py-1 hover:text-[#EF6278] hover:border-b-2 hover:border-[#EF6278]"
        >
          <li>Kontakt</li>
        </Link>
      </ul>
    </nav>
  );
};
