import React from "react";

interface Props {
  reference: string;
  name: string;
  company: string;
}

export const Reference: React.FC<Props> = ({ reference, name, company }) => {
  return (
    <div className="relative md:block w-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="144"
        height="360"
        className="absolute -top-32 w-auto h-auto -left-12"
        viewBox="0 0 144 360"
      >
        <text
          id="_"
          data-name="“"
          transform="translate(0 293)"
          fill="#ffa3b1"
          font-size="300"
          font-family="FilsonSoftMedium, Filson Soft"
          opacity="0.15"
        >
          <tspan x="0" y="0">
            “
          </tspan>
        </text>
      </svg>
      <p className="mb-16 text-lg font-medium italic">{reference}</p>
      <p className="font-extrabold">{name}</p>
      <p className="text-getbold-btn-pink font-semibold">{company}</p>
    </div>
  );
};
