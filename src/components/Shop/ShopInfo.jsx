import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { backend_url, server } from "../../server";
import styles from "../../styles/styles";
import Loader from "../Layout/Loader";

const ShopInfo = ({ isOwner }) => {
  const { products } = useSelector((state) => state?.products);
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${server}/shop/get-shop-info/${id}`)
      .then((res) => {
        setData(res.data.shop);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, [id]);
  const logOutHandler = () => {
    axios.get(`${server}/shop/shop-logout`, { withCredentials: true });
    window.location.reload();
  };
  const totalReviewsLength =
    products &&
    products.reduce((acc, product) => acc + product.reviews.length, 0);

  const totalRatings =
    products &&
    products.reduce(
      (acc, product) =>
        acc + product.reviews.reduce((sum, review) => sum + review.rating, 0),
      0
    );

  const averageRating = totalRatings / totalReviewsLength || 0;
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <div className="w-full py-5">
            <div className="w-full flex items-center justify-center">
              <img
                className="w-[150px] h-[150px] object-cover rounded-full"
                src={`${backend_url}${data?.avatar}`}
                alt=""
              />
            </div>
            <h3 className="text-center py-2 text-[20px]">{data?.name}</h3>
            <p className="text-[16px] text-[#000000a6] p-[10px] flex items-center">
              {data?.description}
            </p>
          </div>
          <div className="p-3">
            <h5 className="font-[600]">Address</h5>
            <h4 className="text-[#000000a6]">{data?.address}</h4>
          </div>
          <div className="p-3">
            <h5 className="font-[600]">PHone Number</h5>
            <h4 className="text-[#000000a6]">{data?.phoneNumber}</h4>
          </div>
          <div className="p-3">
            <h5 className="font-[600]">Total Products</h5>
            <h4 className="text-[#000000a6]"> {products && products.length}</h4>
          </div>
          <div className="p-3">
            <h5 className="font-[600]">Shop Ratings</h5>
            <h4 className="text-[#000000a6]">{averageRating}/5</h4>
          </div>
          <div className="p-3">
            <h5 className="font-[600]">Joined On</h5>
            <h4 className="text-[#000000a6]">
              {data?.createdAt?.slice(0, 10)}
            </h4>
          </div>
          {isOwner && (
            <div className="py-3 px-4">
              <div
                className={`${styles.button} !w-full !h-[42px] !rounded-[5px]`}
              >
                <Link to="/settings">
                  <span className="text-white">Edit Shop</span>
                </Link>
              </div>
              <div
                onClick={logOutHandler}
                className={`${styles.button} !w-full !h-[42px] !rounded-[5px]`}
              >
                <span className="text-white">Log Out</span>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ShopInfo;
