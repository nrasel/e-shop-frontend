import React, { useEffect, useState } from "react";
import { BsFillBagFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getAllOrdersOfShop } from "../../redux/actions/order";
import { backend_url } from "../../server";
import styles from "../../styles/styles";

const OrderDetails = () => {
  const { orders } = useSelector((state) => state.order);
  const { seller } = useSelector((state) => state.seller);
  const dispatch = useDispatch();
  const [status, setStatus] = useState("");
  const { id } = useParams();

  useEffect(() => {
    dispatch(getAllOrdersOfShop(seller._id));
  }, [seller._id]);

  const orderUpdateHandler = (e) => {};

  const data = orders && orders.find((item) => item._id === id);

  return (
    <div className={`py-4 min-h-screen ${styles.section}`}>
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center">
          <BsFillBagFill size={30} color="crimson" />
          <h1 className="pl-2 text-[25px]">Order Details</h1>
        </div>
        <Link to="/dashboard-orders">
          <div
            className={`${styles.button} !bg-[#fce1e6] !rounded-[4px] text-[#e94560] font[600] !h-[45px] text-[18px]`}
          >
            Order list
          </div>
        </Link>
      </div>

      <div className="w-full flex items-center justify-between pt-6">
        <h5 className="text-[#000000084]">
          Order ID : <span># {data?._id?.slice(0, 8)}</span>
        </h5>
        <h5 className="text-[#000000084]">
          Placed on : <span>{data?.createdAt?.slice(0, 10)}</span>
        </h5>
      </div>

      {/* order items */}
      <br />
      <br />
      {data &&
        data?.cart.map((item, index) => (
          <div className="w-full flex items-start mb-5">
            <img
              src={`${backend_url}/${item.images[0]}`}
              alt=""
              className="w-[80px] h-[80px]"
            />
            <div className="w-full">
              <h5 className="pl-3 text-[20px]">{item.name}</h5>
              <h5 className="pl-3 text-[20px] text-[##00000091]">
                US$ {item.discountPrice} X {item.qty}
              </h5>
            </div>
            {data?.status === "Delivered" && (
              <div className={`${styles.button} text-[#fff]`}>
                Write a review
              </div>
            )}
          </div>
        ))}
      <div className="border-t w-full text-right">
        <div className="pt-3 text-[18px]">
          Total Price : <strong>US$ {data?.totalPrice}</strong>
        </div>
      </div>
      <br />
      <br />
      <div className="w-full 800px:flex items-center">
        <div className="w-full 800px:w-[60%]">
          <h4 className="pt-3 text-[20px] font-[600]">Shipping Address:</h4>
          <h4 className="pt-3 text-[20px] font-[600]">
            {data?.shippingAddress.address1 +
              " " +
              data.shippingAddress.address2}
          </h4>
          <h4 className="text-[20px]">{data?.shippingAddress.country}</h4>
          <h4 className="text-[20px]">{data?.shippingAddress.city}</h4>
          <h4 className="text-[20px]">{data?.user?.phoneNumber}</h4>
        </div>
        <div className="w-full 800px:w-[40%]">
          <h4 className="pt-3 text-[20px] font-[600]">Payment Info:</h4>
          <h4 className="">
            Status :
            {data?.paymentInfo.status ? data?.paymentInfo.status : " Not paid"}
          </h4>
        </div>
      </div>
      <h4 className="pt-3 text-[20px] font-[600]">Order Status:</h4>
      <select
        name=""
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        id=""
        className=" w-[200px] h-[35px] rounded-[5px] border mt-2"
      >
        {[
          "Processing",
          "Transferred to delivery partner",
          "Shipping",
          "Received",
          "On the way",
          "delivered",
        ]
          .slice(
            [
              "Processing",
              "Transferred to delivery partner",
              "Shipping",
              "Received",
              "On the way",
              "delivered",
            ].indexOf(data?.status)
          )
          .map((option, index) => (
            <option value={option} key={index}>
              {option}
            </option>
          ))}
      </select>
      <div
        className={`${styles.button} mt-5 !bg-[#FCE1E6] !rounded-[4px] text-[#E94560] font-[600] !h-[45px] text-[18px]`}
        onClick={orderUpdateHandler}
      >
        Update Status
      </div>
    </div>
  );
};

export default OrderDetails;
