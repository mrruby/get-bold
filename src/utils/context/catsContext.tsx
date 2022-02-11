import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { createContext } from "react";

interface ICatsContext {
  fieldValue: string;
}

export const CatsContext = createContext<ICatsContext[]>([]);

export const CatsProvider = ({ children }) => {
  const catsData = useStaticQuery(graphql`
    query catsQuery {
      allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___category) {
          fieldValue
        }
      }
    }
  `);

  return (
    <CatsContext.Provider value={catsData.allMarkdownRemark.group}>
      {children}
    </CatsContext.Provider>
  );
};
