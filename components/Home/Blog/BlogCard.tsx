import React from "react";

type Props = {
  blog: {
    id: number;
    date: string;
    comment: string;
    title: string;
    shortDescription: string;
    image: string;
  };
};

const BlogCard = ({ blog }: Props) => {
  return <div>BlogCard</div>;
};

export default BlogCard;
