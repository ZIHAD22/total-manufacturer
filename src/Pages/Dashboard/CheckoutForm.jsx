import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import axios from "../../utility/axios";
import { toast } from "react-toastify";
import Spinner from "../Shared/Spinner";

const CheckoutForm = ({
  orderInfo: { _id, userName, userEmail, totalPrice },
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [cardError, setCardError] = useState("");
  const [clientSecretData, setClientSecretData] = useState("");

  useEffect(() => {
    axios
      .post("orders/create-payment-intent", { totalPrice })
      .then(({ data: { clientSecret } }) => {
        setClientSecretData(clientSecret);
      });
  }, [totalPrice]);

  const handleSubmitPayment = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return setCardError("some worng");
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return setCardError("some worng");
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    setCardError(error?.message || "");

    setLoading(true);
    const { paymentIntent, error: confirmPaymentError } =
      await stripe.confirmCardPayment(clientSecretData, {
        payment_method: {
          card: card,
          billing_details: {
            name: userName,
            email: userEmail,
          },
        },
      });

    setLoading(false);
    if (confirmPaymentError?.message) {
      setCardError(confirmPaymentError.message);
    } else {
      // setLoading(false);
      toast.success("Congrats! Your Payment Success");
      await axios.patch(`orders/user/payment/${_id}`, {
        transactionId: paymentIntent.id,
        status: "pending",
      });
    }
  };

  if (loading) {
    return <Spinner h="200px" />;
  }

  return (
    <form onSubmit={handleSubmitPayment}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      {cardError && <p className="text-red-600">{cardError}</p>}
      <button
        className="btn btn-primary mt-5 btn-sm"
        type="submit"
        disabled={!stripe || !clientSecretData}
      >
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;
