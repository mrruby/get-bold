import { Link } from "gatsby";
import React from "react";

export const HomePortfolioButton = () => {
  return (
    <div className="mt-[3.875rem]">
      <Link to="/portfolio">
        <button className="px-8 py-3 lg:w-[24.65rem] rounded-3xl bg-getbold-btn-pink text-white font-semibold pointer hover:shadow-lg hover:bg-getbold-pink transition-all">
          Zobacz wszystko
        </button>
      </Link>
    </div>
  );
};
