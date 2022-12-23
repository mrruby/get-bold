import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";

export const SidebarBlogPost = () => {
  const tagsAndCats = useStaticQuery(graphql`
    query tagsAndCatsQuery {
      tags: allMarkdownRemark(limit: 2000) {
        group(field: { frontmatter: { tags: SELECT } }) {
          fieldValue
          totalCount
        }
      }
      cats: allMarkdownRemark(limit: 2000) {
        group(field: { frontmatter: { category: SELECT } }) {
          fieldValue
        }
      }
    }
  `);

  return (
    <div className="max-w-[395px] w-full">
      {/* <div className="py-[34px] px-[38px] mb-[50px] bg-white rounded-xl shadow-md border border-[#F8E7E4]">
        <h3 className="text-lg font-extrabold mb-[14px]">Wyszukiwarka</h3>
        <div className="max-w-full relative">
          <button className="bg-[#233176] w-[65px] h-full absolute right-0 rounded-r-xl flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17.88"
              height="17.88"
              viewBox="0 0 17.88 17.88"
            >
              <path
                id="Icon_map-search"
                data-name="Icon map-search"
                d="M14.523,12.144a7.071,7.071,0,1,0-2.38,2.378l4.8,4.8,2.379-2.38Zm-6.029.716A4.362,4.362,0,1,1,12.859,8.5,4.369,4.369,0,0,1,8.495,12.86Z"
                transform="translate(-1.44 -1.44)"
                fill="#fff"
              />
            </svg>
          </button>

          <input
            className="w-full h-[60px] rounded-xl border border-[#F8E7E4] text-sm"
            placeholder="Czego szukasz?"
            type="text"
          />
        </div>
      </div> */}

      <div className="py-[34px] px-[38px] mb-[50px] bg-white rounded-xl shadow-md border border-[#F8E7E4]">
        <h3 className="text-lg font-extrabold mb-[14px]">Kategorie</h3>
        <ul className="space-y-2 list-disc text-getbold-pink">
          {tagsAndCats.cats.group.map((cat, index) => {
            return (
              <Link to={`/kategorie/${cat.fieldValue}`} key={index}>
                <li>
                  <span className="text-getbold-blue">{cat.fieldValue}</span>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>

      <div className="py-[34px] px-[38px] mb-[50px] bg-white rounded-xl shadow-md border border-[#F8E7E4]">
        <h3 className="text-lg font-extrabold mb-[14px]">Tagi</h3>
        <ul className="flex flex-wrap">
          {tagsAndCats.tags.group.map((tag, index) => {
            return (
              <Link key={index} to={`/tagi/${tag.fieldValue}`}>
                <li className="py-1 px-3 mb-4 m-2 border border-[#FFA3B1] rounded-lg">
                  {tag.fieldValue}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
