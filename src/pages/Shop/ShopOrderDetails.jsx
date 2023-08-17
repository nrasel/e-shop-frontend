import React from "react";
import Footer from "../../components/Layout/Footer";
import DashboardHeader from "../../components/Shop/Layout/DashboardHeader";
import OrderDetails from "../../components/Shop/OrderDetails.jsx";

const ShopOrderDetails = () => {
  return (
    <div>
      <div>
        <DashboardHeader />
        <OrderDetails />
        <Footer />
      </div>
    </div>
  );
};

export default ShopOrderDetails;
