import React from "react";
import { useSelector } from "react-redux";

const CustomerInfo = () => {
  const customerData = useSelector((state) => state.customer);

  return (
    <div className="flex items-center justify-between px-4 py-1">
      <div className="flex flex-col items-start">
        <h2 className="text-md text-[#f5f5f5] font-semibold tracking-wide">
          {customerData.customerName}
        </h2>
        <p className="text-xs text-[#ababab] font-medium mt-1">#101/ Dine in</p>
        <p className="text-xs text-[#ababab] font-medium mt-1">
          November 24, 2025 04:30 AM
        </p>
      </div>
      <button className="py-2 px-3 text-xl font-bold rounded-lg bg-[#f6b100]">
        IB
      </button>
    </div>
  );
};

export default CustomerInfo;
