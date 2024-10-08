import SectionHeading from "@/components/Helper/SectionHeading";
import { blogs } from "@/data/data";
import React from "react";

const Blog = () => {
  return (
    <div className="pt-16 pb-16 bg-gray-100">
      <div className="w-[80%] mx-auto">
        <SectionHeading heading="Check Our Blogs" />
        <div className="grid grid-cols-1 sm:grid-cols-2 ms:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-10 md:mt-20 gap-8 items-center">
          {blogs.map((blog) => {
            return <div key={blog.id}></div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Blog;
