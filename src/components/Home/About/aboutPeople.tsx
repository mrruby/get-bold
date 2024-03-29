import { Link } from "gatsby";
import React from "react";
import { AboutPhoto } from "../../../helpers/AboutPhoto";
import { Button } from "../../../helpers/Button";

export const HomeAboutPeople = () => {
  return (
    <div className="flex flex-col lg:flex-row space-y-20 lg:space-y-0 items-center justify-center max-w-[1100px]">
      <div className="relative flex flex-col items-center w-full h-full">
        <AboutPhoto
          link="../../ada.webp"
        />
        <div className="mt-[3.375rem] flex flex-col items-center">
          <h4 className="font-bold text-xl lg:text-[1.75rem] mb-2">
            Adrianna Promis
          </h4>
          <p className="text-base text-center mb-10">Strategiczny marketing</p>
          <Link to="o-nas">
            <Button
              type="submit"
              color="pink"
              isWFull={false}
              text="Dowiedz się więcej!"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
