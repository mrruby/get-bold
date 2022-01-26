import { graphql, PageProps } from "gatsby";
import React from "react";
import { HeadingBlog } from "../components/Blog/heading";
import { PostsBlog } from "../components/Blog/posts";
import { SidebarBlogPost } from "../components/BlogPost/sidebar";
import { SubpageLayout } from "../components/Layout/subpageLayout";
import { markdownRemark } from "../types/markdown-remark";

type GraphQLResult = {
  allMarkdownRemark: {
    nodes: markdownRemark[];
  };
};

const BlogPage: React.FC<PageProps<GraphQLResult>> = ({ data }) => {
  return (
    <SubpageLayout>
      <HeadingBlog />
      <div className="flex flex-col md:items-start md:flex-row space-y-12 md:space-y-0 md:space-x-12 pb-24 p-8">
        <PostsBlog data={data} />
        <SidebarBlogPost />
      </div>
    </SubpageLayout>
  );
};

export default BlogPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
`;
