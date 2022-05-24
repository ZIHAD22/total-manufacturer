import React from "react";
import { Link } from "react-router-dom";
import SocialLogin from "../Shared/SocialLogin";

const SignIn = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-2xl text-center font-bold">Sign In</h2>

          <form action="">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <input
                type="password"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                <Link to="/resetPass" className="label-text link">
                  Forgot Password ?
                </Link>
              </label>
            </div>
            <button className="btn btn-outline w-full my-2">Sign In</button>
          </form>
          <p>
            <span className="text-sm">New to Total Manufacturer? </span>
            <Link to="/signUp" className="text-secondary cursor-pointer">
              Create new account
            </Link>
          </p>
          <div className="divider">OR</div>
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
