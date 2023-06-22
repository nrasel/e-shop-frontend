import React from "react";
import AllProducts from "../../components/Shop/Layout/AllProducts";
import DashboardHeader from "../../components/Shop/Layout/DashboardHeader";
import DashboardSideBar from "../../components/Shop/Layout/DashboardSideBar";

const ShopAllProducts = () => {
  return (
    <div>
      <DashboardHeader />
      <div className="flex  justify-between w-full">
        <div className="800px:w-[330px] w-[80px]">
          <DashboardSideBar active={3} />
        </div>
        <div className="w-full justify-center flex">
          <AllProducts />
        </div>
      </div>
    </div>
  );
};

export default ShopAllProducts;
