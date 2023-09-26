import React, { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrdersOfShop } from "../../redux/actions/order";
import styles from "../../styles/styles";

const WithdrawMoney = () => {
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.order);
  const { seller } = useSelector((state) => state.seller);
  const [open, setOpen] = useState(false);
  const [deliveredOrder, setDeliveredOrder] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(false);

  useEffect(() => {
    dispatch(getAllOrdersOfShop(seller?._id));
    const orderData =
      orders && orders.filter((item) => item.status === "Delivered");
    setDeliveredOrder(orderData);
  }, [orders, seller._id, dispatch]);

  const totalEarningWithoutTax =
    deliveredOrder &&
    deliveredOrder.reduce((acc, item) => acc + item.totalPrice, 0);
  const serviceCharge = totalEarningWithoutTax * 0.1;
  const availableBalance = (totalEarningWithoutTax - serviceCharge).toFixed(2);

  return (
    <div className="w-full h-[90vh] p-8">
      <div className="w-full bg-white h-full rounded flex items-center justify-center flex-col">
        <h5 className="text-[20px] pb-2">
          Available Balance ${availableBalance}
        </h5>
        <div
          className={`${styles.button} text-white !h-[42px] !rounded-[4px]`}
          onClick={() => setOpen(true)}
        >
          Withdraw
        </div>
      </div>
      {open && (
        <div className="w-full fixed top-0 left-0 flex  items-center justify-center bg-[#0000004e] h-screen z-[9999]">
          <div className="w-[95%] 800px:w-[50%] bg-white shadow rounded min-h-[40vh] p-3">
            <div className="w-full flex justify-end">
              <RxCross1
                size={25}
                onClick={() => setOpen(false) || setPaymentMethod(false)}
                className="cursor-pointer"
              />
            </div>
            {paymentMethod ? (
              <div className="text-[22px] font-Poppins text-center font-[600]">
                Add new Payment Method
              </div>
            ) : (
              <>
                <h3 className="text-[22px] font-Poppins">
                  Availabel Payment Methods:
                </h3>
                {seller && seller?.paymentMethods ? (
                  <div></div>
                ) : (
                  <div>
                    <p>No Payment Methods available!</p>
                    <div className="w-full flex items-center ">
                      <div
                        className={`${styles.button} text-white text-[18px] mt-4`}
                        onClick={() => setPaymentMethod(true)}
                      >
                        Add new
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default WithdrawMoney;
