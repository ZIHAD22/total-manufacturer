import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";
import Spinner from "../Shared/Spinner";

const Dashboard = () => {
  const [user, loading] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);

  

  if (loading || adminLoading) {
    return <Spinner />;
  }

  return (
    <div className="drawer drawer-mobile rounded-md">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* <!-- Page content here --> */}
        <div className=" m-5">
          <Outlet />
        </div>
      </div>
      <div className="drawer-side ">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-gray-500 text-base-content">
          {/* <!-- Sidebar content here --> */}
          {!admin && (
            <>
              <li className="bg-gray-900 my-2 hover:bg-gray-800 text-white rounded-md">
                <Link to="/dashboard">My Orders</Link>
              </li>
              <li className="bg-gray-900 my-2 hover:bg-gray-800 text-white rounded-md">
                <Link to="add-review">Add A Review</Link>
              </li>
              <li className="bg-gray-900 my-2 hover:bg-gray-800 text-white rounded-md">
                <Link to="profile">My Profile</Link>
              </li>
            </>
          )}

          {admin && (
            <>
              <li className="bg-gray-900 my-2 hover:bg-gray-800 text-white rounded-md">
                <Link to="/dashboard">My Profile</Link>
              </li>
              <li className="bg-gray-900 my-2 hover:bg-gray-800 text-white rounded-md">
                <Link to="all-orders">Manage All Orders</Link>
              </li>
              <li className="bg-gray-900 my-2 hover:bg-gray-800 text-white rounded-md">
                <Link to="add-product">Add A Product</Link>
              </li>
              <li className="bg-gray-900 my-2 hover:bg-gray-800 text-white rounded-md">
                <Link to="users">Make Admin</Link>
              </li>
              <li className="bg-gray-900 my-2 hover:bg-gray-800 text-white rounded-md">
                <Link to="manage-products">Manage Products</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
