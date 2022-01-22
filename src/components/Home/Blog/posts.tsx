import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export const BlogPosts = () => {
  return (
    <div className="flex flex-col">
      <div className="flex space-x-12">
        <div className="relative bg-white h-[33rem] w-[24.65rem] flex flex-col items-center drop-shadow-md rounded-2xl">
          <StaticImage
            src="../../../images/blog.png"
            alt=""
            className="rounded-2xl"
          />
          <div className="absolute bottom-0 flex flex-col justify-between h-[19.625rem] w-full p-8  bg-white rounded-b-2xl">
            <div>
              <p className="mb-4 font-thin opacity-70">23rd April 2020</p>
              <p className="font-extrabold mb-4">
                Marketing - proces społeczny, w którym jednostki i grupy
                otrzymują
              </p>
              <p className="font-medium">
                czego potrzebują poprzez tworzenie, oferowanie oraz swobodną
                wymianę z innymi towarów...
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <StaticImage
                src="../../../images/about-ada.png"
                alt="ada"
                className="rounded-full w-12 h-12"
              />
              <div>
                <p className="font-thin opacity-70">Autor: </p>
                <p className="font-bold text-getbold-btn-pink">Adrianna</p>
              </div>
            </div>
          </div>

          <div className="absolute h-[2.25rem] w-[5.625rem] text-white font-light font-[0.875rem] bg-getbold-btn-pink rounded-xl flex items-center justify-center left-4 bottom-[20.5rem] drop-shadow-md">
            marketing
          </div>
        </div>

        <div className="relative bg-white h-[33rem] w-[24.65rem] flex flex-col items-center drop-shadow-md rounded-2xl">
          <StaticImage
            src="../../../images/blog.png"
            alt=""
            className="rounded-2xl"
          />
          <div className="absolute bottom-0 flex flex-col justify-between h-[19.625rem] w-full p-8  bg-white rounded-b-2xl">
            <div>
              <p className="mb-4 font-thin opacity-70">23rd April 2020</p>
              <p className="font-extrabold mb-4">
                Marketing - proces społeczny, w którym jednostki i grupy
                otrzymują
              </p>
              <p className="font-medium">
                czego potrzebują poprzez tworzenie, oferowanie oraz swobodną
                wymianę z innymi towarów...
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <StaticImage
                src="../../../images/about-ada.png"
                alt="ada"
                className="rounded-full w-12 h-12"
              />
              <div>
                <p className="font-thin opacity-70">Autor: </p>
                <p className="font-bold text-getbold-btn-pink">Adrianna</p>
              </div>
            </div>
          </div>

          <div className="absolute h-[2.25rem] w-[5.625rem] text-white font-light font-[0.875rem] bg-getbold-btn-pink rounded-xl flex items-center justify-center left-4 bottom-[20.5rem] drop-shadow-md">
            marketing
          </div>
        </div>

        <div className="relative bg-white h-[33rem] w-[24.65rem] flex flex-col items-center drop-shadow-md rounded-2xl">
          <StaticImage
            src="../../../images/blog.png"
            alt=""
            className="rounded-2xl"
          />
          <div className="absolute bottom-0 flex flex-col justify-between h-[19.625rem] w-full p-8  bg-white rounded-b-2xl">
            <div>
              <p className="mb-4 font-thin opacity-70">23rd April 2020</p>
              <p className="font-extrabold mb-4">
                Marketing - proces społeczny, w którym jednostki i grupy
                otrzymują
              </p>
              <p className="font-medium">
                czego potrzebują poprzez tworzenie, oferowanie oraz swobodną
                wymianę z innymi towarów...
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <StaticImage
                src="../../../images/about-ada.png"
                alt="ada"
                className="rounded-full w-12 h-12"
              />
              <div>
                <p className="font-thin opacity-70">Autor: </p>
                <p className="font-bold text-getbold-btn-pink">Adrianna</p>
              </div>
            </div>
          </div>

          <div className="absolute h-[2.25rem] w-[5.625rem] text-white font-light font-[0.875rem] bg-getbold-btn-pink rounded-xl flex items-center justify-center left-4 bottom-[20.5rem] drop-shadow-md">
            marketing
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-[5.75rem]">
        <button className="font-medium">
          Zobacz wszystkie wpisy (
          <span className="text-getbold-btn-pink">14</span>)
        </button>
      </div>
    </div>
  );
};
