import React from "react";
import Bottom from "../components/include/Bottom";
import Greetings from "../components/home/Greetings";
import MiniCard from "../components/home/MiniCard";
import { BsCashCoin } from "react-icons/bs";
import { GrInProgress } from "react-icons/gr";
import RecentOrders from "../components/home/RecentOrders";
import PopularDishes from "../components/home/PopularDishes";

export function Orders() {
  return (
    <section className="bg-[#1f1f1f] h-[calc(100vh-4.5rem)] no-scrollbar">
      <div className="flex items-center justify-between px-10 py-4">
        <h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wide">
          Orders
        </h1>
        <div className="flex items-center justify-around gap-4">
          <button className="text-[#ababab] text-md bg-[#383838] rounded-lg px-5 py-2 font-semibold">
            All
          </button>
          <button className="text-[#ababab] text-md rounded-lg px-5 py-2 font-semibold">
            In Pogress
          </button>
          <button className="text-[#ababab] text-md rounded-lg px-5 py-2 font-semibold">
            Ready
          </button>
          <button className="text-[#ababab] text-md rounded-lg px-5 py-2 font-semibold">
            Completed
          </button>
        </div>
      </div>
      <Bottom />
    </section>
  );
}

export default Orders;
