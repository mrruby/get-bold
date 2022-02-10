import { Link } from "gatsby";
import React, { useContext } from "react";
import { TagsContext } from "../../utils/context/tagsContext";

export const TagsList = () => {
  const tags = useContext(TagsContext);
  return (
    <div className="flex justify-center w-full px-8">
      <ul className="flex items-center justify-center max-w-[777px] bg-white p-8 shadow-lg rounded-2xl flex-wrap">
        {tags.map((tag, index) => {
          return (
            <Link to={`/tagi/${tag.fieldValue}`}>
              <li
                key={index}
                className="py-1 px-3 mb-4 m-2 border border-[#FFA3B1] rounded-lg"
              >
                {tag.fieldValue}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};
