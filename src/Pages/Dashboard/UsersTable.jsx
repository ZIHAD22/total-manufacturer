import axios from "../../utility/axios";
import React from "react";
import Spinner from "../Shared/Spinner";
import { toast } from "react-toastify";

const UsersTable = ({ allUsers, refetch, isLoading }) => {
  const handleMakeAdmin = async (id, userName) => {
    const data = await axios.patch(`users/all/${id}`);
    if (data.status === 200) {
      refetch();
      toast.success(`${userName} make as admin`);
    } else {
      toast.warn("Failed To Make Admin");
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="overflow-x-auto">
      <table className="table w-full text-center">
        <thead>
          <tr>
            <th>s.no</th>
            <th>Name</th>
            <th>email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allUsers?.map((user, i) => (
            <tr key={user._id}>
              <th>{i + 1}</th>
              <td>{user.userName}</td>
              <td>{user.userEmail}</td>
              {user.role !== "admin" ? (
                <td>
                  <button
                    onClick={() => handleMakeAdmin(user._id, user.userName)}
                    className="btn btn-xs"
                  >
                    make admin
                  </button>
                </td>
              ) : (
                <td>
                  <span className="text-success font-bold">Admin</span>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
