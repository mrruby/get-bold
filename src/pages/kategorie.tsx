import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { CatsList } from "../components/Categories/catsList";
import { HeadingCats } from "../components/Categories/heading";
import TagsLayout from "../components/Layout/TagsLayout";
import { CatsProvider } from "../utils/context/catsContext";

const TagsPage = () => {
  return (
    <ParallaxProvider>
      <CatsProvider>
        <TagsLayout>
          <HeadingCats />
          <CatsList />
        </TagsLayout>
      </CatsProvider>
    </ParallaxProvider>
  );
};

export default TagsPage;
