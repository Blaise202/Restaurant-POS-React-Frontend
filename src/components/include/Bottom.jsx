import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { MdOutlineReorder, MdTableBar } from "react-icons/md";
import { CiCircleMore } from "react-icons/ci";
import { BiSolidDish } from "react-icons/bi";
import { useLocation, useNavigate } from "react-router-dom";

export function Bottom() {
  // const [active, setActive] = useState();
  const location = useLocation();
  const [active, setActive] = useState(
    location.pathname.replace("/", "") || "home"
  );

  const navigate = useNavigate();

  return (
    <div className="fixed bottom-0 left-0 w-full right-0 bg-[#262626] p-2 h-12  flex justify-around">
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
      <button className="bg-[#F6B100] text-[#f5f5f5] rounded-full p-2 items-center absolute bottom-3">
        <BiSolidDish size={25} />
      </button>
    </div>
  );
}

export default Bottom;
