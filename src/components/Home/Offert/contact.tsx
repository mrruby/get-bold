import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export const OffertContact = () => {
  return (
    <div className="flex flex-col items-center mt-14 px-8">
      <h4 className="text-lg lg:text-xl text-center font-bold mb-[2.25rem]">
        Chcesz otrzymać niezobowiązującą{" "}
        <span className="font-black relative">
          propozycję?
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="146.425"
            height="51.751"
            className="absolute -top-4 -left-2 -z-10"
            viewBox="0 0 146.425 51.751"
          >
            <path
              id="Path_842"
              data-name="Path 842"
              d="M294.443,17.928c-19.937,1.533-39.875,5.751-55.707,14.57-8.8,4.985-19.351,13.8-10.555,21.471,4.692,4.6,13.487,6.519,21.7,7.285,12.314,1.917,25.8,1.534,38.7.384a255.386,255.386,0,0,0,42.806-6.9c10.555-2.684,21.7-6.135,29.906-11.5,4.691-3.068,8.8-7.669,4.691-11.886-4.1-4.6-14.073-6.518-21.7-7.668-21.7-3.451-46.911-2.684-68.607.767-11.727,1.917-22.282,4.6-29.319,11.119"
              transform="matrix(0.999, 0.035, -0.035, 0.999, -221.457, -24.655)"
              fill="none"
              stroke="#ffa3b1"
              stroke-linecap="round"
              stroke-linejoin="bevel"
              stroke-width="2"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="76.957"
            height="69.285"
            className="hidden sm:block absolute top-10 right-12 -z-10"
            viewBox="0 0 76.957 69.285"
          >
            <g
              id="Group_89"
              data-name="Group 89"
              transform="translate(-738.291 302.667) rotate(-112)"
            >
              <g
                id="Group_87"
                data-name="Group 87"
                transform="translate(-59.8 788.576)"
              >
                <path
                  id="Path_840"
                  data-name="Path 840"
                  d="M-16.532,848.223c-10.477,9.542-27.049,4.379-34.791-6.583-5.2-7.363-6.238-16.776-5.718-25.706.558-9.6,2.506-20.117,7.029-28.526.887-1.648,3.3-.161,2.4,1.485-4.018,7.377-5.619,16.235-6.581,24.618-.956,8.339-.387,17.127,3.587,24.557,6.1,11.414,23.145,17.354,33.594,9.5.368-.276.822.35.481.66Z"
                  transform="translate(57.161 -786.691)"
                  fill="#ffa3b1"
                />
              </g>
              <g
                id="Group_88"
                data-name="Group 88"
                transform="translate(-66.133 786.691)"
              >
                <path
                  id="Path_841"
                  data-name="Path 841"
                  d="M-62.064,855.492a15.523,15.523,0,0,1-3.224,2.151.559.559,0,0,1-.815-.625c2.4-6.927,8.9-13.952,15.7-16.685.876-.352,1.649.517,1.71,1.3.349,4.489-.258,9.008.479,13.468.565,3.416,2.027,6.685,2.666,10.09.373,1.992-2.613,2.862-3.066.845-.787-3.51-2.28-6.928-2.742-10.51-.6-4.632.157-9.249-.038-13.894l1.71,1.3c-3.426,1.235-5.764,3.467-8.324,5.942-2.679,2.592-5.387,5.2-7.085,8.566l-.627-.815a14.9,14.9,0,0,0,3.291-1.605c.28-.194.607.24.361.467Z"
                  transform="translate(66.133 -840.252)"
                  fill="#ffa3b1"
                />
              </g>
            </g>
          </svg>
        </span>
      </h4>
      <button className="rounded-3xl bg-getbold-btn-pink px-14 py-3 text-white font-semibold pointer">
        Skontaktuj się!
      </button>
    </div>
  );
};
