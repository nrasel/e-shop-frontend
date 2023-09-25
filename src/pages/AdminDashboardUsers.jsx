import React from "react";
import AllUsers from "../components/Admin/AllUsers";
import AdminSidebar from "../components/Admin/Layout/AdminSidebar";
import AdminHeader from "../components/Layout/AdminHeader";

const AdminDashboardUsers = () => {
  return (
    <div>
      <AdminHeader />
      <div className="w-full flex">
        <div className="flex items-start justify-between w-full">
          <div className="w-[80px] 800px:w-[330px]">
            <AdminSidebar active={4} />
          </div>
          <AllUsers />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardUsers;
