import axios from "../../utility/axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import Spinner from "../Shared/Spinner";
import { toast } from "react-toastify";

const AddReview = () => {
  const [user, loading] = useAuthState(auth);
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      reviewerName: user.displayName,
      reviewerEmail: user.email,
    },
  });
  const handleReview = async (data) => {
    if (data.reviewStar > 5) {
      return setError("reviewStar", {
        type: "custom",
        message: "review star value should be under 5 star",
      });
    } else if (
      typeof parseFloat(data.reviewStar) === "number" &&
      isNaN(parseFloat(data.reviewStar))
    ) {
      return setError("reviewStar", {
        type: "custom",
        message: "review star value must be a number",
      });
    }

    const { data: reviewsData } = await axios.post("reviews", data);
    if (reviewsData._id) {
      toast.success("Review Added");
      reset();
    }
  };

  if (loading) {
    return <Spinner />;
  }
  return (
    <div>
      <h1 className="text-4xl text-center font-bold">Dashboard (Add Review)</h1>
      <div className="w-1/2 mx-auto">
        <h4 className="text-xl text-center mt-5">Add Review</h4>
        <form onSubmit={handleSubmit(handleReview)}>
          <div class="form-control w-full max-w-lg mx-auto">
            <label class="label">
              <span class="label-text">Name</span>
            </label>
            <input
              type="text"
              disabled
              {...register("reviewerName", { required: "required" })}
              class="input input-bordered w-full max-w-lg"
            />
            {errors.reviewerName?.message && (
              <p className="text-red-600">{errors.reviewerName?.message}</p>
            )}
          </div>
          <div class="form-control w-full max-w-lg mx-auto">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
              type="email"
              disabled
              {...register("reviewerEmail", { required: "required" })}
              class="input input-bordered w-full max-w-lg"
            />
            {errors.reviewerEmail?.message && (
              <p className="text-red-600">{errors.reviewerEmail?.message}</p>
            )}
          </div>
          <div class="form-control w-full max-w-lg mx-auto">
            <label class="label">
              <span class="label-text">Description</span>
            </label>
            <textarea
              {...register("description", { required: "required" })}
              type="text"
              class="textarea input-bordered w-full max-w-lg"
            />
            {errors.description?.message && (
              <p className="text-red-600">{errors.description?.message}</p>
            )}
          </div>
          <div class="form-control w-full max-w-lg mx-auto">
            <label class="label">
              <span class="label-text">Review Star</span>
            </label>
            <input
              type="text"
              {...register("reviewStar", { required: "required" })}
              class="input input-bordered w-full max-w-lg"
            />
            {errors.reviewStar?.message && (
              <p className="text-red-600">{errors.reviewStar?.message}</p>
            )}
          </div>
          <button type="submit" class="btn btn-success my-2 w-full">
            Success
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
