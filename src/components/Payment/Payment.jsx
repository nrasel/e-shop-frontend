import React from "react";

const Payment = () => {
  return (
    <div className="w-full flex flex-col items-center py-8">
      <div className="w-[90%] 1000px:w-[70%] block 800px:flex">
        <div className="w-full 800px:w-[65%]">
          <PaymentInfo />
        </div>
        <div className="w-full 800px:w-[35%] 800px:mt-0 mt-8">
          <CardData />
        </div>
      </div>
    </div>
  );
};

const PaymentInfo = () => {
  return (
    <div className="w-full 800px:w-[95%] bg-[#fff] rounded-mb p-5 pb-8"></div>
  );
};

const CardData = () => {
  return <div></div>;
};

export default Payment;
