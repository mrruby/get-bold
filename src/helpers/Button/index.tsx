import React from "react";

interface Props {
  type: "button" | "submit" | "reset";
  color: "pink" | "blue";
  text: string;
  isWFull: boolean;
  textSize?: string;
  sectionId?: string;
}

export const Button: React.FC<Props> = ({ type, color, text, isWFull,
  textSize = "lg:text-[25px]",
  sectionId
}) => {
  const handleButtonClick = () => {
    if (sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <button
      onClick={handleButtonClick}
      type={type}
      className={`rounded-3xl ${color === "pink"
        ? "bg-getbold-btn-pink hover:bg-getbold-btn-light-pink"
        : "bg-getbold-blue hover:bg-getbold-btn-light-blue"
        } ${isWFull && "w-full"
        } px-8 py-3 text-white leading-snug pointer hover:shadow-lg transition-all ${textSize} shadow-div`}
    >
      {text}
    </button>
  );
};
