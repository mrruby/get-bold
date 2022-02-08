import React from "react";
import { SubpageLayout } from "../components/Layout/subpageLayout";
import { BoxesOffert } from "../components/Offert/boxes";
import { OffertElements } from "../components/Offert/elements";
import { HeadingOffert } from "../components/Offert/heading";
import { OffertOffert } from "../components/Offert/offert";

const OffertPage = () => {
  return (
    <SubpageLayout>
      <HeadingOffert />
      <BoxesOffert />
      <OffertOffert />
      <OffertElements />
    </SubpageLayout>
  );
};

export default OffertPage;
