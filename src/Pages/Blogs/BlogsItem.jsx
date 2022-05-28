import React from "react";
import { ClockIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

const BlogsItem = ({ blog }) => {
  return (
    <div class="card my-10 lg:card-side bg-accent shadow-xl text-white font-bold">
      <div class="card-body order-2 lg:order-1">
        <span className="flex justify-start items-center">
          <ClockIcon className="h-5 w-5 mr-3" /> <span>April 22, 2022</span>
        </span>
        <h2 class="text-5xl my-5">{blog.title}</h2>
        <p className="text-lg">{blog.description}</p>
      </div>

      <img
        className="order-1 lg:order-2 w-full lg:w-2/5"
        src={blog.image}
        alt="Album"
      />
    </div>
  );
};

export default BlogsItem;
