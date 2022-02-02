import { Link } from "gatsby";
import React, { useContext } from "react";
import { BlogContext } from "../../../context/blogContext";

export const BlogPosts = () => {
  const blog = useContext(BlogContext);

  return (
    <div className="flex flex-col w-full px-8">
      <div className="flex flex-row space-x-4 xl:space-x-10 items-center justify-center">
        {blog.map((post, index) => {
          return (
            <div
              key={index}
              className=" bg-white h-[33rem] w-[395px] flex flex-col items-center drop-shadow-md rounded-2xl"
            >
              <div className="h-2/5 w-full relative bg-getbold-btn-blue rounded-t-2xl">
                <Link to={`/blog${post.fields.slug}`}>
                  <img
                    src={post.frontmatter.thumbnail}
                    alt={post.frontmatter.title}
                    className="rounded-t-2xl"
                  />
                  <div className="absolute px-2 py-1 text-white font-light font-[0.875rem] bg-getbold-btn-pink rounded-lg flex items-center justify-center left-6 bottom-4 drop-shadow-md">
                    {post.frontmatter.category}
                  </div>
                </Link>
              </div>

              <div className="absolute bottom-0 flex flex-col justify-between h-3/5 w-full p-8 bg-white rounded-b-2xl">
                <div>
                  <p className="mb-4 font-thin opacity-70">23rd April 2020</p>
                  <p className="font-extrabold mb-4">
                    {post.frontmatter.title}
                  </p>
                  <p className="font-medium">{post.frontmatter.description}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <img
                    src={post.frontmatter.authorImg}
                    alt={post.frontmatter.author}
                    className="rounded-full w-12 h-12"
                  />
                  <div>
                    <p className="font-thin opacity-70">Autor: </p>
                    <p className="font-bold text-getbold-btn-pink">
                      {post.frontmatter.author}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center mt-[5.75rem]">
        <Link to="/blog">
          <button className="font-medium">
            Zobacz wszystkie wpisy (
            <span className="text-getbold-btn-pink">{blog.length}</span>)
          </button>
        </Link>
      </div>
    </div>
  );
};
