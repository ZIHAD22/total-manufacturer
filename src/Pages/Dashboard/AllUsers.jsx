import axios from "../../utility/axios";
import React from "react";
import { useQuery } from "react-query";
import UsersTable from "./UsersTable";

const AllUsers = () => {
  const { data: allUsers, refetch } = useQuery("allUsers", async () => {
    const { data } = await axios.get("users/all");
    return data;
  });

  return (
    <div>
      <h1 className="text-4xl text-center font-bold">Dashboard (All Users)</h1>
      <div className="mt-5">
        <UsersTable allUsers={allUsers} refetch={refetch} />
      </div>
    </div>
  );
};

export default AllUsers;
