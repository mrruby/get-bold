import { Link } from "gatsby";
import React from "react";
import { Button } from "../../../helpers/Button";

export const HomeHeroHeading = () => {
  return (
    <div className="w-full mb-10 lg:m-0 lg:w-2/5 relative">
      <h3 className="text-getbold-btn-pink font-bebas text-2xl mb-4 lg:mb-8">
        Getbold.Agency
      </h3>
      <h1 className="text-4xl lg:text-6xl text-[#1F2957] leading-none font-extrabold mb-3 lg:mb-8">
        Jesteśmy Get Bold.
      </h1>
      <h2 className="text-3xl lg:text-4xl font-medium leading-tight mb-8 lg:mb-8">
        Z nami Twój biznes może więcej.{" "}
        <span className="relative whitespace-pre">
          <svg
            className="absolute -z-10 -top-2 -left-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 285.128 92.961"
          >
            <path
              id="Path_357"
              data-name="Path 357"
              d="M360.4,17.928c-38.84,2.714-77.681,10.179-108.524,25.786-17.135,8.822-37.7,24.429-20.562,38,9.14,8.143,26.275,11.537,42.267,12.894,23.989,3.393,50.263,2.715,75.395.679a543.826,543.826,0,0,0,83.392-12.215c20.562-4.75,42.266-10.858,58.259-20.358,9.138-5.429,17.135-13.572,9.138-21.037-8-8.143-27.416-11.536-42.267-13.571-42.266-6.107-91.387-4.75-133.654,1.357C301,32.856,280.44,37.607,266.731,49.142"
              transform="matrix(0.999, 0.035, -0.035, 0.999, -219.137, -23.557)"
              fill="none"
              stroke="#ffa3b1"
              stroke-linecap="round"
              stroke-linejoin="bevel"
              stroke-width="4"
            />
          </svg>
          Po prostu.
        </span>
      </h2>
      <Link to="/portfolio">
        <Button
          type="button"
          text="Sprawdź, co potrafimy!"
          isWFull={false}
          color="pink"
        />
      </Link>
    </div>
  );
};
