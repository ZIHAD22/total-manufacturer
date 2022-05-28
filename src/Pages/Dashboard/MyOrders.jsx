import axios from "../../utility/axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import Table from "../Shared/Table";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Spinner from "../Shared/Spinner";
import DeleteConfirmModal from "./DeleteConfirmModal";

const MyOrders = () => {
  const [user, loading] = useAuthState(auth);
  const [showModalId, setShowModalId] = useState("");

  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("orders", async () => {
    const { data } = await axios.get(`orders/user/?email=${user?.email}`);

    return data;
  });

  if (loading || isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <h1 className="text-4xl text-center font-bold">Dashboard (Orders)</h1>
      {orders.length !== 0 ? (
        <Table
          orders={orders}
          refetch={refetch}
          setShowModalId={setShowModalId}
        />
      ) : (
        <>
          <h1 className="text-3xl text-red-600 flex justify-center items-center font-bold h-screen">
            Sorry! No Order Here
          </h1>
        </>
      )}

      {showModalId && (
        <DeleteConfirmModal
          refetch={refetch}
          showModalId={showModalId}
          setShowModalId={setShowModalId}
        />
      )}
    </div>
  );
};

export default MyOrders;
