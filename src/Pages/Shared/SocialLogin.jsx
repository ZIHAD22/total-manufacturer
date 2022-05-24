import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const SocialLogin = () => {
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const handleGoogleSignIn = async () => {
    await signInWithGoogle();
  };

  if (user) {
    toast.success("Sign Up With Google Success");
    navigate(from, { replace: true });
  }

  return (
    <div>
      <div className="divider">OR</div>
      {error && <p className="text-red-600">{error.message}</p>}
      <button
        onClick={handleGoogleSignIn}
        className={`btn btn-outline w-full ${loading && "loading"}`}
      >
        CONTINUE WITH GOOGLE
      </button>
    </div>
  );
};

export default SocialLogin;
