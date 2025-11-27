import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getAvaratName, formatDate } from "../../utils";

const CustomerInfo = () => {
  const customerData = useSelector((state) => state.customer);
  const [dateTime] = useState(new Date());
  return (
    <div className="flex items-center justify-between px-4 py-1">
      <div className="flex flex-col items-start">
        <h2 className="text-md text-[#f5f5f5] font-semibold tracking-wide">
          {customerData.customerName || "Customer Name"}
        </h2>
        <p className="text-xs text-[#ababab] font-medium mt-1">
          #{customerData.orderId || "00000000000"} / Dine in
        </p>
        <p className="text-xs text-[#ababab] font-medium mt-1">
          {formatDate(dateTime)}
        </p>
      </div>
      <button className="py-2 px-3 text-xl font-bold rounded-lg bg-[#f6b100]">
        {getAvaratName(customerData.customerName) || "AB"}
      </button>
    </div>
  );
};

export default CustomerInfo;
