import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div class="drawer drawer-mobile rounded-md">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col">
        {/* <!-- Page content here --> */}
        <div className=" m-5">
          <Outlet />
        </div>
        <label
          for="my-drawer-2"
          class="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div class="drawer-side ">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-gray-500 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li className="bg-gray-900 my-2 hover:bg-gray-800 text-white rounded-md">
            <Link to="/dashboard">My Orders</Link>
          </li>
          <li className="bg-gray-900 my-2 hover:bg-gray-800 text-white rounded-md">
            <Link to="add-review">Add A Review</Link>
          </li>
          <li className="bg-gray-900 my-2 hover:bg-gray-800 text-white rounded-md">
            <Link to="profile">My Profile</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
