import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useUpdateProfile } from "react-firebase-hooks/auth";
import axios from "../../utility/axios";

const UpdateProfileModal = ({ refetch, setShowModal, setNavRefetch }) => {
  const [user] = useAuthState(auth);
  const [updateProfile] = useUpdateProfile(auth);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const handleUserProfileUpdate = async (data) => {
    await axios.put("users", data);
    await updateProfile({ displayName: data.userName });
    setShowModal(false);
    refetch();
    setNavRefetch(true);
  };

  useEffect(() => {
    axios.get(`users/${user.email}`).then(({ data }) => {
      setValue("userName", data.userName);
      setValue("userEmail", data.userEmail);
      setValue("address", data.address);
      setValue("phoneNumber", data.phoneNumber);
    });
  }, [user]);

  return (
    <div>
      <input type="checkbox" id="updateProfileModal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <form
          onSubmit={handleSubmit(handleUserProfileUpdate)}
          className="modal-box"
        >
          <div className="form-control w-full max-w-xs mx-auto">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              // defaultValue={userProfile.userName}
              {...register("userName")}
              className="input input-bordered w-full max-w-xs"
            />
            {errors && (
              <p className="text-red-600 text-sm">{errors.userName?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs mx-auto">
            <label className="label">
              <span className="label-text">
                Email <small>(Not Editable)</small>
              </span>
            </label>
            <input
              type="text"
              disabled
              // defaultValue={userProfile.userEmail}
              {...register("userEmail")}
              className="input input-bordered w-full max-w-xs"
            />
            {errors && (
              <p className="text-red-600 text-sm">
                {errors.userEmail?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full max-w-xs mx-auto">
            <label className="label">
              <span className="label-text">Address</span>
            </label>
            <input
              type="text"
              // defaultValue={userProfile.address}
              {...register("address")}
              className="input input-bordered w-full max-w-xs"
            />
            {errors && (
              <p className="text-red-600 text-sm">{errors.address?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs mx-auto">
            <label className="label">
              <span className="label-text">Phone Number</span>
            </label>
            <input
              type="number"
              // defaultValue={userProfile.phoneNumber}
              {...register("phoneNumber")}
              className="input input-bordered w-full max-w-xs"
            />
            {errors && (
              <p className="text-red-600 text-sm">
                {errors.phoneNumber?.message}
              </p>
            )}
          </div>
          <div className="modal-action">
            <label htmlFor="updateProfileModal" className="btn">
              Close
            </label>
            <button onClick={handleUserProfileUpdate} className="btn">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfileModal;
