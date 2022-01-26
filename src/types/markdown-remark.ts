export type markdownRemark = {
  id: string;
  frontmatter: {
    category: string;
    author: string;
    title: string;
    date: string;
    description: string;
    tags: string[];
    thumbnail: string;
    authorImg: string;
  };
  excerpt: string;
  html: string;
  fields: {
    slug: string;
  };
};
