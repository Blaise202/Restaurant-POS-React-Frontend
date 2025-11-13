import React from "react";
import { FaCheckDouble, FaCircle } from "react-icons/fa";

const OrderList = () => {
  return (
    <>
      <div className="flex items-center gap-5 px-4 m-1">
        <button className="bg-[#f6b100] p-2 text-lg font-semibold rounded-lg">
          AM
        </button>
        <div className="flex justify-between items-center w-[80%]">
          <div className="flex flex-col items-start">
            <h2 className="text-[#f5f5f5] text-md font-semibold tracking-wide">
              Blaise
            </h2>
            <p className=" text-sm text-[#ababab]">8 Items</p>
          </div>
          <div className="">
            <b className="text-[#f6b100] border border-[#f6b100] p-1 rounded-lg">
              Table No: 4
            </b>
          </div>
          <div className="flex flex-col items-start">
            <span className="text-green-600 px-4">
              <FaCheckDouble className="inline mr-2" />
              Ready
            </span>
            <span className="text-[#ababab] text-sm">
              <FaCircle className="inline mr-2 text-green-600" />
              Ready to serve
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderList;
