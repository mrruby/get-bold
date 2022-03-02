import React from "react";
import { graphql } from "gatsby";
import { SidebarBlogPost } from "../components/BlogPost/sidebar";
import { HeadingTagTemplate } from "../components/TagAndCatTemplate/heading";
import { TagsPosts } from "../components/TagAndCatTemplate/tagsPosts";
import Layout from "../components/Layout/Layout";
import { ParallaxProvider } from "react-scroll-parallax";

interface Props {
  data: any;
  pageContext: {
    tag: string;
  };
}

const TagPage: React.FC<Props> = ({ data, pageContext }) => {
  const { tag } = pageContext;
  const posts = data.allMarkdownRemark.nodes;

  return (
    <ParallaxProvider>
      <Layout
        title={`${tag} - GetBold`}
        yellowCircle={true}
        yellowCircle2={false}
        orangeHex={false}
        grayTriangle={false}
        pinkTriangle={false}
        blueHex={false}
        redCircle={false}
        yellowSquare={false}
        blueSquare={false}
        heroBG={true}
        firstMidBG={false}
        secMidBG={false}
        isSubPage={true}
        cube={false}
        graph={false}
        card={false}
        leftCloud={true}
        rightCloud={true}
        flower={false}
        coin={false}
        chat={false}
        ball={false}
        pinkChart={false}
        blueCube={false}
        isContactPage={false}
        footerWhiteBg={true}
      >
        <HeadingTagTemplate head={tag} tag={true} />
        <div className="flex flex-col md:items-start md:flex-row space-y-12 md:space-y-0 md:space-x-12 pb-24 p-8 lg:max-w-[1176px]">
          <TagsPosts posts={posts} />
          <SidebarBlogPost />
        </div>
      </Layout>
    </ParallaxProvider>
  );
};

export default TagPage;

export const pageQuery = graphql`
  query Tag($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
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
