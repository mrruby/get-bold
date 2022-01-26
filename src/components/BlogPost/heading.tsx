import React from "react";

interface Props {
  category: string;
  title: string;
  author: string;
  authorImg: string;
  date: string;
}

export const HeadingBlogPost: React.FC<Props> = ({
  category,
  title,
  author,
  authorImg,
  date,
}) => {
  return (
    <main className="p-8 -mt-40 pt-64 -z-10 flex flex-col">
      <p className="text-[#EF6278] mb-12">Home / Kategorie / {category}</p>
      <h1 className="text-3xl lg:text-5xl lg:max-w-[1024px] text-[#1F2957] font-bold mb-[40px]">
        {title}
      </h1>
      <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row  lg:items-center">
        <div className="flex items-center">
          <img
            src={authorImg}
            alt={author}
            className="h-[56px] w-[56px] rounded-full mr-6"
          />
          <div className="lg:mr-[70px]">
            <p>Autor:</p>
            <p className="text-[#EF6278] font-bold">{author}</p>
          </div>
        </div>
        <p>{date}</p>
      </div>
    </main>
  );
};
