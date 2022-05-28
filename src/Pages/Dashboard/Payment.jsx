import axios from "../../utility/axios";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Spinner from "../Shared/Spinner";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PAYMENT_KEY);

const Payment = () => {
  const { id } = useParams();

  const { data: paymentOrder, isLoading } = useQuery(
    "paymentOrder",
    async () => {
      const { data } = await axios.get(`orders/user/payment/${id}`);
      return data;
    }
  );

  if (isLoading) {
    return <Spinner />;
  }

  const {
    userName,
    userEmail,
    userAddress,
    toolName,
    toolImg,
    orderQuantity,
    totalPrice,
  } = paymentOrder;

  return (
    <div>
      <h1 className="text-4xl text-center font-bold my-3">
        Payment for {toolName}
      </h1>
      <div>
        <div className="card card-side bg-base-100 shadow-xl">
          <div>
            <img className="w-[350px] h-full" src={toolImg} alt={toolName} />
          </div>
          <div className="card-body">
            <h2 className="text-2xl">{toolName}</h2>
            <strong>
              <p>Customer Name: {userName}</p>
              <p>Customer Email: {userEmail}</p>
              <p>Delivery Address: {userAddress}</p>
              <p>Order Quantity: {orderQuantity}/unite</p>
              <p>Total Price: ${totalPrice}/unite</p>
            </strong>
            <div>
              <h1 className="text-center text-2xl my-4">Payment</h1>
              <Elements stripe={stripePromise}>
                <CheckoutForm orderInfo={paymentOrder} />
              </Elements>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
