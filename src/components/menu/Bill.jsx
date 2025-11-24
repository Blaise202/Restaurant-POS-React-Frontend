import React from "react";

const Bill = () => {
  return (
    <>
      <div className="flex items-center justify-between px-5 mt-1">
        <p className="text-xs text-[#ababab] font-medium mt-2">Items(3)</p>
        <h2 className="text-[#f5f5f5] text-md font-semi bold">₵45.00</h2>
      </div>
      <div className="flex items-center justify-between px-5 mt-1">
        <p className="text-xs text-[#ababab] font-medium mt-2">Tax(20%)</p>
        <h2 className="text-[#f5f5f5] text-md font-semi bold">₵9.00</h2>
      </div>
      <div className="flex items-center gap-3 px-5 mt-4">
        <button className="bg-[#025cca] w-full py-2 rounded-md text-sm text-[#f5f5f5] font-semibold">
          Print Receipt
        </button>
        <button className="bg-[#f6b100] w-full py-2 rounded-md text-sm text-[#1f1f1f] font-semibold">
          Place Order
        </button>
      </div>
    </>
  );
};

export default Bill;
