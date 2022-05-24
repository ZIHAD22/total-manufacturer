import React, { useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { set, useForm } from "react-hook-form";
import auth from "../../firebase.init";

const PurchaseCard = ({
  product: {
    id,
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
      toolName: toolName,
      totalPrice: 0,
    },
  });
  const totalOrder = watch("orderQuantity");
  const totalOrderPrice = parseInt(totalOrder) * parseInt(price);
  setValue("totalPrice", `$ ${totalOrderPrice || 0}`);

  const handlePurchaseCard = (data) => {
    const { userAddress, phoneNumber, orderQuantity, totalPrice } = data;

    if (orderQuantity < minOrder) {
      return setError("orderQuantity", {
        type: "custom",
        message: `Order Quantity must be Greater than ${minOrder}/unite`,
      });
    }
    console.log(data);
  };
  return (
    <div class="card flex-shrink-0 w-full lg:max-w-lg shadow-2xl">
      <div class="card-body">
        <form onSubmit={handleSubmit(handlePurchaseCard)}>
          <div class="form-control">
            <label class="label">
              <span class="label-text">User Name</span>
            </label>
            <input
              type="text"
              disabled
              {...register("userName", { required: "required" })}
              class="input input-bordered"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">User Email</span>
            </label>
            <input
              type="text"
              disabled
              {...register("userEmail", { required: "required" })}
              class="input input-bordered"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">User Address</span>
            </label>
            <input
              type="text"
              {...register("userAddress", { required: "required" })}
              class="input input-bordered"
            />
            {errors && (
              <p className="text-red-600">{errors.userAddress?.message}</p>
            )}
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Phone Number</span>
            </label>
            <input
              type="text"
              {...register("phoneNumber", { required: "required" })}
              class="input input-bordered"
            />
            {errors && (
              <p className="text-red-600">{errors.phoneNumber?.message}</p>
            )}
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Tool Name</span>
            </label>
            <input
              type="text"
              disabled
              {...register("toolName", { required: "required" })}
              class="input input-bordered"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Order Quantity</span>
            </label>
            <input
              type="text"
              ref={userOrderQ}
              {...register("orderQuantity", { required: "required" })}
              class="input input-bordered"
            />
            {errors && (
              <p className="text-red-600">{errors.orderQuantity?.message}</p>
            )}
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Total Price</span>
            </label>
            <input
              type="text"
              disabled
              //   value={`$ ${totalOrderPrice || 0}`}
              {...register("totalPrice", { required: "required" })}
              class="input input-bordered"
            />
          </div>
          <div class="form-control mt-6">
            <button class="btn btn-primary">Payment Now</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PurchaseCard;
