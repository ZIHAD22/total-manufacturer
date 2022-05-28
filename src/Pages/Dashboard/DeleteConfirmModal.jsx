import axios from "../../utility/axios";
import React from "react";
import { toast } from "react-toastify";

const DeleteConfirmModal = ({ refetch, showModalId, setShowModalId }) => {
  const handleDeleteOrders = async () => {
    const { data: deleteOrders } = await axios.delete(
      `orders/user/${showModalId}`
    );
    if (deleteOrders._id) {
      toast.success("Order Cancel Success");
      setShowModalId("");
    }
    refetch();
  };
  return (
    <div>
      <input type="checkbox" id="deleteConfirmModal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-center text-red-500">
            Are you sure you want to cancel this order ?
          </h3>
          <p className="py-4 text-center">
            You will not be able to
            <span className="text-red-500 font-bold"> recover</span> this order
          </p>
          <div className="modal-action">
            <label htmlFor="deleteConfirmModal" className="btn">
              Close
            </label>
            <button onClick={handleDeleteOrders} className="btn">
              Cancel Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
