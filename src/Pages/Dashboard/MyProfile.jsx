import axios from "axios";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import Spinner from "../Shared/Spinner";
import UpdateProfileModal from "./UpdateProfileModal";

const MyProfile = () => {
  const [user, loading] = useAuthState(auth);

  const [showModal, setShowModal] = useState(false);

  const {
    data: userProfile,
    isLoading,
    refetch,
  } = useQuery(["userProfile", user], async () => {
    const { data } = await axios.get(`users/${user.email}`);

    return data;
  });

  const handleProfileModal = () => {
    setShowModal(true);
  };

  if (loading || isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <h1 className="text-4xl text-center font-bold flex justify-center items-center">
        Dashboard (Profile)
        <label
          onClick={handleProfileModal}
          for="updateProfileModal"
          className="btn btn-outline mx-2"
        >
          Edit
        </label>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-8 items-center">
        <div class="avatar">
          <div class="w-4/5 rounded-full mx-auto">
            <img src="https://api.lorem.space/image/face?hash=92310" alt="no" />
          </div>
        </div>
        <div className="col-span-2">
          <div className="my-2">
            <span className="text-sm font-bold">Name:</span>
            <h1 className="text-xl font-bold">{userProfile?.userName}</h1>
          </div>
          <div className="my-2">
            <span className="text-sm font-bold">
              Email: <small>(Not Editable)</small>
            </span>
            <h1 className="text-xl font-bold">{userProfile?.userEmail}</h1>
          </div>
          <div className="my-2">
            <span className="text-sm font-bold">Address:</span>
            <h1 className="text-xl font-bold">
              {userProfile?.address || "Not Available"}
            </h1>
          </div>
          <div className="my-2">
            <span className="text-sm font-bold">Phone:</span>
            <h1 className="text-xl font-bold">
              {userProfile?.phoneNumber || "Not Available"}
            </h1>
          </div>
        </div>
      </div>
      {showModal && (
        <UpdateProfileModal setShowModal={setShowModal} refetch={refetch} />
      )}
    </div>
  );
};

export default MyProfile;
