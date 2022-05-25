import axios from "../../utility/axios";
import React, { useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { set, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const PurchaseCard = ({
  product: {
    _id,
    toolName,
    toolImg,
    toolDescription,
    minOrder,
    quantity,
    price,
  },
}) => {
  const userOrderQ = useRef(0);
  const [user] = useAuthState(auth);

  const {
    register,
    handleSubmit,
    reset,
    setError,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      userName: user?.displayName,
      userEmail: user?.email,
      toolId: _id,
      toolName: toolName,
      toolImg: toolImg,
      totalPrice: 0,
    },
  });
  const totalOrder = watch("orderQuantity");
  const totalOrderPrice = parseInt(totalOrder) * parseInt(price);
  setValue("totalPrice", `$ ${totalOrderPrice || 0}`);

  const handlePurchaseCard = async (data) => {
    const { orderQuantity, totalPrice } = data;

    const orderTotalPrice = totalPrice.split(" ")[1];
    data.totalPrice = orderTotalPrice;

    if (orderQuantity < minOrder) {
      return setError("orderQuantity", {
        type: "custom",
        message: `Order Quantity must be Greater than ${minOrder}/unite`,
      });
    } else if (orderQuantity > quantity) {
      return setError("orderQuantity", {
        type: "custom",
        message: `Order Quantity must be lass than ${quantity}/unite`,
      });
    }

    const { data: postedOrder } = await axios.post("orders", data);

    if (postedOrder) {
      reset();
      toast.success("Order Success");
    }
  };
  return (
    <div className="card flex-shrink-0 w-full lg:max-w-lg shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleSubmit(handlePurchaseCard)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">User Name</span>
            </label>
            <input
              type="text"
              disabled
              {...register("userName", { required: "required" })}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">User Email</span>
            </label>
            <input
              type="text"
              disabled
              {...register("userEmail", { required: "required" })}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">User Address</span>
            </label>
            <input
              type="text"
              {...register("userAddress", { required: "required" })}
              className="input input-bordered"
            />
            {errors && (
              <p className="text-red-600">{errors.userAddress?.message}</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Phone Number</span>
            </label>
            <input
              type="text"
              {...register("phoneNumber", { required: "required" })}
              className="input input-bordered"
            />
            {errors && (
              <p className="text-red-600">{errors.phoneNumber?.message}</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Tool Name</span>
            </label>
            <input
              type="text"
              disabled
              {...register("toolName", { required: "required" })}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Order Quantity</span>
            </label>
            <input
              type="text"
              ref={userOrderQ}
              {...register("orderQuantity", { required: "required" })}
              className="input input-bordered"
            />
            {errors && (
              <p className="text-red-600">{errors.orderQuantity?.message}</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Total Price</span>
            </label>
            <input
              type="text"
              disabled
              {...register("totalPrice", { required: "required" })}
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-6">
            <button
              disabled={errors.orderQuantity?.message}
              className="btn btn-primary"
            >
              Payment Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PurchaseCard;
