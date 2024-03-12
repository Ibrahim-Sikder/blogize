import { Blog } from "@/types";
import LatestBlogCard from "../ui/LatestBlogCard";
import BlogCard from "../ui/BlogCard";

const LatestBlog = ({ blogs }: { blogs: Blog[] }) => {
  console.log(blogs);

  return (
    <div>
      <h2 className="text-4xl text-center my-5 ">
        Latest Blogs From <span className="text-red-700">Blogiz </span>{" "}
      </h2>

      <div className="grid grid-cols-2 gap-5">
        {blogs.slice(0, 2).map((blog) => (
          <LatestBlogCard key={blog.id} blog={blog} />
        ))}
      </div>

      <div className="grid grid-cols-3 gap-5">
        {blogs.slice(2,5).map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>


    </div>
  );
};

export default LatestBlog;
