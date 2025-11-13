import React from "react";
import { FaSearch } from "react-icons/fa";
import OrderList from "./OrderList";

export const RecentOrders = () => {
  return (
    <div className="px-4 mt-2">
      <div className="bg-[#191919] w-full my-5 h-[350px] rounded-lg">
        <div className="flex justify-between items-center px-3 py-3">
          <h2 className="text-[#f5f5f5] font-semibold tracking-wide">
            Recent Orders
          </h2>
          <a
            href=""
            className="text-[#025cca] text-sm font-semibold"
          >
            View All
          </a>
        </div>
        <div className="flex items-center gap-4 bg-[#1f1f1f] rounded-[15px] px-5 py-2 mx-8 mb-2">
          <FaSearch className="text-[#f5f5f5]" />
          <input
            type="text"
            placeholder="Search in recent orders"
            className="bg-[#1f1f1f] outline-none text-[#f5f5f5]"
          />
        </div>
        {/* order list */}
        <div className="m-2 px-6 overflow-y-scroll h-[250px] mb-5 no-scrollbar">
          <OrderList />
          <OrderList />
          <OrderList />
          <OrderList />
          <OrderList />
          <OrderList />
          <OrderList />
        </div>
      </div>
    </div>
  );
};

export default RecentOrders;
