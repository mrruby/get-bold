import { Link } from "gatsby";
import React from "react";

interface Props {
  html: string;
  thumbnail: string;
  tags: string[];
}

export const ContentBlogPost: React.FC<Props> = ({ html, thumbnail, tags }) => {
  return (
    <div className="w-full">
      <div className="w-full h-[394px] rounded-xl flex justify-center align-center mb-[50px]">
        <img
          src={thumbnail}
          alt=""
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      <section
        className="styled-blogpost-content leading-loose"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <div className="flex flex-col lg:flex-row justify-between items-start">
        <ul className="max-w-3/5 flex flex-wrap">
          {tags.map((tag, index) => {
            return (
              <Link to={`/tagi/${tag}`} key={index}>
                <li className="py-1 px-3 mr-4 mb-4 border border-[#FFA3B1] rounded-lg">
                  {tag}
                </li>
              </Link>
            );
          })}
        </ul>
        <button className="font-medium">Udostępnij</button>
      </div>
    </div>
  );
};
