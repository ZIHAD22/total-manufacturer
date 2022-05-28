import axios from "../../utility/axios";
import React, { useEffect, useState } from "react";
import BlogsItem from "./BlogsItem";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get("blogs").then(({ data }) => {
      setBlogs(data);
    });
  }, []);

  return (
    <div>
      <h1 className="text-5xl text-center font-bold my-10">
        Blogs And Articles
      </h1>
      <div className="m-10">
        {blogs?.map((blog) => (
          <BlogsItem key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
