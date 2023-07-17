import React from "react";

interface Props {
  type: "button" | "submit" | "reset";
  color: "pink" | "blue";
  text: string;
  isWFull: boolean;
}

export const Button: React.FC<Props> = ({ type, color, text, isWFull }) => {
  return (
    <button
      type={type}
      className={`rounded-3xl ${color === "pink"
        ? "bg-getbold-btn-pink hover:bg-getbold-btn-light-pink"
        : "bg-getbold-blue hover:bg-getbold-btn-blue"
        } ${isWFull && "w-full"
        } px-10 py-3 text-white font-semibold pointer hover:shadow-lg transition-all`}
    >
      {text}
    </button>
  );
};
