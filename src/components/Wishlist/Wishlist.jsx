import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCartPlus } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { addTocart } from "../../redux/actions/cart";
import { removeFromWishlist } from "../../redux/actions/wishlist";
import { backend_url } from "../../server";
import styles from "../../styles/styles";

const Wishlist = ({ setWishlistOpen }) => {
  const { wishlist } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  const removeFromWishlistHandler = (data) => {
    dispatch(removeFromWishlist(data));
  };

  const addToCartHandler = (data) => {
    const newData = { ...data, qty: 1 };
    dispatch(addTocart(newData));
    setWishlistOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-[#0000004a] h-screen z-10">
      <div className="fixed top-0 right-0 min-h-full w-[25%] bg-white flex flex-col justify-between shadow-sm">
        {wishlist && wishlist.length === 0 ? (
          <div className="w-full h-screen flex items-center justify-center">
            <div className="flex w-full justify-end pt-5 pr-5 fixed top-3 right-3">
              <RxCross1
                size={25}
                className="cursor-pointer"
                onClick={() => setWishlistOpen(false)}
              />
            </div>
            <h5>Cart Items is empty!</h5>
          </div>
        ) : (
          <div>
            <div className="flex w-full justify-end pt-5 pr-5">
              <RxCross1
                size={25}
                className="cursor-pointer"
                onClick={() => setWishlistOpen(false)}
              />
            </div>
            {/* items length */}
            <div className={`${styles.noramlFlex} p-4`}>
              <AiOutlineHeart size={25} />
              <h5 className="pl-2 text-[20px] font-[500]">
                {wishlist && wishlist.length} items
              </h5>
            </div>
            {/* cart single items */}
            <br />

            <div className="w-full border-t">
              {wishlist &&
                wishlist.map((i, index) => (
                  <CartSingle
                    removeFromWishlistHandler={removeFromWishlistHandler}
                    addToCartHandler={addToCartHandler}
                    key={index}
                    data={i}
                  />
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const CartSingle = ({ data, removeFromWishlistHandler, addToCartHandler }) => {
  const [value, setValue] = useState(1);
  const totalPrice = data.discountPrice * value;
  return (
    <div className="border-b p-4">
      <div className="w-full flex items-center">
        <RxCross1
          onClick={() => removeFromWishlistHandler(data)}
          size={25}
          className="cursor-pointer"
        />
        <img
          src={`${backend_url}${data?.images[0]}`}
          className="w-[80px] h-[80px] ml-2"
          alt=""
        />

        <div className="pl-[5px]">
          <h1>{data.name}</h1>

          <h4 className="font-[600] text-[17px] pt-[3px] text-[#d02222] font-Roboto">
            US ${totalPrice}
          </h4>
        </div>
        <div>
          <BsCartPlus
            size={20}
            className="cursor-pointer"
            title="Add to cart"
            onClick={() => addToCartHandler(data)}
          />
        </div>
      </div>
    </div>
  );
};
//

export default Wishlist;
