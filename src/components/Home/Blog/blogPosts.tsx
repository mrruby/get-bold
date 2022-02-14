import { Link } from "gatsby";
import React, { useContext } from "react";
import { BlogContext } from "../../../utils/context/blogContext";
import { AiFillClockCircle } from "react-icons/ai";

export const HomeBlogPosts = () => {
  const blog = useContext(BlogContext);

  return (
    <div className="flex flex-col">
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {blog.slice(0, 3).map((post, index) => {
          return (
            <div
              key={index}
              className="bg-white min-h-[32rem] max-w-[20rem] flex flex-col items-center drop-shadow-md rounded-2xl"
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

              <div className="absolute bottom-0 flex flex-col justify-between w-full h-3/5 p-8 bg-white rounded-b-2xl">
                <div className="h-2/3">
                  <p className="mb-4 font-thin flex items-center">
                    <AiFillClockCircle className="mr-2 text-getbold-btn-pink" />
                    {post.frontmatter.date}
                  </p>
                  <p className="font-extrabold mb-4">
                    {post.frontmatter.title}
                  </p>
                  <p className="font-medium">{post.frontmatter.description}</p>
                </div>
                <div className="flex items-end space-x-4 h-1/3">
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
          <button className="font-medium py-3 px-8 rounded-2xl hover:text-getbold-btn-pink transition-all">
            Zobacz wszystkie wpisy (
            <span className="text-getbold-btn-pink">{blog.length}</span>)
          </button>
        </Link>
      </div>
    </div>
  );
};
