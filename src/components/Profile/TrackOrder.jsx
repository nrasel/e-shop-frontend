import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllOrdersOfUser } from "../../redux/actions/order";

const TrackOrder = () => {
  const { orders } = useSelector((state) => state.order);
  const { user } = useSelector((state) => state.user);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOrdersOfUser(user?._id));
  }, [dispatch, user?._id]);
  const data = orders && orders.find((item) => item._id === id);
  return (
    <div className="w-full h-[80vh] flex justify-center items-center">
      <>
        {data && data?.status === "Processing" ? (
          <h1 className="text-[20px]">Your Order is processing in shop.</h1>
        ) : data?.status === "Transferred to delivery partner" ? (
          <h1 className="text-[20px]">
            Your Order is on the way for delivery partner
          </h1>
        ) : data?.status === "Shipping" ? (
          <h1 className="text-[20px]">
            Your Order is comming with our delivery partner
          </h1>
        ) : data?.status === "Received" ? (
          <h1 className="text-[20px]">
            Your Order is in your city. Our Delivery man will deliver it.
          </h1>
        ) : data?.status === "On the way" ? (
          <h1 className="text-[20px]">
            Our Delivery man going to deliver your order.
          </h1>
        ) : data?.status === "Delivered" ? (
          <h1 className="text-[20px]">Your Order is delivered!</h1>
        ) : data?.status === "Processing Refund" ? (
          <h1 className="text-[20px]">Your Order is delivered!</h1>
        ) : data?.status === "Refund Success" ? (
          <h1 className="text-[20px]">Your Refund is Success!</h1>
        ) : null}
      </>
    </div>
  );
};

export default TrackOrder;
