import React, { ReactElement } from "react";
import Container from "../../components/Layout/OffertLayout/Container";

interface Props {
  firstPartTitle?: string | ReactElement;
  circledText?: string;
  secPartTitle?: string | ReactElement;
  firstPartParagraph?: string;
  secPartParagraph?: string;
  firstPartAdditionalParagraph?: string;
  secPartAdditionalParagraph?: string;
  pageName?: string;
}

export const PageHeading: React.FC<Props> = ({
  firstPartTitle,
  circledText,
  secPartTitle,
  firstPartParagraph,
  secPartParagraph,
  firstPartAdditionalParagraph,
  secPartAdditionalParagraph,
  pageName,
}) => {
  return (
    <Container height="lg:h-[592px]">
      <main className="p-2 lg:px-24 lg:pt-6 lg:pb-[190px] -z-10 flex flex-col text-left min-h-[620px]">
        {/* <h2 className="text-xl font-poppins text-[#EF6278] mb-[22px] lg:w-[1024px]">
        {pageName}
      </h2> */}
        <h1 className="text-3xl lg:text-[40px] lg:leading-normal lg:w-[1024px]  text-[#1F2957] font-bold max-w-[535px]">
          {firstPartTitle}
          <span className="text-white">
            <span className="relative whitespace-pre">
              {circledText}
              <svg
                className="absolute -top-6 md:-top-4 left-0 -z-10 w-full"
                xmlns="http://www.w3.org/2000/svg"
                width="285.128"
                height="92.961"
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
            </span>
            {secPartTitle}
          </span>
        </h1>
        <p className="text-[20px] leading-normal my-[30px] max-w-[535px]">{firstPartParagraph}
          <span className="font-bold">
            {secPartParagraph}
          </span>
        </p>
        <p className="text-2xl leading-normal font-medium max-w-[535px]">{firstPartAdditionalParagraph}
          <span className="font-bold">
            {secPartAdditionalParagraph}
          </span>
        </p>
      </main>
    </Container>

  );
};
