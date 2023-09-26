import React from "react";
import AllSeller from "../components/Admin/AllSeller";
import AdminSidebar from "../components/Admin/Layout/AdminSidebar";
import AdminHeader from "../components/Layout/AdminHeader";

const AdminDashboardSellers = () => {
  return (
    <div>
      <AdminHeader />
      <div className="w-full flex">
        <div className="flex items-start justify-between w-full">
          <div className="w-[80px] 800px:w-[330px]">
            <AdminSidebar active={3} />
          </div>
          <AllSeller />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardSellers;
