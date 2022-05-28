import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../Shared/SocialLogin";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Spinner from "../Shared/Spinner";
import { toast } from "react-toastify";

const SignIn = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const handleSignIn = async (data) => {
    const { userEmail, userPassword } = data;
    await signInWithEmailAndPassword(userEmail, userPassword);
    reset();
  };

  if (loading) {
    return <Spinner />;
  }

  if (user) {
    toast.success("Sign In Success");
    navigate(from, { replace: true });
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-2xl text-center font-bold">Sign In</h2>

          <form onSubmit={handleSubmit(handleSignIn)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <input
                type="email"
                {...register("userEmail", { required: "required" })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.userEmail?.message && (
                <p className="text-red-600">{errors.userEmail?.message}</p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <input
                type="password"
                {...register("userPassword", { required: "required" })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.userPassword?.message && (
                <p className="text-red-600">{errors.userPassword?.message}</p>
              )}
              {error && <p className="text-red-600">{error.message}</p>}
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
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
