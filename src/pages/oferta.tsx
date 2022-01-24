import React from "react";
import { SubpageLayout } from "../components/Layout/subpageLayout";
import { BoxesOffert } from "../components/Offert/boxes";
import { HeadingOffert } from "../components/Offert/heading";
import { OffertOffert } from "../components/Offert/offert";

const OffertPage = () => {
  return (
    <SubpageLayout>
      <HeadingOffert />
      <BoxesOffert />
      <OffertOffert />
    </SubpageLayout>
  );
};

export default OffertPage;
