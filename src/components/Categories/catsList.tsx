import { Link } from "gatsby";
import React, { useContext } from "react";
import { CatsContext } from "../../utils/context/catsContext";

export const CatsList = () => {
  const cats = useContext(CatsContext);
  return (
    <div className="flex justify-center w-full px-8">
      <ul className="flex items-center justify-center max-w-[777px] bg-white p-8 shadow-lg rounded-2xl flex-wrap">
        {cats.map((cat, index) => {
          return (
            <Link to={`/kategorie/${cat.fieldValue}`}>
              <li
                key={index}
                className="py-1 px-3 mb-4 m-2 border border-[#FFA3B1] rounded-lg"
              >
                {cat.fieldValue}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};
