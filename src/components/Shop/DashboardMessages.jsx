import axios from "axios";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { server } from "../../server";

const DashboardMessages = () => {
  const { seller } = useSelector((state) => state.seller);
  useEffect(() => {
    axios
      .get(
        `${server}/conversation/get-all-conversation-seller/${seller?._id}`,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res.data.conversations);
      });
  }, [seller]);

  return (
    <div className="w-[90%] bg-white m-5 h-[85vh] overflow-y-scroll rounded">
      <h1 className="text-center text-[20px] font-Poppins py-3">
        All Messages
      </h1>
      {/* All messages list */}
      <MessageList />
    </div>
  );
};

const MessageList = () => {
  return (
    <div className="w-full flex p-3  px-3 bg-[#00000010]">
      <div className="relative">
        <img
          className="w-[50px] h-[50px] rounded-full"
          src="http://localhost:8000/download%20(4)-1690396251882-385282865.png"
          alt=""
        />
        <div className="w-[12px] h-[12px] bg-green-400 rounded-full absolute top-[2px] right-[2px]"></div>
      </div>
      <div className="pl-3">
        <h1 className=" text-[18px]">Naimur Rahman</h1>
        <p className="text-[16px] text-[#000c]">Yeah I am good </p>
      </div>
    </div>
  );
};
export default DashboardMessages;
