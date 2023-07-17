import React from "react";

export const HomeAboutHeading = () => {
  return (
    <div className="flex flex-col items-center lg:w-[71rem] px-8 mb-32">
      <h2 className="tracking-[4px] text-xl font-poppins text-getbold-pink mb-6">
        O nas
      </h2>
      <h3 className="text-3xl lg:text-4xl lg:leading-normal font-medium mb-12 text-center">
        Po długim czasie pracy w agencjach <br /> marketingowych,{" "}
        <span className="font-bold text-getbold-pink relative whitespace-pre">
          <svg
            className="absolute -bottom-2 left-4 w-full"
            xmlns="http://www.w3.org/2000/svg"
            width="455.934"
            height="5.749"
            viewBox="0 0 455.934 5.749"
          >
            <path
              id="Path_832"
              data-name="Path 832"
              d="M275.18,389.83c35.825-.941,71.974-.326,107.867-.615,36.94-.3,73.9-.121,110.843-.022q55.718.15,111.417.672c38.826.373,78.3-1.39,116.9.8,7.156.4,10.244-4.066,3.019-4.474-36.764-2.083-73.56-.432-110.473-.864-38.743-.453-77.5-.414-116.257-.34-38.482.075-76.975.112-115.444.571-36.292.431-72.4.486-108.347,2.824-2.016.131-1.536,1.5.479,1.451Z"
              transform="translate(-273.407 -384.938)"
              fill="#f8e7e4"
            />
          </svg>
          stawiamy na siebie.
        </span>
      </h3>
    </div>
  );
};
