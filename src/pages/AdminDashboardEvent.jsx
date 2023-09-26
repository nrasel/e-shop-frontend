import React from "react";
import AllEventAdmin from "../components/Admin/AllEventAdmin";
import AdminSideBar from "../components/Admin/Layout/AdminSidebar";
import AdminHeader from "../components/Layout/AdminHeader";

const AdminDashboardEvent = () => {
  return (
    <div>
      <AdminHeader />
      <div className="w-full flex">
        <div className="flex items-start justify-between w-full">
          <div className="w-[80px] 800px:w-[330px]">
            <AdminSideBar active={6} />
          </div>
          <AllEventAdmin />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardEvent;
