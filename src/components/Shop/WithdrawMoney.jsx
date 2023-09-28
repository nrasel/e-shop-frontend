import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getAllOrdersOfShop } from "../../redux/actions/order";
import { loadSeller } from "../../redux/actions/user";
import { server } from "../../server";
import styles from "../../styles/styles";

const WithdrawMoney = () => {
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.order);
  const { seller } = useSelector((state) => state.seller);
  const [open, setOpen] = useState(false);
  const [deliveredOrder, setDeliveredOrder] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(false);
  const [withdrawAmount, setWithdrawAmount] = useState(null);
  const [bankInfo, setBankInfo] = useState({
    bankName: "",
    bankCountry: "",
    bankSwiftCode: null,
    bankAccountNumber: null,
    bankHolderName: "",
    bankAddress: "",
  });

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const withdrawMethod = {
      bankName: bankInfo.bankName,
      bankCountry: bankInfo.bankCountry,
      bankSwiftCode: bankInfo.bankSwiftCode,
      bankAccountNumber: bankInfo.bankAccountNumber,
      bankHolderName: bankInfo.bankHolderName,
      bankAddress: bankInfo.bankAddress,
    };
    await axios
      .put(
        `${server}/shop/update-payment-method`,
        {
          withdrawMethod,
        },
        { withCredentials: true }
      )
      .then((res) => {
        toast.success("withdraw method added successfully!");
        setBankInfo({
          bankName: "",
          bankCountry: "",
          bankSwiftCode: "",
          bankAccountNumber: "null",
          bankHolderName: "",
          bankAddress: "",
        });
        dispatch(loadSeller());
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };

  const deleteHandler = async () => {
    await axios
      .delete(
        `${server}/shop/delete-withdraw-method/${seller?.withdrawMethod._id}`,
        { withCredentials: true }
      )
      .then((res) => {
        toast.success("Withdraw method deleted successfully!");
        dispatch(loadSeller());
      });
  };

  const error = () => {
    toast.error("You have not enough balance for withdraw");
  };

  const withdrawHandler = async () => {
    const amount = withdrawAmount;
    await axios
      .post(
        `${server}/withdraw/create-withdraw-request`,
        { amount },
        { withCredentials: true }
      )
      .then((res) => {
        toast.success("withdraw money request is successful!");
      });
  };

  return (
    <div className="w-full h-[90vh] p-8">
      <div className="w-full bg-white h-full rounded flex items-center justify-center flex-col">
        <h5 className="text-[20px] pb-2">
          Available Balance ${availableBalance}
        </h5>
        <div
          className={`${styles.button} text-white !h-[42px] !rounded-[4px]`}
          onClick={() => (availableBalance < 30 ? error() : setOpen(true))}
        >
          Withdraw
        </div>
      </div>
      {open && (
        <div className="w-full fixed top-0 left-0 flex  items-center justify-center bg-[#0000004e] h-screen z-[9999]">
          <div
            className={`w-[95%] 800px:w-[50%] bg-white shadow rounded  min-h-[40vh] p-3 ${
              paymentMethod ? "h-[60vh] overflow-y-scroll" : "h-[unset]"
            }`}
          >
            <div className="w-full flex justify-end">
              <RxCross1
                size={25}
                onClick={() => setOpen(false) || setPaymentMethod(false)}
                className="cursor-pointer"
              />
            </div>
            {paymentMethod ? (
              <div>
                <h3 className="text-[22px] font-Poppins text-center font-[600]">
                  Add new Withdraw Method:
                </h3>
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="">
                      Bank Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Enter your bank name!"
                      className={`${styles.input} mt-2`}
                      required
                      value={bankInfo.bankName}
                      onChange={(e) =>
                        setBankInfo({ ...bankInfo, bankName: e.target.value })
                      }
                    />
                  </div>
                  <div className="pt-2">
                    <label htmlFor="">
                      Bank Country
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Enter your bank country!"
                      className={`${styles.input} mt-2`}
                      required
                      value={bankInfo.bankCountry}
                      onChange={(e) =>
                        setBankInfo({
                          ...bankInfo,
                          bankCountry: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="pt-2">
                    <label htmlFor="">
                      Bank Swift Code
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Enter your bank swift code!"
                      className={`${styles.input} mt-2`}
                      required
                      value={bankInfo.bankSwiftCode}
                      onChange={(e) =>
                        setBankInfo({
                          ...bankInfo,
                          bankSwiftCode: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="pt-2">
                    <label htmlFor="">
                      Bank Account Number
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Enter your bank account number!"
                      className={`${styles.input} mt-2`}
                      required
                      value={bankInfo.bankAccountNumber}
                      onChange={(e) =>
                        setBankInfo({
                          ...bankInfo,
                          bankAccountNumber: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="pt-2">
                    <label htmlFor="">
                      Bank Holder Name
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Enter your bank holder name!"
                      className={`${styles.input} mt-2`}
                      required
                      value={bankInfo.bankHolderName}
                      onChange={(e) =>
                        setBankInfo({
                          ...bankInfo,
                          bankHolderName: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="pt-2">
                    <label htmlFor="">
                      Bank Address
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Enter your bank address!"
                      className={`${styles.input} mt-2`}
                      required
                      value={bankInfo.bankAddress}
                      onChange={(e) =>
                        setBankInfo({
                          ...bankInfo,
                          bankAddress: e.target.value,
                        })
                      }
                    />
                  </div>
                  <button className={`${styles.button} mb-3 mt-6 text-white`}>
                    Add
                  </button>
                </form>
              </div>
            ) : (
              <>
                <h3 className="text-[22px] font-Poppins">
                  Availabel Withdraw Methods:
                </h3>
                {seller && seller?.withdrawMethod ? (
                  <div>
                    <div className="800px:flex w-full  justify-between items-center">
                      <div className="800px:w-[50%]">
                        <h5>
                          Account Number:
                          {"*".repeat(
                            seller?.withdrawMethod.bankAccountNumber.length - 3
                          ) +
                            seller?.withdrawMethod.bankAccountNumber.slice(-3)}
                        </h5>
                        <h5>Bank Name: {seller?.withdrawMethod.bankName}</h5>
                        <br />
                        <h4>Available Balance: {availableBalance}$</h4>
                      </div>
                      <div className="800px:w-[50%]">
                        <AiOutlineDelete
                          onClick={() => deleteHandler()}
                          className="cursor-pointer"
                          size={25}
                        />
                      </div>
                      <br />
                    </div>
                    <br />
                    <div className="800px:flex w-full items-center">
                      <input
                        type="number"
                        placeholder="amount..."
                        className="800px:w-[100px] w-full border 800px:mr-3 p-1 rounded"
                        value={withdrawAmount}
                        onChange={(e) => setWithdrawAmount(e.target.value)}
                      />
                      <div
                        className={`${styles.button} !h-[42px] text-white`}
                        onClick={withdrawHandler}
                      >
                        Withdraw
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <p>No Payment Methods available!</p>
                    <div className=" w-full flex items-center ">
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

// start from 3:58 minute

export default WithdrawMoney;
