import React from "react";
import AdminDashboardMain from "../components/Admin/AdminDashboardMain";
import AdminSidebar from "../components/Admin/Layout/AdminSidebar";
import AdminHeader from "../components/Layout/AdminHeader";

const AdminDashboardPage = () => {
  return (
    <div>
      <AdminHeader />
      <div className="w-full flex">
        <div className="flex items-start justify-between w-full">
          <div className="w-[80px] 800px:w-[330px]">
            <AdminSidebar active={1} />
          </div>
          <AdminDashboardMain />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
