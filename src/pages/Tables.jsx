import React from "react";
import Bottom from "../components/include/Bottom";

export const Tables = () => {
  return (
    <section className="bg-[#1f1f1f] h-[calc(100vh-4.5rem)] overflow-auto no-scrollbar">
      <div className="flex items-center justify-between px-8 py-4">
        <h2 className="">Orders</h2>
        <div className="">
          <button className="">All</button>
          <button className="">In Pogress</button>
          <button className="">Ready</button>
          <button className="">Completed</button>
        </div>
      </div>
      <Bottom />
    </section>
  );
};

export default Tables;
