import React from "react";
import Bottom from "../components/include/Bottom";
import BackButton from "../components/include/BackButton";
import TableCard from "../components/tables/TableCard";
import { tables } from "../constants";

export const Tables = () => {
  const [status, setStatus] = React.useState("all");

  return (
    <section className="bg-[#1f1f1f] h-[calc(100vh-4.5rem)] no-scrollbar">
      <div className="flex items-center justify-between px-4 py-4">
        <div className="flex items-center gap-4">
          <BackButton />
          <h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wide">
            Tables
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
            onClick={() => setStatus("booked")}
            className={`text-[#ababab] text-md ${
              status == "booked" ? "bg-[#383838]" : ""
            } rounded-lg px-5 py-2 font-semibold`}
          >
            Booked
          </button>
          <button
            onClick={() => setStatus("vacant")}
            className={`text-[#ababab] text-md ${
              status == "vacant" ? "bg-[#383838]" : ""
            } rounded-lg px-5 py-2 font-semibold`}
          >
            Vacant
          </button>
          <button
            onClick={() => setStatus("occupied")}
            className={`text-[#ababab] text-md ${
              status == "occupied" ? "bg-[#383838]" : ""
            } rounded-lg px-5 py-2 font-semibold`}
          >
            Occupied
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 px-5 py-4 p-10 overflow-y-scroll no-scrollbar h-[calc(100vh-5rem-5rem)]">
        {tables.map((table) => {
          if (status === "all" || table.status === status) {
            return (
              <TableCard
                key={table.id}
                label={table.label}
                status={table.status}
                abbr={table.abbr}
              />
            );
          }
        })}
      </div>
      <Bottom />
    </section>
  );
};

export default Tables;
