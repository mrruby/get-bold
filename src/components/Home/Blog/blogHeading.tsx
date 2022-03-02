import React from "react";

export const HomeBlogHeading = () => {
  return (
    <div className="flex flex-col items-center lg:w-[71rem] mb-14">
      <h2 className="tracking-[4px] text-xl font-bebas text-getbold-pink mb-6">
        Blog
      </h2>
      <h3 className="text-3xl lg:text-4xl lg:leading-normal font-medium mb-12 text-center">
        Poczytaj o tym, na czym znamy <br /> się{" "}
        <span className="font-bold text-getbold-pink relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -z-10 -bottom-2 left-1"
            viewBox="0 0 214.35 5.75"
          >
            <path
              id="Path_2258"
              data-name="Path 2258"
              d="M274.241,389.83c16.842-.941,33.838-.326,50.712-.615,17.367-.3,34.744-.121,52.111-.022q26.2.15,52.381.672c18.254.373,36.81-1.39,54.956.8,3.364.4,4.816-4.066,1.419-4.474-17.284-2.083-34.583-.432-51.937-.864-18.214-.453-36.437-.414-54.656-.34-18.091.075-36.189.112-54.274.571-17.062.431-34.039.486-50.937,2.824-.948.131-.722,1.5.225,1.451Z"
              transform="translate(-273.407 -384.938)"
              fill="#f8e7e4"
            />
          </svg>
          <svg
            className="absolute -z-10 -bottom-2 left-1 w-full"
            xmlns="http://www.w3.org/2000/svg"
            width="214.35"
            height="5.75"
            viewBox="0 0 214.35 5.75"
          >
            <path
              id="Path_2258"
              data-name="Path 2258"
              d="M274.241,389.83c16.842-.941,33.838-.326,50.712-.615,17.367-.3,34.744-.121,52.111-.022q26.2.15,52.381.672c18.254.373,36.81-1.39,54.956.8,3.364.4,4.816-4.066,1.419-4.474-17.284-2.083-34.583-.432-51.937-.864-18.214-.453-36.437-.414-54.656-.34-18.091.075-36.189.112-54.274.571-17.062.431-34.039.486-50.937,2.824-.948.131-.722,1.5.225,1.451Z"
              transform="translate(-273.407 -384.938)"
              fill="#f8e7e4"
            />
          </svg>
          najlepiej.
        </span>
      </h3>
    </div>
  );
};
