import React from "react";

import { RiDeleteBack2Fill } from "react-icons/ri";
import { FaNotesMedical } from "react-icons/fa";

export const CartItems = () => {
  return (
    <div className="px-4 py-2">
      <h2 className="font-bold text-md tracking-wide text-[#e4e4e4]">
        Order Details
      </h2>
      <div className="mt-2 overflow-y-scroll no-scrollbar h-[250px]">
        <div className="bg-[#1f1f1f] rounded-lg px-4 py-2 mb-1">
          <div className="flex items-center justify-between">
            <h2 className="font-bold tracking-wide text-[#ababab] text-sm">
              Jollof Rice
            </h2>
            <p className="text-[#ababab] font-semibold">x1</p>
          </div>
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center gap-3">
              <RiDeleteBack2Fill
                className="text-[#ababab] text-xl cursor-pointer"
                size={15}
              />
              <FaNotesMedical
                className="text-[#ababab] text-xl cursor-pointer"
                size={15}
              />
            </div>
            <p className="text-[#f5f5f5] font-semibold text-md">₵15.00</p>
          </div>
        </div>
        <div className="bg-[#1f1f1f] rounded-lg px-4 py-2 mb-1">
          <div className="flex items-center justify-between">
            <h2 className="font-bold tracking-wide text-[#ababab] text-sm">
              Jollof Rice
            </h2>
            <p className="text-[#ababab] font-semibold">x1</p>
          </div>
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center gap-3">
              <RiDeleteBack2Fill
                className="text-[#ababab] text-xl cursor-pointer"
                size={15}
              />
              <FaNotesMedical
                className="text-[#ababab] text-xl cursor-pointer"
                size={15}
              />
            </div>
            <p className="text-[#f5f5f5] font-semibold text-md">₵15.00</p>
          </div>
        </div>
        <div className="bg-[#1f1f1f] rounded-lg px-4 py-2 mb-1">
          <div className="flex items-center justify-between">
            <h2 className="font-bold tracking-wide text-[#ababab] text-sm">
              Jollof Rice
            </h2>
            <p className="text-[#ababab] font-semibold">x1</p>
          </div>
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center gap-3">
              <RiDeleteBack2Fill
                className="text-[#ababab] text-xl cursor-pointer"
                size={15}
              />
              <FaNotesMedical
                className="text-[#ababab] text-xl cursor-pointer"
                size={15}
              />
            </div>
            <p className="text-[#f5f5f5] font-semibold text-md">₵15.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
