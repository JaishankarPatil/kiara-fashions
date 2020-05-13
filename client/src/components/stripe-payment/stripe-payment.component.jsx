import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripePayment = ({ price }) => {
  const priceForStripe = price * 100;
  const publishablekey = "pk_test_bIsOr7qVAodVEGZ3eZsvM4qR00e9m4IziO";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "POST",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert("Your Payment is Successful");
      })
      .catch((error) => {
        console.log("Payment Error", JSON.parse(JSON.stringify(error)));
        alert("There is an issue with Payment, Kindly check your card details");
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Kiara Fashions Pvt Ltd."
      billingAddress
      shippingAddress
      description="Big Data Stuff" // the pop-in header subtitle
      image="https://stripe.com/img/documentation/checkout/marketplace.png" // the pop-in header image (default none)
      currency="INR"
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishablekey}
    />
  );
};

export default StripePayment;
