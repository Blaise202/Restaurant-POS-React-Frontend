import React, { useState } from "react";
import Bottom from "../components/include/Bottom";
import OrderCard from "../components/orders/OrderCard";
import { orders } from "../constants";
import BackButton from "../components/include/BackButton";
export function Orders() {
  const [status, setStatus] = useState("all");

  return (
    <section className="bg-[#1f1f1f] h-[calc(100vh-4.5rem)] no-scrollbar">
      <div className="flex items-center justify-between px-10 py-4">
        <div className="flex items-center gap-4">
          <BackButton />
          <h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wide">
            Orders
          </h1>
        </div>
        <div className="flex items-center justify-around gap-4">
          <button
            onClick={() => setStatus("all")}
            className={`text-[#ababab] text-md ${
              status == "all" ? "bg-[#383838]" : ""
            } rounded-lg px-5 py-2 font-semibold`}
          >
            All
          </button>
          <button
            onClick={() => setStatus("pending")}
            className={`text-[#ababab] text-md ${
              status == "pending" ? "bg-[#383838]" : ""
            } rounded-lg px-5 py-2 font-semibold`}
          >
            Pending
          </button>
          <button
            onClick={() => setStatus("ready")}
            className={`text-[#ababab] text-md ${
              status == "ready" ? "bg-[#383838]" : ""
            } rounded-lg px-5 py-2 font-semibold`}
          >
            Ready
          </button>
          <button
            onClick={() => setStatus("completed")}
            className={`text-[#ababab] text-md ${
              status == "completed" ? "bg-[#383838]" : ""
            } rounded-lg px-5 py-2 font-semibold`}
          >
            Completed
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-5 px-10 py-4 overflow-y-scroll no-scrollbar h-[calc(100vh-5rem-5rem)]">
        {orders.map((order) => {
          return (
            <OrderCard
              waiter={order.waiter}
              type={order.type}
              table={order.table}
              date={order.date}
              total={order.total}
              items={order.items}
            />
          );
        })}
      </div>
      <Bottom />
    </section>
  );
}

export default Orders;
