import { Link } from "gatsby";
import React from "react";
import { Button } from "../../../helpers/Button";

export const HomePortfolioButton = () => {
  return (
    <div className="mt-[3.875rem]">
      <Link to="/portfolio">
        <Button
          text="Zobacz wszystko"
          color="pink"
          type="button"
          isWFull={false}
        />
      </Link>
    </div>
  );
};
