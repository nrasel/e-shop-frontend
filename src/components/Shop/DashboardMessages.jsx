import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineArrowRight, AiOutlineSend } from "react-icons/ai";
import { TfiGallery } from "react-icons/tfi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { server } from "../../server";
import styles from "../../styles/styles";

const DashboardMessages = () => {
  const { seller } = useSelector((state) => state.seller);
  const [conversations, setConversation] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    axios
      .get(
        `${server}/conversation/get-all-conversation-seller/${seller?._id}`,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        setConversation(res.data.conversations);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [seller]);

  return (
    <div className="w-[90%] bg-white m-5 h-[85vh] overflow-y-scroll rounded">
      {/* All messages list */}
      {!open && (
        <>
          <h1 className="text-center text-[20px] font-Poppins py-3">
            All Messages
          </h1>
          {conversations &&
            conversations.map((item, index) => (
              <MessageList
                data={item}
                key={index}
                index={index}
                setOpen={setOpen}
              />
            ))}
        </>
      )}
      {open && <SellerInbox setOpen={setOpen} />}
    </div>
  );
};

const MessageList = ({ data, index, setOpen }) => {
  const navigate = useNavigate();
  const [active, setActive] = useState(0);

  const handleClick = (id) => {
    navigate(`?${id}`);
    setOpen(true);
  };

  return (
    <div
      className={`w-full flex p-3  px-3  cursor-pointer ${
        active === index ? "bg-[#00000010]" : "bg-transparent"
      }`}
      onClick={(e) => setActive(index) || handleClick(data?._id)}
    >
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
const SellerInbox = ({ setOpen }) => {
  return (
    <div className="w-full min-h-full flex flex-col justify-between">
      {/* message header */}
      <div className="w-full flex p-3 items-center justify-between bg-slate-200">
        <div className="flex">
          <img
            className="w-[60px] h-[60px] rounded-full"
            src="http://localhost:8000/download%20(4)-1690396251882-385282865.png"
            alt=""
          />
          <div className="pl-3">
            <h1 className="text-[18px] font-600">Naimur rahman</h1>
            <h1>Active Now</h1>
          </div>
        </div>
        <AiOutlineArrowRight
          size={20}
          className="cursor-pointer"
          onClick={() => setOpen(false)}
        />
      </div>

      {/* messages */}
      <div className="px-3 h-[65vh]  py-3 overflow-y-scroll">
        <div className="flex w-full my-2">
          <img
            className="h-[40px] w-[40px]"
            src="http://localhost:8000/download%20(4)-1690396251882-385282865.png"
            alt=""
          />
          <div className="w-max  bg-[#38c776] text-white p-2 rounded h-min">
            <p>Hello there!</p>
          </div>
        </div>
        <div className="flex w-full justify-end my-2">
          <div className="w-max  bg-[#38c776] text-white p-2 rounded h-min">
            <p>Hi!</p>
          </div>
        </div>
      </div>
      {/* send message input */}
      <form
        aria-aria-required={true}
        className="p-3 relative w-full flex justify-between items-center"
      >
        <div className="w-[3%]">
          <TfiGallery size={20} className="cursor-pointer" />
        </div>
        <div className="w-[97%]">
          <input
            type="text"
            placeholder="Enter your message..."
            className={`${styles.input}`}
            required
          />
          <input type="submit" value="Send" className="hidden" id="send" />
          <label htmlFor="send">
            <AiOutlineSend
              size={25}
              className="absolute right-4 top-[17px] cursor-pointer"
            />
          </label>
        </div>
      </form>
    </div>
  );
};
export default DashboardMessages;
