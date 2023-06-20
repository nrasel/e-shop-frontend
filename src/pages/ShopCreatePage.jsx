import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ShopCreate from "../components/Shop/ShopCreate";

const ShopCreatePage = () => {
  const navigate = useNavigate();
  const { isSellerAuthenticated, seller } = useSelector(
    (state) => state.seller
  );
  // console.log(seller._id);
  useEffect(() => {
    if (isSellerAuthenticated === true) {
      navigate(`/shop/${seller?._id}`);
    }
  }, [isSellerAuthenticated, navigate, seller]);
  return (
    <div>
      <ShopCreate />
    </div>
  );
};

export default ShopCreatePage;
