import React from "react";
import { AboutPhoto } from "../../helpers/AboutPhoto";
import { FaLinkedinIn } from "react-icons/fa";

interface Props {
  isLeft?: boolean;
  name: string;
  title: string;
  linkedin: string;
  photoLink: string;
  ps: string;
  body: JSX.Element;
}

export const TeamMember: React.FC<Props> = ({
  name,
  linkedin,
  photoLink,
  isLeft = true,
  body,
  ps,
  title,
}) => {
  return (
    <div
      className={`flex flex-col ${
        isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
      } max-w-[1500px] mb-16 lg:mb-[168px] px-8 relative`}
    >
      <div
        className={`w-full lg:w-1/2 flex justify-center ${
          isLeft ? "lg:justify-start" : "lg:justify-end"
        } mb-16 lg:mb-0`}
      >
        <AboutPhoto link={photoLink} />
      </div>
      <div className="w-full lg:w-1/2">
        <h4 className="text-xl lg:text-2xl font-bold mb-[30px]">{name}</h4>

        <p className="lg:text-lg font-bold mb-8">{title}</p>

        {body}

        <p className="lg:text-lg italic font-semibold">{ps}</p>

        <div className="flex text-2xl items-center space-x-8 mt-[20px]">
          <a href={linkedin} target="_blank">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
};
