import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { createContext } from "react";
import { markdownRemark } from "../types/markdown-remark";

export const BlogContext = createContext<markdownRemark[]>([]);

export const BlogProvider = ({ children }) => {
  const blogData = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
        nodes {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD.MM.YYYY")
            description
            author
            category
            tags
            thumbnail
            authorImg
          }
        }
      }
    }
  `);

  return (
    <BlogContext.Provider value={blogData.allMarkdownRemark.nodes}>{children}</BlogContext.Provider>
  );
};
