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
    <>
      <section className="bg-[#1f1f1f] h-[calc(100vh-4.5rem)] overflow-auto flex gap-3 no-scrollbar">
        <Bottom />
      </section>
    </>
  );
}

export default Orders;
