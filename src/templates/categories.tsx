import React from "react";
import { graphql } from "gatsby";
import { SidebarBlogPost } from "../components/BlogPost/sidebar";
import { HeadingTagTemplate } from "../components/TagAndCatTemplate/heading";
import { TagsPosts } from "../components/TagAndCatTemplate/tagsPosts";
import Layout from "../components/Layout/Layout";
import { ParallaxProvider } from "react-scroll-parallax";
import { SEO } from "../components/Seo";

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
      <Layout
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
      >
        <HeadingTagTemplate head={cat} cat={true} />
        <div className="flex flex-col md:items-start md:flex-row space-y-12 md:space-y-0 md:space-x-12 pb-24 p-8 lg:max-w-[1176px]">
          <TagsPosts posts={posts} />
          <SidebarBlogPost />
        </div>
      </Layout>
    </ParallaxProvider>
  );
};

export const Head = ({ pageContext: { cat } }) => <SEO title={`${cat} - GetBold`} />;

export default CatPage;

export const pageQuery = graphql`
  query Cat($cat: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
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
