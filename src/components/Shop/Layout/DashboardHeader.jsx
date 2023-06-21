import React from "react";
import { AiOutlineGift } from "react-icons/ai";
import { BiMessageSquareDetail } from "react-icons/bi";
import { FiPackage, FiShoppingBag } from "react-icons/fi";
import { MdOutlineLocalOffer } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { backend_url } from "../../../server";

const DashboardHeader = () => {
  const { seller } = useSelector((state) => state.seller);
  return (
    <div>
      <div className="w-full h-[80px] bg-white sticky top-0 left-0 z-30 flex items-center justify-between px-4">
        <div>
          <Link to="/dashboard">
            <img
              src="https://shopo.quomodothemes.website/assets/images/logo.svg"
              alt=""
            />
          </Link>
        </div>
        <div className="flex items-center">
          <div className="flex items-center mr-4">
            <Link className="800px:block hidden" to="/dashboard/cupouns">
              <AiOutlineGift
                color="#555"
                size={30}
                className="mx-5 cursor-auto"
              />
            </Link>
            <Link className="800px:block hidden" to="/dashboard-events">
              <MdOutlineLocalOffer
                color="#555"
                size={30}
                className="mx-5 cursor-auto"
              />
            </Link>
            <Link className="800px:block hidden" to="/dashboard-products">
              <FiShoppingBag
                color="#555"
                size={30}
                className="mx-5 cursor-auto"
              />
            </Link>
            <Link className="800px:block hidden" to="/dashboard-orders">
              <FiPackage color="#555" size={30} className="mx-5 cursor-auto" />
            </Link>
            <Link className="800px:block hidden" to="/dashboard-messeges">
              <BiMessageSquareDetail
                color="#555"
                size={30}
                className="mx-5 cursor-auto"
              />
            </Link>
            <Link to={`/shop/${seller?._id}`}>
              <img
                className="w-[50px] h-[50px] rounded-full object-cover"
                src={`${backend_url}${seller?.avatar}`}
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
