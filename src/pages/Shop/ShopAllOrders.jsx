import React from "react";
import AllOrders from "../../components/Shop/AllOrders.jsx";
import DashboardHeader from "../../components/Shop/Layout/DashboardHeader";
import DashboardSideBar from "../../components/Shop/Layout/DashboardSideBar";

const ShopAllOrders = () => {
  return (
    <div>
      <div>
        <DashboardHeader />
        <div className="flex  justify-between w-full">
          <div className="800px:w-[330px] w-[80px]">
            <DashboardSideBar active={3} />
          </div>
          <div className="w-full justify-center flex">
            <AllOrders />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopAllOrders;
