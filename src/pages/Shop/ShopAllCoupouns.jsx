import React from "react";
import AllCoupouns from "../../components/Shop/Layout/AllCoupouns";
import DashboardHeader from "../../components/Shop/Layout/DashboardHeader";
import DashboardSideBar from "../../components/Shop/Layout/DashboardSideBar";

const ShopAllProducts = () => {
  return (
    <div>
      <DashboardHeader />
      <div className="flex  justify-between w-full">
        <div className="800px:w-[330px] w-[80px]">
          <DashboardSideBar active={9} />
        </div>
        <div className="w-full justify-center flex">
          <AllCoupouns />
        </div>
      </div>
    </div>
  );
};

export default ShopAllProducts;
