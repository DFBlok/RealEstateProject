import React from "react";
import Image from "next/image";
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
  return (
    <div className="bg-white rounded-md overflow-hidden">
      <div>
        <Image
          src={blog.image}
          alt={blog.title}
          height={300}
          width={300}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default BlogCard;
