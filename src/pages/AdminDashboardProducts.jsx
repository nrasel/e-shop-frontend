import React from "react";
import AllProductsAdmin from "../components/Admin/AllProductsAdmin";
import AdminSidebar from "../components/Admin/Layout/AdminSidebar";
import AdminHeader from "../components/Layout/AdminHeader";

const AdminDashboardProducts = () => {
  return (
    <div>
      <AdminHeader />
      <div className="w-full flex">
        <div className="flex items-start justify-between w-full">
          <div className="w-[80px] 800px:w-[330px]">
            <AdminSidebar active={5} />
          </div>
          <AllProductsAdmin />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardProducts;
