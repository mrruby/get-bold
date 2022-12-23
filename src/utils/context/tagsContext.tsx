import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { createContext } from "react";

interface ITagsContext {
  fieldValue: string;
}

export const TagsContext = createContext<ITagsContext[]>([]);

export const TagsProvider = ({ children }) => {
  const tagsData = useStaticQuery(graphql`
    query tagQuery {
      allMarkdownRemark(limit: 2000) {
        group(field: { frontmatter: { tags: SELECT } }) {
          fieldValue
          totalCount
        }
      }
    }
  `);

  return (
    <TagsContext.Provider value={tagsData.allMarkdownRemark.group}>{children}</TagsContext.Provider>
  );
};
