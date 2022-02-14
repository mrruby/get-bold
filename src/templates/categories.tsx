import React from "react";
import { graphql, PageProps } from "gatsby";
import { markdownRemark } from "../utils/types/markdown-remark";
import { HeadingBlogPost } from "../components/BlogPost/heading";
import { SidebarBlogPost } from "../components/BlogPost/sidebar";
import { ContentBlogPost } from "../components/BlogPost/content";
import { ParallaxProvider } from "react-scroll-parallax";
import BlogPostLayout from "../components/Layout/BlogPostLayout";
import TagsLayout from "../components/Layout/TagsLayout";
import { HeadingTagTemplate } from "../components/TagAndCatTemplate/heading";
import { TagsPosts } from "../components/TagAndCatTemplate/tagsPosts";

interface Props {
  data: any;
  pageContext: {
    cat: string;
  };
}

const CatPage: React.FC<Props> = ({ data, pageContext }) => {
  const { cat } = pageContext;
  const posts = data.allMarkdownRemark.nodes;

  return (
    <ParallaxProvider>
      <TagsLayout title={`${cat} - GetBold`}>
        <HeadingTagTemplate head={cat} cat={true} />
        <div className="flex flex-col md:items-start md:flex-row space-y-12 md:space-y-0 md:space-x-12 pb-24 p-8 lg:max-w-[1176px]">
          <TagsPosts posts={posts} />
          <SidebarBlogPost />
        </div>
      </TagsLayout>
    </ParallaxProvider>
  );
};

export default CatPage;

export const pageQuery = graphql`
  query Cat($cat: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { in: [$cat] } } }
    ) {
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