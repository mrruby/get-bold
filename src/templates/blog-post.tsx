import React from "react";
import { graphql, PageProps } from "gatsby";
import { markdownRemark } from "../utils/types/markdown-remark";
import { HeadingBlogPost } from "../components/BlogPost/heading";
import { SidebarBlogPost } from "../components/BlogPost/sidebar";
import { ContentBlogPost } from "../components/BlogPost/content";
import SubpageLayout from "../components/Layout/SubpageLayout";

type GraphQLResult = {
  markdownRemark: markdownRemark;
};

const BlogPost: React.FC<PageProps<GraphQLResult>> = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <SubpageLayout>
      <div className="flex flex-col">
        <HeadingBlogPost
          category={post.frontmatter.category}
          title={post.frontmatter.title}
          author={post.frontmatter.author}
          authorImg={post.frontmatter.authorImg}
          date={post.frontmatter.date}
        />
        <div className="flex flex-col md:items-start md:flex-row space-y-12 md:space-y-0 md:space-x-12 pb-24 p-8 lg:max-w-[1176px]">
          <ContentBlogPost
            html={post.html}
            thumbnail={post.frontmatter.thumbnail}
            tags={post.frontmatter.tags}
          />
          <SidebarBlogPost />
        </div>
      </div>
    </SubpageLayout>
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
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
`;
