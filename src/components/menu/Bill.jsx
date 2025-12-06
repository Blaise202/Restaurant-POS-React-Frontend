import React from "react";
import { useSelector } from "react-redux";
import { cartTotalPrice } from "../../redux/slices/cartSlice";

const Bill = () => {
  const totalPrice = useSelector(cartTotalPrice);
  const cartdata = useSelector((state) => state.cart);

  return (
    <>
      <div className="flex items-center justify-between px-5">
        <p className="text-xs text-[#ababab] font-medium">
          Items({cartdata.length})
        </p>
        <h2 className="text-[#f5f5f5] text-sm font-semibold">
          ₵{totalPrice + totalPrice / 5}
        </h2>
      </div>
      <div className="flex items-center justify-between px-5">
        <p className="text-xs text-[#ababab] font-medium">Tax(20%)</p>
        <h2 className="text-[#f5f5f5] text-sm font-semibold">
          ₵{totalPrice / 5}
        </h2>
      </div>
      <div className="flex items-center justify-between px-5">
        <p className="text-xs text-[#ababab] font-medium">
          Items({cartdata.length})
        </p>
        <h2 className="text-[#f5f5f5] text-sm font-semibold">
          ₵{totalPrice + totalPrice / 5}
        </h2>
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
