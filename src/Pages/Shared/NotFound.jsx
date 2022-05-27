import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen flex justify-center items-center ">
      <div className="text-center mb-10">
        <img
          width="500px"
          src="https://img.freepik.com/free-vector/internet-network-warning-404-error-page-file-found-web-page-internet-error-page-issue-found-network-404-error-present-by-man-sleep-display_1150-55450.jpg?t=st=1651942199~exp=1651942799~hmac=5c1a22f247c483635097e429f1bb063958f3a716f38e8deeff11694f50329720&w=900"
          alt=""
        />
        <h1 className="text-5xl font-serif my-3 text-red-600">404</h1>
        <h1 className="text-3xl font-mono font-semibold">Page Not Found</h1>
        <div className="text-center mt-5 w-full">
          <Link
            to="/"
            className="bg-orange-400 nav-btn font-semibold px-5 py-2 rounded-lg inline-block my-2 hover:bg-orange-500"
          >
            Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
