"use client"


import BlogCard from "@/components/ui/BlogCard";
import { useGetBlogsQuery } from "@/redux/api/baseApi";
import { Blog } from "@/types";
import React from "react";

const BlogPage = () => {
  const {
    data: blogs,
    isLoading,
    isError
  } = useGetBlogsQuery(undefined);
  console.log(blogs);
  if (isLoading) {
    return <p>Loading....</p>;
  }
  if (isError) {
    return <p>Something went to wrong </p>;
  }

  return (
    <div>
      <h3 className="text-4xl font-bold text-center ">All blogs </h3>

      <div className="grid grid-cols-3 gap-5">
        {blogs.map((blog: Blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
