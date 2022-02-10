import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { HeadingBlog } from "../components/Blog/heading";
import { PostsBlog } from "../components/Blog/posts";
import { SidebarBlogPost } from "../components/BlogPost/sidebar";
import SubpageLayout from "../components/Layout/SubpageLayout/index";
import TagsLayout from "../components/Layout/TagsLayout";
import { HeadingTags } from "../components/Tags/heading";
import { TagsList } from "../components/Tags/tagsList";
import { TagsProvider } from "../utils/context/tagsContext";

const TagsPage = () => {
  return (
    <ParallaxProvider>
      <TagsProvider>
        <TagsLayout>
          <HeadingTags />
          <TagsList />
        </TagsLayout>
      </TagsProvider>
    </ParallaxProvider>
  );
};

export default TagsPage;
