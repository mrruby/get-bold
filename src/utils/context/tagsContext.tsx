import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { createContext } from "react";

export const TagsContext = createContext<any>([]);

export const TagsProvider = ({ children }) => {
  const tagsData = useStaticQuery(graphql`
    query tagQuery {
      allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `);

  return (
    <TagsContext.Provider value={tagsData.allMarkdownRemark.group}>
      {children}
    </TagsContext.Provider>
  );
};
