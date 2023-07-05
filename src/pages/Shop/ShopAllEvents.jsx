import React from "react";
import AllEvents from "../../components/Shop/Layout/AllEvents.jsx";
import DashboardHeader from "../../components/Shop/Layout/DashboardHeader";
import DashboardSideBar from "../../components/Shop/Layout/DashboardSideBar";

const ShopAllEvents = () => {
  return (
    <div>
      <DashboardHeader />
      <div className="flex  justify-between w-full">
        <div className="800px:w-[330px] w-[80px]">
          <DashboardSideBar active={4} />
        </div>
        <div className="w-full justify-center flex">
          <AllEvents />
        </div>
      </div>
    </div>
  );
};

export default ShopAllEvents;
