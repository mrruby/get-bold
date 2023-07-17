import React from "react";

export const HeadingPortfolio = () => {
  return (
    <main className="p-8 -mt-40 pt-64 -z-10 flex flex-col items-center text-center">
      <h2 className="text-xl font-poppins text-[#EF6278] mb-[22px] lg:w-[1024px]">
        Portfolio
      </h2>
      <h3 className="text-3xl lg:text-4xl lg:w-[1024px] text-[#1F2957] font-bold mb-[30px]">
        Jesteśmy dumni z naszego{" "}
        <span className="relative whitespace-pre">
          portfolio.
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -top-2 -left-2 -z-10"
            viewBox="0 0 263.685 86.189"
          >
            <path
              id="Path_357"
              data-name="Path 357"
              d="M350.055,17.928c-35.874,2.506-71.749,9.4-100.237,23.817-15.827,8.148-34.819,22.564-18.992,35.1,8.442,7.521,24.269,10.656,39.04,11.909,22.157,3.134,46.425,2.507,69.638.627A502.3,502.3,0,0,0,416.527,78.1c18.992-4.388,39.038-10.029,53.811-18.8,8.44-5.015,15.827-12.536,8.44-19.43-7.386-7.521-25.323-10.655-39.04-12.535C400.7,21.689,355.33,22.942,316.29,28.583c-21.1,3.134-40.094,7.521-52.755,18.176"
              transform="matrix(0.999, 0.035, -0.035, 0.999, -219.351, -23.557)"
              fill="none"
              stroke="#ffa3b1"
              stroke-linecap="round"
              stroke-linejoin="bevel"
              stroke-width="4"
            />
          </svg>
        </span>
      </h3>
      <p className="text-base font-medium lg:w-[777px]">
        Może też staniesz się kiedyś jego częścią?
      </p>
    </main>
  );
};
