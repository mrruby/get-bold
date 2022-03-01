import React from "react";
import Layout from "../components/Layout/Layout";
import { HeadingTags } from "../components/Tags/heading";
import { TagsList } from "../components/Tags/tagsList";
import { TagsProvider } from "../utils/context/tagsContext";

const TagsPage = () => {
  return (
    <TagsProvider>
      <Layout
        title={"Tagi - GetBold"}
        yellowCircle={false}
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
        leftCloud={false}
        rightCloud={false}
        flower={false}
        coin={false}
        chat={false}
        ball={false}
        pinkChart={false}
        blueCube={false}
        isContactPage={false}
        footerWhiteBg={false}
      >
        <HeadingTags />
        <TagsList />
      </Layout>
    </TagsProvider>
  );
};

export default TagsPage;
