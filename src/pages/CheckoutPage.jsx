import React from "react";
import CheckOut from "../components/Checkout/CheckOut";
import CheckOutSteps from "../components/Checkout/CheckOutSteps";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";

const CheckoutPage = () => {
  return (
    <div>
      <Header />
      <br />
      <br />
      <CheckOutSteps active={1} />
      <CheckOut />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default CheckoutPage;
