import axios from "../../utility/axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import Spinner from "../Shared/Spinner";
import DeleteConfirmModal from "./DeleteConfirmModal";

const ManageAllOrders = () => {
  const [showModalId, setShowModalId] = useState("");
  const {
    data: ordersData,
    refetch,
    isLoading,
  } = useQuery("ordersData", async () => {
    const { data } = await axios.get("orders");
    return data;
  });

  const handleMakeShipped = async (id) => {
    await axios.patch(`orders/make-shipped/${id}`, {
      status: "shipped",
    });
    refetch();
  };

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div>
      <h1 className="text-4xl text-center font-bold">Dashboard (All Orders)</h1>
      <div className="mt-5">
        <div class="overflow-x-auto">
          <table class="table w-full text-center">
            <thead>
              <tr>
                <th>s.no</th>
                <th>Name</th>
                <th>email</th>
                <th>action</th>
                <th>Payment</th>
                <th>status</th>
              </tr>
            </thead>
            <tbody>
              {ordersData?.map((order, i) => (
                <tr key={order._id}>
                  <th>{i + 1}</th>
                  <td>{order.userName}</td>
                  <td>{order.userEmail}</td>
                  <td>
                    {!order.paid &&
                      order.status !== "pending" &&
                      order.status !== "shipped" && (
                        <label
                          for="deleteConfirmModal"
                          onClick={() => setShowModalId(order._id)}
                          className="text-accent btn btn-xs"
                        >
                          cancel order
                        </label>
                      )}
                  </td>
                  <td>
                    {order?.paid ? (
                      <p className="text-accent font-bold">paid</p>
                    ) : (
                      <p className="text-accent font-bold">unpaid</p>
                    )}
                  </td>
                  <td>
                    {order.status === "unpaid" &&
                      !order.paid &&
                      !order.transactionId && (
                        <p className="text-red-600 font-bold">unpaid</p>
                      )}
                    {order.status === "shipped" &&
                      order.paid &&
                      order.transactionId && (
                        <p className="text-success font-bold">shipped</p>
                      )}
                    {order.status === "pending" &&
                      order.paid &&
                      order.transactionId && (
                        <button
                          onClick={() => handleMakeShipped(order._id)}
                          className="text-accent btn btn-xs"
                        >
                          ship the order
                        </button>
                      )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
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

export default ManageAllOrders;
