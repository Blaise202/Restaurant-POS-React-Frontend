import React from "react";
import { FaCheckDouble, FaCircle } from "react-icons/fa";

export const OrderCard = ({ waiter, type, table, date, total, items }) => {
  return (
    <div className="w-[380px] rounded-lg bg-[#262626] p-3">
      <div className="flex items-center gap-5">
        <button className="bg-[#f6b100] p-2 text-lg font-semibold rounded-lg">
          AM
        </button>
        <div className="flex justify-between items-center w-[80%]">
          <div className="flex flex-col items-start">
            <h2 className="text-[#f5f5f5] text-md font-semibold tracking-wide">
              {waiter}
            </h2>
            <p className=" text-sm text-[#ababab]">
              {table ? `#${table}/ ` : ""} {type}
            </p>
          </div>
          <div className="flex flex-col items-end text-sm">
            <span className="text-green-600 bg-[#2e4a40] px-2 py-1 rounded-md">
              <FaCheckDouble className="inline mr-2" />
              Ready
            </span>
            <span className="text-[#ababab] text-xs">
              <FaCircle className="inline mr-2 text-green-600" />
              Ready to serve
            </span>
          </div>
        </div>
      </div>
      <div className="mt-5 mb-3 flex justify-between text-xs items-center text-[#bbb]">
        <p>{date}</p>
        <p>{items} Items</p>
      </div>
      <hr className="border-t-2 border-gray-600" />
      <div className="flex items-center justify-between mt-4">
        <h1 className="text-[#f5f5f5] text-md font-bold">Total</h1>
        <p className="text-[#f5f5f5] text-md font-semibold">₵{total}</p>
      </div>
    </div>
  );
};

export default OrderCard;
