import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { HeadingBlog } from "../components/Blog/heading";
import { PostsBlog } from "../components/Blog/posts";
import { SidebarBlogPost } from "../components/BlogPost/sidebar";
import SubpageLayout from "../components/Layout/SubpageLayout/index";
import { BlogProvider } from "../utils/context/blogContext";

const BlogPage = () => {
  return (
    <ParallaxProvider>
      <BlogProvider>
        <SubpageLayout>
          <HeadingBlog />
          <div className="flex flex-col md:items-start md:flex-row space-y-12 md:space-y-0 md:space-x-12 pb-24 p-8 lg:max-w-[1176px]">
            <PostsBlog />
            <SidebarBlogPost />
          </div>
        </SubpageLayout>
      </BlogProvider>
    </ParallaxProvider>
  );
};

export default BlogPage;
