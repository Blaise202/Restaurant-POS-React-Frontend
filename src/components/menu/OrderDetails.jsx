import React from "react";

import { RiDeleteBack2Fill } from "react-icons/ri";
import { FaNotesMedical } from "react-icons/fa";

export const OrderDetails = () => {
  return (
    <div className="px-4 py-2">
      <h2 className="font-bold text-lg tracking-wide text-[#e4e4e4]">
        Order Details
      </h2>
      <div className="mt-4 overflow-y-scroll no-scrollbar h-[380px]">
        <div className="bg-[#1f1f1f] rounded-lg px-4 py-4 mb-2">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold tracking-wide text-[#ababab] text-md">
              Jollof Rice
            </h2>
            <p className="text-[#ababab] font-semibold">x1</p>
          </div>
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center gap-3">
              <RiDeleteBack2Fill
                className="text-[#ababab] text-xl cursor-pointer"
                size={20}
              />
              <FaNotesMedical
                className="text-[#ababab] text-xl cursor-pointer"
                size={20}
              />
            </div>
            <p className="text-[#f5f5f5] font-semibold">₵15.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
