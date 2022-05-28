import axios from "../../utility/axios";
import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import CustomLink from "./CustomLink";
import useAdmin from "../../hooks/useAdmin";

const NavBar = ({ isNavRefetch, setNavRefetch }) => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  const { data: userData, refetch } = useQuery(["userData", user], async () => {
    const { data } = await axios.get(`users/${user?.email}`);
    return data;
  });

  if (isNavRefetch) {
    refetch();
    setNavRefetch(false);
  }

  const handleSignOut = () => {
    signOut(auth);
  };

  const navData = (
    <>
      <li className="mx-1">
        <CustomLink to="/">Home</CustomLink>
      </li>
      {userData?._id && (
        <>
          <li className="mx-1">
            <CustomLink to="/dashboard">Dashboard</CustomLink>
          </li>
        </>
      )}
      {userData?.userName && admin && (
        <>
          <li className="mx-1">
            <CustomLink to="/dashboard">{userData?.userName}</CustomLink>
          </li>
        </>
      )}
      {userData?.userName && !admin && (
        <>
          <li className="mx-1">
            <CustomLink to="/dashboard/profile">
              {userData?.userName}
            </CustomLink>
          </li>
        </>
      )}
      <li className="mx-1">
        <CustomLink to="/portfolio">My Portfolio</CustomLink>
      </li>
      <li className="mx-1">
        <CustomLink to="/blogs">Blogs</CustomLink>
      </li>
      <li className="mx-1">
        {userData?._id ? (
          <button
            className="btn btn-outline focus:bg-white focus:text-black"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        ) : (
          <Link
            className="btn btn-outline focus:bg-white focus:text-black"
            to="/signIn"
          >
            Sign In
          </Link>
        )}
      </li>
    </>
  );

  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navData}
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case text-xl font-bold" to="/">
          Total Manufacturer
        </Link>
      </div>
      <div className="lg:navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{navData}</ul>
      </div>
      <div className="navbar-end lg:hidden">
        <label htmlFor="dashboard-drawer" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default NavBar;
