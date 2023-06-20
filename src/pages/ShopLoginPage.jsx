import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ShopLogin from "../components/Shop/ShopLogin.jsx";

const ShopLoginPage = () => {
  const navigate = useNavigate();
  const { isSellerAuthenticated, seller } = useSelector(
    (state) => state.seller
  );
  console.log(isSellerAuthenticated);
  useEffect(() => {
    if (isSellerAuthenticated === true) {
      navigate(`/shop/${seller?._id}`);
    }
  }, [isSellerAuthenticated, navigate, seller]);
  return (
    <div>
      <ShopLogin />
    </div>
  );
};

export default ShopLoginPage;
