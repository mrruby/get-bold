import React from "react";
import { graphql, Link, PageProps } from "gatsby";
import { markdownRemark } from "../../types/markdown-remark";

interface Props {
  data: any;
}

export const PostsBlog: React.FC<Props> = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes;
  console.log(posts);

  return (
    <div className="w-full">
      <ul className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {posts.map((post) => {
          return (
            <li key={post.frontmatter.id}>
              <div className="bg-white h-[33rem] max-w-[395px] flex flex-col items-center drop-shadow-md rounded-xl">
                <div className="h-2/5 w-full relative bg-getbold-btn-blue rounded-t-xl">
                  <img
                    src={post.frontmatter.thumbnail}
                    alt="Blog"
                    className="rounded-t-xl w-full h-full object-cover"
                  />
                  <div className="absolute px-2 py-1 text-white font-light font-[0.875rem] bg-getbold-btn-pink rounded-lg flex items-center justify-center left-6 bottom-4 drop-shadow-md">
                    {post.frontmatter.category}
                  </div>
                </div>

                <div className="absolute bottom-0 flex flex-col justify-between h-3/5 w-full p-8 bg-white rounded-b-2xl">
                  <div>
                    <p className="mb-4 font-thin opacity-70">23rd April 2020</p>
                    <Link to={"/blog" + post.fields.slug}>
                      <p className="font-extrabold mb-4">
                        {post.frontmatter.title}
                      </p>
                    </Link>
                    <p className="font-medium">
                      {post.frontmatter.description}
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <img
                      src={post.frontmatter.authorImg}
                      alt="ada"
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
            </li>
          );
        })}
      </ul>
    </div>
  );
};
