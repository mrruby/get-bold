import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { HeadingBlog } from "../components/Blog/heading";
import { PostsBlog } from "../components/Blog/posts";
import { SidebarBlogPost } from "../components/BlogPost/sidebar";
import Layout from "../components/Layout/Layout";
import { SEO } from "../components/Seo";
import { BlogProvider } from "../utils/context/blogContext";
import MaxWithBgColorContainer from "../components/Layout/Layout/MaxWithBgColorContainer";

const BlogPage = () => {
  return (
    <ParallaxProvider>
      <BlogProvider>
        <Layout
          yellowCircle={true}
          yellowCircle2={false}
          orangeHex={true}
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
          cube={true}
          graph={true}
          card={true}
          leftCloud={true}
          rightCloud={true}
          flower={true}
          coin={true}
          chat={false}
          ball={false}
          pinkChart={false}
          blueCube={false}
          isContactPage={false}
        >
          <HeadingBlog />
          <MaxWithBgColorContainer>
            <div className="flex flex-col md:items-start md:flex-row space-y-12 md:space-y-0 md:space-x-12 pb-24 p-8 lg:max-w-[1176px]">
              <PostsBlog />
              <SidebarBlogPost />
            </div>
          </MaxWithBgColorContainer>
        </Layout>
      </BlogProvider>
    </ParallaxProvider>
  );
};

export const Head = () => <SEO title="Blog - GetBold" />;

export default BlogPage;
