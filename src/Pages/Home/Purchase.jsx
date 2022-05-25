import axios from "../../utility/axios";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import PurchaseCard from "../Home/PurchaseCard";
import Spinner from "../Shared/Spinner";

const Purchase = () => {
  const { id } = useParams();
  const { data: product, isLoading } = useQuery("product", async () => {
    const { data } = await axios.get(`products/${id}`);
    return data;
  });

  if (isLoading) {
    return <Spinner />;
  }

  const { _id, toolName, toolImg, toolDescription, minOrder, quantity, price } =
    product;

  return (
    <div className="min-h-screen mt-10">
      <h1 className="text-4xl text-center font-bold">Product Purchasing </h1>
      <div className="lg:flex lg:justify-between lg:items-center">
        <div className="text-center lg:text-left">
          <div className="lg:w-1/2 mx-auto shadow-2xl p-8 rounded-2xl">
            <div>
              <img
                className="rounded-2xl md:mx-auto"
                width="500px"
                src={toolImg}
                alt=""
              />
            </div>
            <p className="text-xl font-bold mt-5">Tool Name: {toolName}</p>
            <p className="text-base mt-3">
              <span className="block font-bold">Description:</span>
              {toolDescription}
            </p>
            <p className="mt-3">
              <strong>Minimum Order Quantity: </strong>
              <span>{minOrder} /unit</span>
            </p>
            <p className="mt-3">
              <strong>Available Quantity: </strong>
              <span>{quantity} /unit</span>
            </p>
            <p className="mt-3">
              <strong>Price: </strong>
              <span>${price} /unit</span>
            </p>
          </div>
        </div>
        <PurchaseCard product={product} />
      </div>
    </div>
  );
};

export default Purchase;
