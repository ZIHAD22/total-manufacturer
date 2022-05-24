import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import CustomLink from "./CustomLink";

const NavBar = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
  const navItems = (
    <>
      <li className="mx-1">
        <CustomLink to="/">Home</CustomLink>
      </li>
      <li className="mx-1">
        <CustomLink to="/about">About</CustomLink>
      </li>

      {user?.displayName?.length && (
        <li className="mx-1">
          <CustomLink to="/profile">{user?.displayName}</CustomLink>
        </li>
      )}
      <li className="mx-1">
        {user?.uid ? (
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
            {navItems}
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case text-xl font-bold" to="/">
          Total Manufacturer
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{navItems}</ul>
      </div>
    </div>
  );
};

export default NavBar;
