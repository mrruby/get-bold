import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import TagsLayout from "../components/Layout/TagsLayout";
import { HeadingTags } from "../components/Tags/heading";
import { TagsList } from "../components/Tags/tagsList";
import { TagsProvider } from "../utils/context/tagsContext";

const TagsPage = () => {
  return (
    <ParallaxProvider>
      <TagsProvider>
        <TagsLayout title={"Tagi - GetBold"}>
          <HeadingTags />
          <TagsList />
        </TagsLayout>
      </TagsProvider>
    </ParallaxProvider>
  );
};

export default TagsPage;
