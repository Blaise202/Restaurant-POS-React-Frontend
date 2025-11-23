import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { MdOutlineReorder, MdTableBar } from "react-icons/md";
import { CiCircleMore } from "react-icons/ci";
import { BiSolidDish } from "react-icons/bi";
import { useLocation, useNavigate } from "react-router-dom";
import Modal from "../include/Modal";

export function Bottom() {
  // const [active, setActive] = useState();
  const location = useLocation();
  const [active, setActive] = useState(
    location.pathname.replace("/", "") || "home"
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [guestCount, setGuestCount] = useState(0);
  const increment = () => {
    if (guestCount < 10) {
      setGuestCount(guestCount + 1);
    }
  };
  const decrement = () => {
    if (guestCount > 1) {
      setGuestCount(guestCount - 1);
    }
  };

  const navigate = useNavigate();

  return (
    <div className="fixed bottom-0 left-0 w-full right-0 bg-[#262626] p-2 h-12 flex justify-around">
      <button
        onClick={() => {
          setActive("home");
          navigate("/");
        }}
        className={`flex justify-center items-center text-[#ababab] ${
          active == "home" ? "bg-[#343434]" : ""
        } w-[200px] rounded-[20px]`}
      >
        {/* <button> */}
        <FaHome
          className="inline mr-4"
          size={20}
        />
        <p>Home</p>
        {/* </button> */}
      </button>
      <button
        onClick={() => {
          setActive("orders");
          navigate("/orders");
        }}
        className={`flex justify-center items-center text-[#ababab] ${
          active == "orders" ? "bg-[#343434]" : ""
        } w-[200px] rounded-[20px]`}
      >
        <MdOutlineReorder
          className="inline mr-4"
          size={20}
        />
        <p>Orders</p>
      </button>
      <button
        onClick={() => {
          setActive("tables");
          navigate("/tables");
        }}
        className={`flex justify-center items-center text-[#ababab] ${
          active == "tables" ? "bg-[#343434]" : ""
        } w-[200px] rounded-[20px]`}
      >
        <MdTableBar
          className="inline mr-4"
          size={20}
        />
        <p>Tables</p>
      </button>
      <button
        onClick={() => {
          setActive("more");
          navigate("/more");
        }}
        className={`flex justify-center items-center text-[#ababab] ${
          active == "more" ? "bg-[#343434]" : ""
        } w-[200px] rounded-[20px]`}
      >
        <CiCircleMore
          className="inline mr-4"
          size={20}
        />
        <p>More</p>
      </button>
      <button
        onClick={openModal}
        className="bg-[#F6B100] text-[#f5f5f5] rounded-full p-2 items-center absolute bottom-3"
      >
        <BiSolidDish size={25} />
      </button>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Create Order"
      >
        <div className="">
          <label className="bloc text-[#ababab] mb-2 text-sm font-medium">
            Customer Name
          </label>
          <div className="flex items-center mt-1 rounded-lg p-3 bg-[#1f1f1f] px-4">
            <input
              type="text"
              placeholder="Enter Customer Name"
              className="bg-transparent flex-1 text-white focus:outline-none"
            />
          </div>
        </div>
        <div className="my-4">
          <label className="bloc text-[#ababab] mb-2 text-sm font-medium">
            Customer Number
          </label>
          <div className="flex items-center mt-1 rounded-lg p-3 bg-[#1f1f1f] px-4">
            <input
              type="tel"
              placeholder="+233-00 000 0000"
              className="bg-transparent flex-1 text-white focus:outline-none"
            />
          </div>
        </div>
        <div className="my-4">
          <label className="bloc text-[#ababab] mb-2 text-sm font-medium">
            Guest
          </label>
          <div className="flex items-center justify-between bg-[#1f1f1f] px-4 py-3 rounded-lg">
            <button
              onClick={decrement}
              className="bg-[#343434] text-white px-3 py-1 rounded-lg"
            >
              -
            </button>
            <span className="text-white">{guestCount} Person(s)</span>
            <button
              onClick={increment}
              className="bg-[#F6B100] text-white px-3 py-1 rounded-lg"
            >
              +
            </button>
          </div>
        </div>
        <button
          onClick={() => {
            navigate("/tables");
          }}
          className="bg-[#b28207] text-white px-4 py-2 my-3 rounded-lg w-full hover:bg-[#d9a91c]"
        >
          Create Order
        </button>
      </Modal>
    </div>
  );
}

export default Bottom;
